import WindowControls from '@components/common/WindowControls';
import WindowWrapper from '@components/common/WindowWrapper';
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from 'lucide-react';

const Safari = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        <div className="flex flex-1 items-center justify-between max-lg:hidden">
          <PanelLeft className="ml-10 icon" />

          <div className="flex items-center gap-1 ml-5">
            <ChevronLeft className="icon" />
            <ChevronRight className="icon" />
          </div>

          <div className="flex-1 flex-center gap-3">
            <ShieldHalf className="icon" />

            <div className="flex items-center gap-3 w-2/3 bg-white border border-gray-300 rounded-lg px-3">
              <Search className="icon" />

              <input type="text" placeholder="검색" className="flex-1 placeholder:text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Share className="icon" />
            <Plus className="icon" />
            <Copy className="icon" />
          </div>
        </div>
      </div>

      <div className="h-[70dvh]">
        <iframe
          src="https://nextjs-blog-pbpq.vercel.app/"
          className="w-full h-full border-none"
          title="Blog"
        />
      </div>
    </>
  );
};

const SafariWrapper = WindowWrapper(Safari, 'safari', { initialPosition: { left: 20, top: 40 } });

export default SafariWrapper;
