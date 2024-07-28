from flask import Flask, request, jsonify
from database import update, collection
from agent import agent_executor
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/get-fridge", methods=['GET', 'POST'])
def get_fridge():
    try:
        if request.method == 'GET':
            return collection.find_one({"_id": 0})
        else:
            return 'no request found'

    except Exception as e:
        return f"error {e}"

@app.route("/update", methods=['GET', 'POST'])
def update():
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
def chat():
    try:
        data = request.get_json()
        if 'message' in data:
            prompt = data['message']
            fridge = collection.find_one({'_id': 0})
            print(prompt)
            response = agent_executor.invoke({"input":prompt})
            print(response)

            return jsonify(response['output'])
        else:
            return 'no prompt found'

    except Exception as e:
        return f"error {e}"
    
if __name__ == "__main__":
    app.run(debug=True)