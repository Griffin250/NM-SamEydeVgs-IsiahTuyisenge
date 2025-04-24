from fastapi import APIRouter
from database import db

router = APIRouter(prefix="/admin", tags=["Admin"])

def serialize_doc(doc):
    doc["_id"] = str(doc["_id"])
    return doc

@router.get("/registers")
async def get_all_registered_users():
    users = await db.users.find().to_list(100)
    return [serialize_doc(user) for user in users]

@router.get("/subscribers")
async def get_all_subscribers():
    subscribers = await db.subscribers.find().to_list(100)
    return [serialize_doc(sub) for sub in subscribers]

@router.get("/bookings")
async def get_all_bookings():
    bookings = await db.bookings.find().to_list(100)
    return [serialize_doc(booking) for booking in bookings]
