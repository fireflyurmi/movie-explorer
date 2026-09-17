
import { Link, NavLink } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { RiMovie2Fill } from 'react-icons/ri';

export default function Navbar() {
  return (
    <nav className="bg-slate-950/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800/80 px-6 md:px-12 py-4 flex items-center justify-between text-white">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 group">
        <RiMovie2Fill className="text-2xl md:text-3xl text-blue-500 group-hover:scale-105 transition-transform" />
        <span className="text-xl font-bold tracking-tight">
          <span className="text-white">Movie</span>
          <span className="text-blue-500">Explorer</span>
        </span>
      </Link>

      {/* NavLinks */}
      <div className="flex items-center space-x-6 md:space-x-8">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'}`
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="/movies" 
          className={({ isActive }) => 
            `text-sm font-medium transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400 font-semibold' : 'text-slate-300'}`
          }
        >
          Movies
        </NavLink>

        <Link 
          to="/movies" 
          className="hidden sm:flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Browse Movies</span>
          <FiArrowRight className="text-base" />
        </Link>
      </div>
    </nav>
  );
}