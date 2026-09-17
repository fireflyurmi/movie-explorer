import { FiGithub, FiTwitter, FiYoutube } from "react-icons/fi";
import { RiMovie2Fill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] border-t border-slate-800/80 py-6 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between text-slate-400 text-sm">
      <div className="flex items-center space-x-2 mb-4 sm:mb-0">
        <RiMovie2Fill className="text-xl md:text-2xl text-blue-500 group-hover:scale-105 transition-transform" />
        <span className="text-xl font-bold tracking-tight">
          <span className="text-white">Movie</span>
          <span className="text-blue-500">Explorer</span>
        </span>
      </div>

      <p>© 2026 MovieExplorer. All rights reserved.</p>

      <div className="flex items-center space-x-5 mt-4 sm:mt-0 text-slate-400">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FiGithub className="text-lg" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FiTwitter className="text-lg" />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FiYoutube className="text-lg" />
        </a>
      </div>
    </footer>
  );
}
