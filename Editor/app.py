from flask import Flask

app = Flask(__name__, static_folder="web/static", static_url_path="", template_folder="web/templates")

app.run()