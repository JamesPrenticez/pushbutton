from fastapi import FastAPI

app = FastAPI()

@app.get("/api", tags=["Root"])
async def read_root():
  return { 
    "message": "Welcome to my notes application, use the /docs route to proceed"
   }

