
import { Play } from 'lucide-react';

interface YoutubeMockupProps {
  thumbnailUrl: string;
  className?: string;
  aspectRatio?: string;
}

const YoutubeMockup = ({ thumbnailUrl, className, aspectRatio = 'aspect-video' }: YoutubeMockupProps) => {
  return (
    <div className={`relative bg-black rounded-xl overflow-hidden group shadow-2xl card-glow border border-purple-500/30 ${aspectRatio} ${className}`}>
      <img src={thumbnailUrl} alt="YouTube video mockup" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-red-600/90 h-12 w-20 rounded-lg flex items-center justify-center cursor-pointer group-hover:bg-red-500 transition-colors">
          <Play className="h-8 w-8 text-white" fill="white" />
        </div>
      </div>
    </div>
  );
};

export default YoutubeMockup;
