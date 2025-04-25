import { useState } from "react";
import axios from "../api/axios"; 

const NotificationRegister = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const SubmitEvent = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await axios.post("/subscribe", { email });
      setMessage("Thanks! You have been registered successfully!.");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <section className="mt-10 mb-8  p-4  w-autto mx-auto">
      <div className="justify-center grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 className=" font-bold md:text-3xl">
          Register for the Event Notifications!
        </h2>
        <div className="flex items-center">
          <form className="flex gap-4" onSubmit={SubmitEvent}>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="rounded p-2 border-0 placeholder:text-gray-600 text-gray-100 bg-gray-400 outline-none"
              required
            />
            <button
              type="submit"
              className="text-gray-200 font-bold w-auto border-1 ml-2 rounded p-2 cursor-pointer border-red-500 bg-red-500 hover:border-indigo-700 hover:bg-indigo-700"
            >
              Register
            </button>
          </form>
        </div>
      </div>
      {message && (
        <p className="mt-2 text-sm text-green-400 font-medium">{message}</p>
      )}
    </section>
  );
};

export default NotificationRegister;
