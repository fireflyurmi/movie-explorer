import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';

export default function Home() {
  return (
    <div className="relative grow flex items-center px-6 md:px-16 py-16 md:py-28 overflow-hidden min-h-[calc(100vh-73px)]">
      {/* Banner */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/banner.jpg" 
          alt="Movie Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0b0f19] via-[#0b0f19]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-none">
          DISCOVER
        </h1>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-linear-to-r from-[#a855f7] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-transparent mb-4 leading-tight">
          MOVIES
        </h1>
        <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
          Explore and discover your favorite movies from around the world.
        </p>
        <Link 
          to="/movies" 
          className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Explore Now</span>
          <HiArrowRight className="text-lg" />
        </Link>
      </div>
    </div>
  );
}