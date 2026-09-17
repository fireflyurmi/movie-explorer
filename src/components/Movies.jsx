import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

export default function Movies() {
  const [shows, setShows] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const url = searchTerm.trim() 
      ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`
      : 'https://api.tvmaze.com/shows';

    let isMounted = true;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch movies');
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          const formattedShows = searchTerm.trim()
            ? data.map((item) => item.show)
            : data;
          setShows(formattedShows);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setLoading(true);
  };

  return (
    <div className="min-h-[calc(100vh-73px)] bg-[#0b0f19] px-6 md:px-12 py-8 relative">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
            <FiSearch className="text-lg" />
          </span>
          <input 
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for a movie..."
            className="w-full bg-[#111827] border border-slate-800 text-white placeholder-slate-400 text-sm rounded-2xl pl-11 pr-4 py-4 shadow-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
          />
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-20 text-slate-400 text-lg animate-pulse">
          Loading movies...
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-20 text-red-400 text-lg">
          Error: {error}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && shows.length === 0 && (
        <div className="text-center py-20 text-slate-400 text-lg">
          No movies found matching &quot;{searchTerm}&quot;.
        </div>
      )}

      {/* Movie Card */}
      {!loading && !error && shows.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {shows.map((show) => (
            <MovieCard key={show.id} show={show} onOpenDetails={setSelectedShow} />
          ))}
        </div>
      )}

      {/* Modal */}
      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </div>
  );
}