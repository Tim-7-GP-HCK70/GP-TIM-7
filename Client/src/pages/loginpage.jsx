import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (el) => {
    el.preventDefault();

    try {
      let res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(res);
      let { data } = res;
      localStorage.setItem("token", data.access_token);
      navigate("/");
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
            LOGIN
          </h1>
          <form onSubmit={handleLogin}>
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
                className="bg-blue-600 w-full md:w-auto px-6 py-2 rounded-md text-lg text-slate-100"
                type="submit"
              >
                Login
              </button>
              <Link
                className="bg-red-600 w-full md:w-auto px-6 py-2 rounded-md text-lg text-slate-100 text-center"
                to="/register"
              >
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
