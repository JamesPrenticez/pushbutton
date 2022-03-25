from http.server import BaseHTTPRequestHandler
import datetime

class Handler(BaseHTTPRequestHandler):
  def date(request):
      now = datetime.datetime.now() 
      msg = f'Today is {now}'
      return msg
  
