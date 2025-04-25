import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI","mongodb+srv://griffintechs:griffintechs12@cluster0.opjiqpu.mongodb.net/admin?retryWrites=true&w=majority")
