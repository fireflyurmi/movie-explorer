import { AiFillStar } from 'react-icons/ai';
import { BsCalendarEvent } from 'react-icons/bs';

export default function MovieCard({ show, onOpenDetails }) {
  const { name, rating, premiered, image } = show;
  const posterUrl = image?.medium || 'https://via.placeholder.com/210x295?text=No+Image';
  const score = rating?.average ?? 'N/A';
  const year = premiered ? premiered.split('-')[0] : 'N/A';

  return (
    <div className="bg-[#111827] border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between group transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:-translate-y-1">
      <div>
        {/* Image */}
        <div className="relative aspect-3/4 overflow-hidden bg-slate-900">
          <img 
            src={posterUrl} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-bold text-base truncate mb-2" title={name}>
            {name}
          </h3>
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <div className="flex items-center space-x-1">
              <AiFillStar className="text-amber-400 text-sm" />
              <span className="font-semibold text-slate-200">{score}</span>
            </div>
            <span>•</span>
            <div className="flex items-center space-x-1">
              <BsCalendarEvent className="text-blue-500 text-xs" />
              <span>{year}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="p-4 pt-0">
        <button 
          onClick={() => onOpenDetails(show)}
          className="w-full block text-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-xl text-sm shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] cursor-pointer"
        >
          See Details
        </button>
      </div>
    </div>
  );
}