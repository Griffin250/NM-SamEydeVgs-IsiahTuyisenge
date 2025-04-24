import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../../assets/profile.png";
import Image2 from "../../assets/Image2.png";
import NotificationRegister from "./NotificationRegister";
import HeroSlider from "./HeroSlider";
import Countdown from "./CountDown";
const Home = () => {
  const [news, setNews] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [Speakers, setSpeakers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/news")
      .then((res) => setNews(res.data))
      .catch((err) => console.error("News fetch error:", err));

    axios
      .get("http://localhost:8000/schedule")
      .then((res) => setSchedule(res.data))
      .catch((err) => console.error("Schedule fetch error:", err));

    axios
      .get("http://localhost:8000/speakers")
      .then((res) => setSpeakers(res.data))
      .catch((err) => console.error("Speakers fetch error:", err));
  }, []);

  return (
    <div>
   <HeroSlider />
      <section className="px-4 py-12 bg-white dark:bg-gray-900 transition duration-300">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-blue-400 mb-6">
      Tall Ship Races Kristiansand 2025
    </h1>

    <h3 className="text-gray-800 dark:text-gray-100 text-xl font-semibold mb-4">
      Welcome to the  Tall Ship Races Kristiansand 2025 {" "}
    </h3>

    <p className=" text-md mb-6 leading-relaxed">
    Tall Ships Races is coming to Kristiansand from July 30 to August 2. 
    Once again, our city will be filled with magnificent sailing ships from all over the world. 
    There will be adventurous experiences, open ships, exciting activities, concerts and experiences for 
    the whole family – and it's all free!
    </p>


    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <NavLink
        to="/events"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-bold transition duration-300"
      >
        View Schedule
      </NavLink>
      <NavLink
        to="/register"
        className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg font-bold transition duration-300"
      >
        Register Now
      </NavLink>
    </div>
  </div>
</section>

<Countdown/> 

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-200">Latest News</h2>
          <a href="/news" className="text-red-600 hover:text-blue-400">
            View All
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {news.map((article, index) => (
            <div key={index} className="bg-white shadow-sm rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-900 h-36 mb-16 rounded">
                <img src={Image2} />
              </div>{" "}
              {/* Placeholder image */}
              <h3 className="text-lg font-semibold text-gray-900">{article.title}</h3>
              <p className="text-sm text-gray-900">{article.content}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Schedule</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {schedule.map((item, index) => (
            <div key={index} className="bg-white shadow-sm rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
              <p className="font-semibold">{item.time}</p>
              <p>{item.event}</p>
            </div>
          ))}
        </div>
      </section>

     

    
<NotificationRegister />



    </div>
  );
};

export default Home;
