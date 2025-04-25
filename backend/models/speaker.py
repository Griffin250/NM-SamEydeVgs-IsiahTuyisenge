from pydantic import BaseModel
from typing import Optional

class Speaker(BaseModel):
    name: str
    bio: Optional[str] = None
    image_url: Optional[str] = None
