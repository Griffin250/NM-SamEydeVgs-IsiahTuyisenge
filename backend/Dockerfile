# Use Python base image
FROM python:3.11-slim

# Set working directory inside the container
WORKDIR /app

# Step 1: Copy only requirements.txt first
COPY requirements.txt .

# Step 2: Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Step 3: Now copy the rest of your app
COPY . .

# Expose FastAPI port
EXPOSE 8000

# Start the FastAPI server
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
