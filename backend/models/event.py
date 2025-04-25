from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Event(BaseModel):
    title: str
    description: Optional[str] = None
    datetime: datetime
