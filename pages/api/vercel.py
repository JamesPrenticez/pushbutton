from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','json')
        self.end_headers()
        message = 'Hello from Python from a Serverless Function!'
        value = {"message": message}
        # Dictionary to JSON Object using dumps() method
        # Return JSON Object
        self.json.dumps(message)
        return