from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import event, register, news, subscribe
from routes import admin
from routes import auth
from routes import articles
from routes import bookings


app = FastAPI()
app.include_router(subscribe.router)
app.include_router(admin.router)
app.include_router(auth.router)
app.include_router(articles.router)
app.include_router(bookings.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(event.router)
app.include_router(register.router)
app.include_router(news.router)


@app.get("/")
def root():
    return {"message": "Welcome to Tallship Races API"}


news_data = [
    {"title": "Tall Ships Arrival Parade", "content": "Witness the majestic tall ships as they arrive in Kristiansand, marking the commencement of the festival.."},
    {"title": "Open Ship Tours", "content": "KExplore the decks of participating tall ships and meet their international crews."},
    {"title": "Crew Parade", "content": "Enjoy the vibrant parade featuring crews from around the world, showcasing their cultures and camaraderie."}
]

schedule_data = [
    {"time": "09:00 AM", "event": "Tall Ships Arrival Parade"},
    {"time": "10:00AM", "event": "Crew Parade"},
    {"time": "11:00AM", "event": "Country Music Night with Arthur Stulien"},
    {"time": "12:00", "event": "Fireworks Display"},
]

events_data = [

  {
    "id": 1,
    "title": "Tall Ships Arrival Parade",
    "description": "Witness the majestic tall ships as they arrive in Kristiansand, marking the commencement of the festival.",
    "date": "2025-07-30",
    "time": "12:00"
  },
  {
    "id": 2,
    "title": "Open Ship Tours",
    "description": "Explore the decks of participating tall ships and meet their international crews.",
    "date": "2025-07-31",
    "time": "10:00"
  },
  {
    "id": 3,
    "title": "Crew Parade",
    "description": "Enjoy the vibrant parade featuring crews from around the world, showcasing their cultures and camaraderie.",
    "date": "2025-08-01",
    "time": "15:00"
  },
  {
    "id": 4,
    "title": "Country Music Night with Arthur Stulien",
    "description": "Experience an evening of country music with Arthur Stulien on the main stage. Free entry!",
    "date": "2025-07-31",
    "time": "22:00"
  },
  {
    "id": 5,
    "title": "Fireworks Display",
    "description": "Conclude the festivities with a spectacular fireworks show over the harbor.",
    "date": "2025-08-02",
    "time": "22:30"
  }


]


@app.get("/news")
def get_news():
    return news_data

@app.get("/schedule")
def get_schedule():
    return schedule_data


@app.get("/events")
def get_events():
    return events_data