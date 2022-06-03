from flask import Flask, make_response, redirect, send_file
import requests
import base64
import json

app = Flask(__name__, static_folder="web/static", static_url_path="", template_folder="web/templates")

@app.route("/")
def RerouteToIndex():
    return redirect("/index.html")

@app.route("/GetMinecraftSkin/<name>")
def GetMinecraftSkin(name):
    
    uuid = requests.get(url = "https://api.mojang.com/users/profiles/minecraft/" + name).json()['id']
    properties = requests.get(url = "https://sessionserver.mojang.com/session/minecraft/profile/" + uuid).json()['properties']
    for i in range(len(properties)):
        if (properties[i]['name'] == "textures"):
            value = properties[i]['value']

    imageLink = json.loads(base64.b64decode(value))['textures']['SKIN']['url']
    
    response = make_response(requests.get(url = imageLink).content)
    response.headers.set('Content-Type', 'image/png')
    return response




app.run()