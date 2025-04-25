
from motor.motor_asyncio import AsyncIOMotorClient
import os

MONGO_URL = "mongodb+srv://admin:admin12@tallshipraces.9aydfnp.mongodb.net/admin?retryWrites=true&w=majority"
client = AsyncIOMotorClient(MONGO_URL)
db = client["tallshipraces"]
