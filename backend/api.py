from flask import Flask, request
from database import update, collection
from agent import agent_executor
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/get-fridge", methods=['GET', 'POST'])
def home():
    try:
        if request.method == 'GET':
            return collection.find_one({"_id": 0})
        else:
            return 'no request found'

    except Exception as e:
        return f"error {e}"

@app.route("/update", methods=['GET', 'POST'])
def home():
    try:
        data = request.get_json()
        if 'update' in data:
            update_json = data['update']
            update(update_json)
            return 'updated!'
        else:
            return 'no inputs found'


    except Exception as e:
        return f"error {e}"
    

@app.route("/chat", methods=['GET', 'POST'])
def home():
    try:
        data = request.get_json()
        if 'prompt' in data:
            prompt = data['prompt']
            response = agent_executor.invoke({"input":f"{prompt}.This is what the user currnetly has in the fridge: {collection.find_one({"_id": 0})}. And That is the users request, please include the ingredients needed, the instructions, and both the prep and cook time."})
        
            return response['output']
        else:
            return 'no prompt found'

    except Exception as e:
        return f"error {e}"