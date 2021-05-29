import json
import sys
from wit import Wit
# from utils import uprint
access_token = ''

with open('speech-to-text/config.json') as json_file:
    data = json.load(json_file)
    access_token = data['wit_api_key']
client = Wit(access_token)

resp = None
try:
    with open('speech-to-text/sample.wav', 'rb') as f:
        resp = client.speech(f, {'Content-Type': 'audio/wav'})

    print(resp['text'].encode('utf8'))
except Exception as e:
    print(e)
sys.stdout.flush()