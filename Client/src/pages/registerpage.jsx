import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/register", {
        email,
        password,
        role,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="flex px-4 py-8 md:py-32 flex-col md:flex-row text-slate-900 dark:text-slate-100 items-center bg-white dark:bg-slate-900">
        <figure className="w-full">
          <img
            src="https://files.realpython.com/media/Build-an-AI-Game-Engine-for-Tic-Tac-Toe-in-Python_Watermarked.b90cdf84c417.jpg"
            className="w-full h-96 object-cover rounded-lg"
            alt="hero"
          />
        </figure>
        <div className="w-full p-4 space-y-4">
          <h1 className="md:text-5xl text-4xl font-semibold leading-tight">
            REGISTER
          </h1>
          <form onSubmit={handleRegister}>
            <div className="flex flex-col md:flex-row gap-2 py-2">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border dark:text-slate-900 border-slate-300 rounded-md py-2 px-4"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 py-2">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border dark:text-slate-900 border-slate-300 rounded-md py-2 px-4"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2 py-2">
              <button
                className="bg-blue-600 w-full  md:w-auto px-6 py-2 rounded-md text-lg text-slate-100"
                type="submit"
              >
                Sign Up
              </button>
              <Link
                className="bg-red-600 w-full  md:w-auto px-6 py-2 rounded-md text-lg text-slate-100"
                to="/login"
              >
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
