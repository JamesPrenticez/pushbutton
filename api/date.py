from http.server import BaseHTTPRequestHandler
import datetime

class handler(BaseHTTPRequestHandler):
  def date(request):
      now = datetime.datetime.now() 
      msg = f'Today is {now}'
      return msg
  
print(handler.date(""))