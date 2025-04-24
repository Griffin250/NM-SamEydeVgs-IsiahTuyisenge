from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from jose import jwt
import os

router = APIRouter(prefix="/auth", tags=["Auth"])

SECRET_KEY = "super-secret-key"  # Change this in real use
ALGORITHM = "HS256"

class AdminLogin(BaseModel):
    username: str
    password: str

@router.post("/login")
def login_admin(data: AdminLogin):
    if data.username == "admin" and data.password == "admin123":
        token = jwt.encode({"username": data.username}, SECRET_KEY, algorithm=ALGORITHM)
        return {"access_token": token}
    raise HTTPException(status_code=401, detail="Invalid credentials")
