from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

tasks = []

@app.route("/")
def home():
    return "Backend is running successfully!"

@app.route("/tasks", methods=["GET"])
def get_tasks():
    return jsonify(tasks)

@app.route("/add-task", methods=["POST"])
def add_task():
    data = request.json
    tasks.append(data["task"])
    return jsonify({"message": "Task added"})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
