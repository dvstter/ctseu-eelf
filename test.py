#from pathlib import Path
#import os

#print(Path(__file__).resolve().parent.parent)
#print(Path(__file__).resolve())

import requests
import json
from copy import deepcopy

login_headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12A365 MicroMessenger/5.4.1 NetType/WIFI',
    'Content-Type': 'application/json;charset=UTF-8',
}
body = '{"username":"7190012","password":"khCFS2012","verifyKey":""}'
login_url = 'https://smaco2.uestc.edu.cn/shiroApi/auth/thirdpart/login?pipe=uestc-portal'
S = requests.session()
R = S.post(login_url, body, headers=login_headers)
J = json.loads(R.content)
auth = J['data']['Authorization']

print(R.content, auth)

# get the generated file's name
qr_headers = deepcopy(login_headers)
qr_headers['Content-Type'] = 'application/json, text/plain, */*'
qr_headers['Referer'] = 'https://smaco2.uestc.edu.cn/wx/genQrcode'
qr_headers['Authorization'] = auth
qr_url = 'https://smaco2.uestc.edu.cn/pipe/pass/getObjectQrcode'
R = S.get(qr_url, headers=qr_headers)
J = json.loads(R.content)
path = J['data']['picPath']

print(R.content, path)

# get the image file
img_headers = deepcopy(login_headers)
filename = './poc.png'
img_headers['Content-Type'] = ''
img_headers['Accept'] = 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8'
img_url = 'https://smaco2.uestc.edu.cn/qrcode' + path
R = S.get(img_url, headers=img_headers)
f = open(filename, 'wb')
f.write(R.content)
f.close()
