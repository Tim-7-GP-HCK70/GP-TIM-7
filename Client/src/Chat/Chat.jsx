import { useEffect, useState } from "react";

export default function Chat({ socket, playerName, opponentName }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = (e) => {
    e.preventDefault();
    const user = playerName || opponentName;
    socket.emit("messages:new", { from: user, message: newMessage });
    setNewMessage("");
  };

  useEffect(() => {
    if (!socket) return;

    const handleMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on("messages:info", handleMessage);

    return () => {
      socket.off("messages:info", handleMessage);
    };
  }, [socket]);

  return (
    <section className="flex flex-1 flex-col mx-16 my-12 border-2 rounded-xl">
      <div className="flex sm:items-center justify-between p-3 border-b-2 border-white">
        <div className="relative flex items-center space-x-4">
          <div className="flex flex-col leading-tight">
            <div className="text-xl font-medium mt-1">
              <span className="text-center text-white-700 mr-3">Messages</span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="chats"
        className="flex flex-col  flex-1 space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue"
      >
        {messages.map((el, index) => (
          <div
            key={index}
            className={`chat-message ${
              el.from === playerName ? "self-end" : "self-start"
            }`}
          >
            <div className="flex items-end">
              <div
                className={`flex flex-col space-y-2 text-sm max-w-xs sm:max-w-xl mx-2 ${
                  el.from === playerName
                    ? "order-1 items-end"
                    : "order-2 items-start"
                }`}
              >
                <div>
                  <span
                    className={`px-4 py-2 rounded-lg inline-block  ${
                      el.from === playerName
                        ? "bg-blue-600 text-white"
                        : "bg-slate-400 text-white"
                    }`}
                  >
                    {el.message}
                  </span>
                </div>
              </div>
              <div className="relative inline-flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12 overflow-hidden rounded-full bg-gray-200">
                <span className="font-medium text-gray-800">{el.from}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <form
        className="border-t-2 flex gap-4 border-gray-200 p-4"
        onSubmit={handleSend}
      >
        <input
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
          type="text"
          placeholder="Write your message!"
          className="px-4 py-2 w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-2xl"
        />
        <button className="rounded-xl bg-blue-900 px-2" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}
