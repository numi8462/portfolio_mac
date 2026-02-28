import { NAV_ICONS, NAV_ITEMS } from '@constants/navbar';
import dayjs from 'dayjs';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-8 bg-white/70 backdrop-blur-md fixed top-0 w-full z-50 px-2 text-[13px]">
      {/* 왼쪽: 로고 및 메뉴 */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 px-2 py-1 rounded cursor-default transition-colors">
          <img src="/images/logo.svg" alt="logo" className="w-4 h-4" />
          <p className="font-bold">김영호</p>
        </div>

        <ul className="flex items-center max-sm:hidden">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className="px-3 py-1 rounded hover:bg-black/10 transition-colors cursor-pointer"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* 오른쪽: 아이콘 및 시간 */}
      <div className="flex items-center gap-1">
        <ul className="flex items-center gap-2">
          {NAV_ICONS.map((icon) => (
            <li
              key={icon.id}
              className="group relative flex items-center justify-center w-7 h-7 rounded-[5px] hover:bg-black/10 transition-colors cursor-default"
            >
              <img src={icon.img} alt={`icon-${icon.id}`} className="w-4 h-4 object-contain" />
            </li>
          ))}
        </ul>

        <time className="max-sm:hidden px-3 py-1 rounded hover:bg-black/10 cursor-default transition-colors">
          {dayjs().format('MMM DD h:mm A')}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
