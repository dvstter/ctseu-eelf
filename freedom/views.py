from django.shortcuts import render
from django.shortcuts import HttpResponse
from datetime import datetime
import requests
import json
from pathlib import Path
from copy import deepcopy
import random

def __download_qr_code(usrname, passwd):
    debug_info = []
    try:
        # login and get authorization code
        login_headers = {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI',
            'Content-Type': 'application/json;charset=UTF-8',
        }
        body = '{"username":"%s","password":"%s","verifyKey":""}' % (usrname, passwd)
        login_url = 'https://smaco2.uestc.edu.cn/shiroApi/auth/thirdpart/login?pipe=uestc-portal'
        S = requests.session()
        R = S.post(login_url, body, headers=login_headers)
        J = json.loads(R.content)
        auth = J['data']['Authorization']

        debug_info.append((R.content, auth))

        # get the generated file's name
        qr_headers = deepcopy(login_headers)
        qr_headers['Content-Type'] = 'application/json, text/plain, */*'
        qr_headers['Referer'] = 'https://smaco2.uestc.edu.cn/wx/genQrcode'
        qr_headers['Authorization'] = auth
        qr_url = 'https://smaco2.uestc.edu.cn/pipe/pass/getObjectQrcode'
        R = S.get(qr_url, headers=qr_headers)
        J = json.loads(R.content)
        path = J['data']['picPath']

        debug_info.append((R.content, path))

        # get the image file
        img_headers = deepcopy(login_headers)
        filename = Path(__file__).resolve().parent / 'static/images/fetched_image.png'
        img_headers['Content-Type'] = ''
        img_headers['Accept'] = 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8'
        img_url = 'https://smaco2.uestc.edu.cn/qrcode' + path
        R = S.get(img_url, headers=img_headers)
        f = open(filename, 'wb')
        f.write(R.content)
        f.close()

        debug_info.append((R.content, filename))
        return 'fetched_image.png', debug_info

    except Exception as e:
        # print to Django's log
        return None, debug_info

def home(request):
    t = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    context = {'time_str': t}
    return render(request, 'home.html', context)

def qrcode(request):
    users = [('202011210310', 'Molmol5545'), ('201711310119', 'Cai627041')]
    u, p = random.choice(users)
    ret, debug_info = __download_qr_code(u, p)
    if not ret:
        ret = 'qr.JPG'

    return render(request, 'qr.html', {'img_file': ret})