from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)

# Configure CORS with additional options
CORS(app, resources={
    r"/*": {
        "origins": "*",  # For development - restrict this in production
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"]
    }
})

BASE_API_URL = "https://api.langflow.astra.datastax.com"
LANGFLOW_ID = "ca14625f-5c6c-4641-b161-9506eee5df4f"
FLOW_ID = "be49e4b5-4a23-4b94-b337-0af998531993"
APPLICATION_TOKEN = os.environ.get("APP_TOKEN")

@app.route("/analyze", methods=["OPTIONS"])
def handle_options():
    response = jsonify({"status": "ok"})
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    return response

@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        # Add CORS headers to the response
        response = jsonify({"error": "No JSON data received"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        
        data = request.json
        if not data:
            return response, 400
        
        text = data.get("text")
        if not text:
            response = jsonify({"error": "Text input is required"})
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response, 400
        
        api_url = f"{BASE_API_URL}/lf/{LANGFLOW_ID}/api/v1/run/{FLOW_ID}"
        payload = {
            "input_value": text,
            "output_type": "chat",
            "input_type": "chat",
        }
        headers = {
            "Authorization": f"Bearer {APPLICATION_TOKEN}",
            "Content-Type": "application/json",
        }
        
        api_response = requests.post(api_url, json=payload, headers=headers)
        api_response.raise_for_status()
        
        response = jsonify(api_response.json())
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    
    except requests.exceptions.RequestException as e:
        response = jsonify({"error": f"API request failed: {str(e)}"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500
    except Exception as e:
        response = jsonify({"error": f"Server error: {str(e)}"})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response, 500

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)