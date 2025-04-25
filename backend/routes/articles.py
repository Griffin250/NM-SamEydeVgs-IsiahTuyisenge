from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from database import db

router = APIRouter()

class Article(BaseModel):
    title: str
    snippet: str
    url: str
    published_at: str

@router.post("/articles/save")
async def save_article(article: Article):
    result = await db.saved_articles.insert_one(article.dict())
    return {"message": "Article saved", "id": str(result.inserted_id)}
