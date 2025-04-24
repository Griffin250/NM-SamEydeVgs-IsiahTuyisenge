from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import event, register, news, speakers, subscribe
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
app.include_router(speakers.router)

@app.get("/")
def root():
    return {"message": "Welcome to Tallship Races API"}


news_data = [
    {"title": "AI Revolution at TechFest", "content": "Discover how AI is reshaping Innovation."},
    {"title": "Blockchain Panel Recap", "content": "Key insights from our blockchain experts."},
    {"title": "Meet the keynote Speaker", "content": "An exclusive with the head of GriffinTech Labs."}
]

schedule_data = [
    {"time": "09:00 AM", "event": "Opening Keynote"},
    {"time": "10:00AM", "event": "Pannel discussion of the Future of AI"},
    {"time": "11:00AM", "event": "Cyber security trends"},
    {"time": "12:00", "event": "Startup Showcase"},
]
speakers_data = [
    {"name": "Isiah Griffin", "title": "CEO of GriffinTechs", "bio": "Leading the charge in AI and cybersecurity."},    
    {"name": "Khan Sill", "title": "Software Engineer at GriffinTechs", "bio": "Expert in AI and machine learning."},
    {"name": "Lama Neeson", "title": "Data Scientist at GriffinTechs", "bio": "Transforming data into actionable insights."},
    {"name": "John Doe", "title": "Chief Engineer at GriffinTechs" , "bio": "Building the next generation of tech."},
    {"name": "Sarah Muke", "title": "Network Engineer at GriffinTechs" , "bio": "Securing the digital landscape."},
]

events_data = [

  {
    id: 1,
    "title": "Tall Ships Arrival Parade",
    "description": "Witness the majestic tall ships as they arrive in Kristiansand, marking the commencement of the festival.",
    "date": "2025-07-30",
    "time": "12:00"
  },
  {
    id: 2,
    "title": "Open Ship Tours",
    "description": "Explore the decks of participating tall ships and meet their international crews.",
    "date": "2025-07-31",
    "time": "10:00"
  },
  {
    id: 3,
    "title": "Crew Parade",
    "description": "Enjoy the vibrant parade featuring crews from around the world, showcasing their cultures and camaraderie.",
    "date": "2025-08-01",
    "time": "15:00"
  },
  {
    id: 4,
    "title": "Country Music Night with Arthur Stulien",
    "description": "Experience an evening of country music with Arthur Stulien on the main stage. Free entry!",
    "date": "2025-07-31",
    "time": "22:00"
  },
  {
    id: 5,
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

@app.get("/speakers")
def get_speakers():
    return speakers_data

@app.get("/events")
def get_events():
    return events_data