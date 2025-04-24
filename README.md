# NM-SamEydeVgs-IsiahTuyisenge
Skole-NM Konkurrasen 2025


                            ## README 
## Contents
- Project overview
- Tech stack
- Features
- Folder structure
- Setup (Docker + Local)
- API overview
- Screenshots
- Auth, i18n, and dark mode
- Credits

---

### ✅ `README.md` — Drop this in your root folder:

```markdown
# 🚀 Tallship Races

**Tallship Races** is a full-stack event management web application built for showcasing events,
 registering attendees, managing admin dashboards, and engaging users via a
  subscription/newsletter system — all wrapped with multi-language support, responsive design, 
  and full Docker-based deployment.

---

## 📸 Preview

![Home Page](./screenshots/home.png)

![Admin Panel](./screenshots/admin.png)

---

## 🧰 Tech Stack

| Layer       | Tech Used                            |
|------------|----------------------------------------|
| **Frontend** | React.js, Tailwind CSS, React Router, Axios, i18next |
| **Backend**  | FastAPI (Python), Pydantic, Motor (MongoDB Driver)  |
| **Database** | MongoDB                              |
| **Auth**     | JWT-based authentication             |
| **Deployment** | Docker, Docker Compose, Nginx (SPA routing) |

---

## 📦 Features

- 🌐 Multi-page, responsive frontend (Home, Events, Register, Admin)
- 📝 Register users with form validation and DB storage
- 🔐 Admin login with protected dashboard (JWT-based)
- 📥 Newsletter subscriber system
- 📃 Dynamic event/news loading from backend
- 🌗 Dark Mode toggle
- 🌍 Multi-language support (English 🇺🇸 / Norwegian 🇳🇴)
- 🐳 Fully containerized using Docker and Docker Compose

---

## 📁 Folder Structure

```
tall-ships-2025/
│
├── backend/                          # FastAPI app
│   ├── app/
│   │   ├── main.py                   # Entry point
│   │   ├── database.py              # MongoDB/Atlas connection
│   │   ├── config.py                # Environment vars
│   │   ├── models/                  # Pydantic models
│   │   │   ├── event.py
│   │   │   ├── booking.py
│   │   │   └── news.py
│   │   ├── routes/                  # API endpoints
│   │   │   ├── events.py
│   │   │   ├── bookings.py
│   │   │   ├── news.py
│   │   │   └── cms.py               # CMS API integration
│   │   ├── utils/                   # Countdown, formatting, etc.
│   │   └── auth/                    # (Optional) Admin login
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
│
├── frontend/                         # React/Vite + Tailwind
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                  # Images, icons, video
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Countdown.jsx
│   │   │   └── Footer.jsx
│   │   ├── layouts/                # Pages
│   │   │   ├── Home.jsx
│   │   │   ├── Schedule.jsx
│   │   │   ├── Map.jsx
│   │   │   ├── Booking.jsx
│   │   │   ├── News.jsx
│   │   │   └── Social.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── i18n.js                 # Translation
│   ├── Dockerfile
│   ├── package.json
│   └── .env
│
├── docker-compose.yml               # Dev orchestration (optional)
├── render.yaml                      # For Render deploys
├── README.md                        # Install/run instructions
└── .gitignore

```

---

## ⚙️ Setup

### 🔁 1. **Run with Docker (recommended)**

```bash
docker-compose up --build
```

Then access:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:8000/docs](http://localhost:8000/docs)
- MongoDB: localhost:27017 (connect with Compass)

---

### 💻 2. **Run Locally without Docker**

#### Backend:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt // pip freeze > requirements.txt
uvicorn main:app --reload
```

#### Frontend:

```bash
cd frontend
npm install
npm run dev
```

---

## 🧪 API Endpoints (REST)

| Method | Endpoint                | Description                      |
|--------|-------------------------|----------------------------------|
| GET    | `/events`              | Fetch all events                  |
| GET    | `/news`                | Fetch all news                    |
| POST   | `/register`           | Register user                      |
| POST   | `/subscribe`          | Subscribe to newsletter            |
| POST   | `/auth/login`         | Admin login (returns JWT)          |
| GET    | `/admin/registers`    | Get all registered users (auth)    |
| GET    | `/admin/subscribers`  | Get all subscribers (auth)         |

> Swagger available at `/docs`

---

## 🌐 Language Support (i18n)

- Uses `i18next` with `react-i18next`
- Toggle between 🇺🇸 English and 🇳🇴 Norwegian
- Stored in memory using `useTranslation()` hook

---

## 🌗 Dark Mode

- Dark mode toggle using Tailwind `dark:` classes
- Preference saved in `localStorage`
- Toggle in the Navbar

---

## 🔐 Admin Panel

- Login with credentials (demo):
  ```
  username: admin
  password: admin123
  ```
- JWT stored in localStorage
- Protected routes via `PrivateRoute`
- Admin can view:
  - Registered users
  - Newsletter subscribers

---

## 🛡️ Authentication Logic

- FastAPI issues JWT token on login
- Frontend uses token for access to `/admin`
- Unauthorized users are redirected to `/login`

---

## 💡 Design Philosophy

- Mobile-first responsive design with Tailwind
- SPA routing fixed using custom `nginx.conf`
- Light/dark accessibility contrast
- Developer-first component structure

---

## 🧠 Future Enhancements

- Export to CSV in Admin panel
- Add event scheduling/reminders
- Search and filter features
- Role-based auth (Admin vs Organizer)

---

## 👨‍💻 Developed By

**ISIAH @ GriffinTechs**  
Specialist in Frontend, UI/UX, Media, and expanding into Full-Stack & DevOps

---

## 📜 License

This project was created for NM 2025 IT-utviklerfaget @ Tangen VGS  
Feel free to fork, learn, or contribute 🤝

---

```

---
