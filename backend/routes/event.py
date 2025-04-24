from fastapi import APIRouter
from models.event import Event
from database import db

router = APIRouter(prefix="/events", tags=["Events"])

@router.get("/")
async def get_events():
    events = await db.events.find().to_list(100)
    return events

@router.post("/")
async def create_event(event: Event):
    new_event = event.dict()
    await db.events.insert_one(new_event)
    return {"message": "Event created", "event": new_event}
