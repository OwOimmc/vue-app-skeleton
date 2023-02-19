import json
import os
from gevent.pywsgi import WSGIServer
from flask_cors import CORS
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)
cors = CORS(
    app,
    resources={r"/*"},
    origins=[
        "http://localhost:1000",
    ],
)



@app.route("/")
def index():
    return ''


@app.route('/', methods=["POST", "OPTIONS"])
def add_response():
    headers = {'Content-type': 'application/json'}
    request_data = json.loads(request.data)
    # nactu soubor
    with open('data.json', 'r') as f:
        data = f.read()
        file_data = json.loads(data)

    # přidám další řárek
    file_data.append(request_data)
    # zapíšu
    with open('data.json', 'w') as f:
        f.write(json.dumps(file_data, indent=2))
    # response
    return jsonify(file_data)

if __name__ == "__main__":

    # http_server = WSGIServer(("0.0.0.0"), app)
    # http_server.serve_forever()

    app.run(debug=True, host="0.0.0.0", port=7000)
