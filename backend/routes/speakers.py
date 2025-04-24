from fastapi import APIRouter
from models.speaker import Speaker
from database import db

router = APIRouter(prefix="/speakers", tags=["Speakers"])

@router.get("/")
async def get_speakers():
    speakers = await db.speakers.find().to_list(100)
    return speakers

@router.post("/")
async def add_speaker(speaker: Speaker):
    new_speaker = speaker.dict()
    await db.speakers.insert_one(new_speaker)
    return {"message": "Speaker added", "speaker": new_speaker}
