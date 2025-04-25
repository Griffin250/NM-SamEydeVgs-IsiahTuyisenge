from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from database import db

class News(BaseModel):
    title: str
    content: str
    image_url: Optional[str] = None

router = APIRouter(prefix="/news", tags=["News"])

@router.get("/")
async def get_news():
    news = await db.news.find().to_list(100)
    return news

@router.post("/")
async def post_news(news: News):
    new_news = news.dict()
    await db.news.insert_one(new_news)
    return {"message": "News posted", "news": new_news}
