from django.shortcuts import render
from datetime import datetime
import requests
import json
from pathlib import Path
from copy import deepcopy

def __download_qr_code():
    try:
        # login and get authorization code
        login_headers = {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI',
            'Content-Type': 'application/json;charset=UTF-8',
        }
        body = '{"username":"202011210310","password":"Molmol5545","verifyKey":""}'
        login_url = 'https://smaco2.uestc.edu.cn/shiroApi/auth/thirdpart/login?pipe=uestc-portal'
        S = requests.session()
        R = S.post(login_url, body, headers=login_headers)
        J = json.loads(R.content)
        auth = J['data']['Authorization']

        # get the generated file's name
        qr_headers = deepcopy(login_headers)
        qr_headers['Content-Type'] = 'application/json, text/plain, */*'
        qr_headers['Referer'] = 'https://smaco2.uestc.edu.cn/wx/genQrcode'
        qr_headers['Authorization'] = auth
        qr_url = 'https://smaco2.uestc.edu.cn/pipe/pass/getObjectQrcode'
        R = S.get(qr_url, headers=qr_headers)
        J = json.loads(R.content)
        path = J['data']['picPath']

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
        return 'fetched_image.png'

    except Exception as e:
        # print to Django's log
        return None

def home(request):
    t = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    context = {'time_str': t}
    return render(request, 'home.html', context)

def qrcode(request):
    ret = __download_qr_code()
    if not ret:
        ret = 'qr.JPG'

    return render(request, 'qr.html', {'img_file': ret})