import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DisconnectContext } from "../pages/gamepage";

export default function Logout() {
  const { socket } = useContext(DisconnectContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    if (socket) {
      socket.emit("logout");
    }
    navigate("/login");
  };
  return (
    <>
      <div className="space-x-1  md:block">
        <button
          type="button"
          onClick={handleLogout}
          className="px-6 py-2 border rounded-full dark:text-slate-100  dark:hover:bg-red-800 text-white-900"
        >
          Log Out
        </button>
      </div>
    </>
  );
}
