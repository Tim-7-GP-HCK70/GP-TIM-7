export default function Chat() {
  return (
    <>
      <section className="flex flex-1 flex-col">
        <div className="flex sm:items-center justify-between p-3 border-b-2 border-black">
          <div className="relative flex items-center space-x-4">
            <div className="flex flex-col leading-tight">
              <div className="text-xl font-medium mt-1">
                <span className="text-center text-gray-700 mr-3">Messages</span>
              </div>
            </div>
          </div>
        </div>

        <div
          id="chats"
          className="flex flex-col flex-1 space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue "
        >
          <div className="chat-message">
            <div className="flex items-end justify-end">
              <div className="flex flex-col space-y-2 text-sm max-w-xs sm:max-w-xl mx-2 order-1 items-end ">
                <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white">
                    Hallo apa kabar
                  </span>
                </div>
              </div>
              <div className="relative inline-flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12 overflow-hidden rounded-full ">
                <span className="font-medium">melia</span>
              </div>
            </div>
          </div>
        </div>

        <form className="border-t-2 flex gap-4 border-gray-200 p-4">
          <input
            type="text"
            placeholder="Write your message!"
            className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 bg-gray-200 rounded-2xl"
          />
          <button type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
