from flask import Flask
from flask_cors import CORS
import csv 
import json

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    arr = []
    with open('Electric_Production.csv', 'r') as csvfile:
        reader = csv.reader(csvfile)
        
        for row in reader:
            arr.append([row[0], float(row[1])])
            
    return json.dumps(arr)  

@app.route("/")
def hello_world():