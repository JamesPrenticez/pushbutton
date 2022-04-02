from fastapi import FastAPI, Body
from fastapi.encoders import jsonable_encoder

from typing import Optional
from pydantic import BaseModel

app = FastAPI()

# This is rre-populated basic database i.e. a text object lol
notes = [
    {   "id": "1",
        "title": "Python Fast API",
        "content": "These notes are served up on a python backend.. even though this is a Next.js frontend... pretty fancy huh. But why would you want to do this you may ask? The intended future for this application is to use a Python library called Data2PDF. Which like other machine learning packages is exclusive to the Python eco system."
    },
    {
        "id": "2",
        "title": "GetStaticProps",
        "content": "Work in progress, just not as simple as I would have liked - somthing to do with the format of the data - shouldn't be to hard to fix up."
    }
    {
        "id": "2",
        "title": "POST, PATCH, DELETE",
        "content": "We have writen the api for these crud methods we just need to create some user input feilds to hook them up"
    }
]

class NoteSchema(BaseModel):
  title: Optional[str]
  content: Optional[str]

  class Config:
    schema_extra = {
        "example": {
            "title": "LogRocket.",
            "content": "Logrocket is the most flexible publishing company for technical authors. From editors to payment, the process is too flexible and that's what makes it great."
        }
    }

@app.get("/api/notes")
async def get_notes() -> dict:
    return {
        "notes": notes
    }

@app.get("/api/notes/{id}")
async def get_note(id: str) -> dict:
    if int(id) > len(notes):
        return {
            "error": "Invalid note ID"
        }

    for note in notes.keys():
        if note == id:
            return {
                "notes": notes[note]
            }
            
@app.post("/api/notes/")
def add_note(note: NoteSchema = Body(...)) -> dict:
    notes[str(len(notes)+1)] = note.dict()

    return {
        "message": "Note added successfully"
    }    

@app.put("/api/notes/{id}")
def update_note(id: str, note: NoteSchema):
    stored_note = notes[id]
    if stored_note:
        stored_note_model = NoteSchema(**stored_note)
        update_data = note.dict(exclude_unset=True)
        updated_note = stored_note_model.copy(update=update_data)
        notes[id] = jsonable_encoder(updated_note)
        return {
            "message": "Note updated successfully"
        }
    return {
        "error": "No such note exist"
    }

@app.delete("/api/notes/{id}")
def delete_note(id: str) -> dict:
    if int(id) > len(notes):
        return {
            "error": "Invalid note ID"
        }

    for note in notes.keys():
        if note == id:
            del notes[note]
            return {
                "message": "Note deleted"
            }

    return {
        "error": "Note with {} doesn't exist".format(id)
    }
