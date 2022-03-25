from http.server import BaseHTTPRequestHandler
import datetime
import json 
class handler(BaseHTTPRequestHandler):
  def date(request):
      now = datetime.datetime.now() 
      msg = f'Today is {now}'
      return json.dump(msg)