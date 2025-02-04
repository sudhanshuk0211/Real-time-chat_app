import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-2xl font-semibold text-gray-800">ChatSphere</h1>
            </Link>
          </div>

          {/* Right Section - Navigation Links & Auth */}
          <div className="flex items-center gap-4">
            <Link
              to={"/settings"}
              className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-primary/10 transition-all"
            >
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600 hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                {/* Profile Link */}
                <Link to={"/profile"} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-primary/10 transition-all">
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="text-sm text-gray-600 hidden sm:inline">Profile</span>
                </Link>

                {/* Logout Button */}
                <button
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-red-500/10 transition-all"
                  onClick={logout}
                >
                  <LogOut className="w-5 h-5 text-red-600" />
                  <span className="text-sm text-red-600 hidden sm:inline">Logout</span>
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
