from flask import Flask, jsonify, abort
 
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)

app = Flask(__name__)

count = 0
@app.route('/health', methods=['GET'])
def health_check():
    """Endpoint for health checks."""
    return jsonify({"status": "success"})

@app.route('/count', methods=['GET'])
def get_count():
    """Endpoint to get the count."""
    # Placeholder logic to simulate fetching a count from a database or cache
    global count

    count += 1
    logging.info(f"Returning count: {count}")
    return jsonify({'count': count})

if __name__ == '__main__':
    # Use environment variable for port, default to 5000 if not set
    port = int(os.getenv("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
