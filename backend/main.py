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
    "id": 1,
    "title": "AI & Cybersecurity Workshop",
    "description": "Dive into how AI is transforming modern cybersecurity and threat detection systems.",
    "date": "2025-05-01",
    "time": "10:00"
  },
  {
    "id": 2,
    "title": "Web3: Decentralized Future",
    "description": "Explore blockchain, smart contracts, and the new internet economy with top Web3 developers.",
    "date": "2025-05-01",
    "time": "13:30"
  },
  {
    "id": 3,
    "title": "Hackathon Kickoff",
    "description": "Join the official hackathon opening. Form teams, brainstorm ideas, and begin coding for prizes.",
    "date": "2025-05-02",
    "time": "09:00"
  },
  {
    "id": 4,
    "title": "Startup Pitch Arena",
    "description": "Watch startups pitch their products to a live jury of investors and tech leaders.",
    "date": "2025-05-02",
    "time": "15:00"
  },
  {
    "id": 5,
    "title": "Closing Keynote: The Future of Code",
    "description": "A visionary talk on the next 10 years of programming, automation, and ethical AI.",
    "date": "2025-05-03",
    "time": "16:00"
  },
  {
  "id": 6,
  "title": "AI & Cybersecurity Workshop",
  "description": "Learn how AI is transforming the cybersecurity space.",
  "date": "2025-05-01",
  "time": "14:00"
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