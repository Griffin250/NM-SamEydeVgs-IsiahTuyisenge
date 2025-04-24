from fastapi import APIRouter
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient

router = APIRouter()

# Match the fields sent from the frontend
class BookingModel(BaseModel):
    name: str
    email: EmailStr
    event: str
    message: str = ""  # Optional field

# Initialize MongoDB client
client = AsyncIOMotorClient("mongodb+srv://admin:admin12@tallshipraces.9aydfnp.mongodb.net/admin?retryWrites=true&w=majority")
db = client["tallshipraces"]

# Booking endpoint
@router.post("/bookings")
async def create_booking(data: BookingModel):
    await db["bookings"].insert_one(data.dict())
    return {"message": "Booking created successfully!"}
