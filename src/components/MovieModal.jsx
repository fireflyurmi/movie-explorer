import { AiFillStar } from 'react-icons/ai';
import { BsCalendarEvent } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

export default function MovieModal({ show, onClose }) {
  if (!show) return null;

  const { name, rating, premiered, image, genres, type, summary, network } = show;
  const backdropUrl = image?.original || image?.medium || 'https://via.placeholder.com/800x450?text=No+Image';
  const posterUrl = image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  const score = rating?.average ?? 'N/A';
  const year = premiered ? premiered.split('-')[0] : 'N/A';
  
  const cleanSummary = summary ? summary.replace(/<[^>]*>?/gm, '') : 'No overview available.';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0b0f19] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl text-white max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner & Close Button */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-900 overflow-hidden shrink-0">
          <img 
            src={backdropUrl} 
            alt={name} 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0b0f19] via-transparent to-black/40"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white p-2 rounded-full transition-all border border-slate-700/50 cursor-pointer"
          >
            <IoClose className="text-xl" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 -mt-16 sm:-mt-20 relative z-10">
            {/* Poster */}
            <div className="w-32 sm:w-44 aspect-3/4 rounded-xl overflow-hidden shadow-xl border-2 border-slate-800 bg-slate-900 shrink-0 mx-auto sm:mx-0">
              <img src={posterUrl} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Title & Metadata */}
            <div className="flex flex-col justify-end pt-2 sm:pt-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-center sm:text-left">{name}</h2>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-sm text-slate-300 mb-4">
                <div className="flex items-center space-x-1 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/50">
                  <AiFillStar className="text-amber-400" />
                  <span className="font-semibold text-white">{score}</span>
                </div>
                <div className="flex items-center space-x-1 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/50">
                  <BsCalendarEvent className="text-blue-500" />
                  <span>{year}</span>
                </div>
                {type && (
                  <span className="bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/50 text-slate-300">
                    {type}
                  </span>
                )}
              </div>

              {/* Badges */}
              {genres && genres.length > 0 && (
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  {genres.map((genre, idx) => (
                    <span key={idx} className="bg-blue-600/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium">
                      {genre}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Overview</h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {cleanSummary}
            </p>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80 text-sm">
            {network?.name && (
              <div>
                <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Network / Channel</span>
                <span className="text-white font-medium">{network.name}</span>
              </div>
            )}
            <div>
              <span className="text-slate-400 block text-xs uppercase tracking-wider mb-1">Status</span>
              <span className="text-white font-medium">{show.status || 'Released'}</span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-[#0b0f19] border-t border-slate-800/80 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-2.5 rounded-xl text-sm shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}