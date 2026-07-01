from flask import Flask, jsonify, request

app = Flask(__name__)

dados = [
    {'id': 1, 'nome': 'Dado 1', 'booleana': False},
    {'id': 2, 'nome': 'Dado 2', 'booleana': True}
]

@app.route('/')
def home():
    return '<h1>Welcome to the Flask API!</h1>'

# Define an API endpoint to get all tasks (GET method)
@app.route('/ver-dados', methods=['GET'])
def get_dados():
    return jsonify({'dados': dados})

app.run(debug=True)
