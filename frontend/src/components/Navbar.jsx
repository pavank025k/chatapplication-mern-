import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <header className="fixed w-full top-0 z-40 bg-gradient-to-r from-purple-700 via-pink-600 to-purple-800 shadow-xl backdrop-blur-md">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="p-2 rounded-xl bg-purple-200/20 flex items-center justify-center hover:bg-purple-200/40 transition-colors">
                <MessageSquare className="w-5 h-5 text-purple-100" />
              </div>
              <h1 className="text-lg font-bold text-white">Chatty</h1>
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className="btn bg-transparent border border-purple-400 text-white btn-sm gap-2 hover:bg-purple-600 hover:text-white transition-colors"
            >
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className="btn bg-transparent border border-purple-400 text-white btn-sm gap-2 hover:bg-purple-600 hover:text-white transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="flex gap-2 items-center text-white hover:text-purple-200 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

