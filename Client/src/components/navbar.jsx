import Logout from "./logout";

export default function Navbar() {
  return (
    <>
      <div className="container mx-auto">
        <nav className="w-full text-white dark:bg-slate-900 flex p-4 items-center justify-between">
          <div className="inline-flex space-x-2 mr-4">
            <span className="hidden md:block text-slate-900 dark:text-slate-100 font-bold text-2xl">
              TIC-TAC-TIV
            </span>
          </div>
          <Logout/>
        </nav>
      </div>
    </>
  );
}
