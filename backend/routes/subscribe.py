from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr
from database import db

router = APIRouter(prefix="/subscribe", tags=["Notifications"])

class Subscriber(BaseModel):
    email: EmailStr

@router.post("/")
async def subscribe_user(subscriber: Subscriber):
    existing = await db.subscribers.find_one({"email": subscriber.email})
    if existing:
        raise HTTPException(status_code=400, detail="Email already subscribed.")

    await db.subscribers.insert_one(subscriber.dict())
    return {"message": "Subscribed successfully!"}
