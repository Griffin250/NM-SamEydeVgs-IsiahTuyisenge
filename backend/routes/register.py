from fastapi import APIRouter
from models.user import User
from database import db

router = APIRouter(prefix="/register", tags=["Register"])

@router.post("/")
async def register_user(user: User):
    await db.users.insert_one(user.dict())
    return {"message": "User registered successfully"}
