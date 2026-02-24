import { NAV_ICONS, NAV_ITEMS } from '@constants/navbar';
import dayjs from 'dayjs';

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-start">
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold text-sm">김영호</p>

        {/* 네브바 링크 */}
        <ul className="flex items-center gap-5 max-sm:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* 네브바 아이콘 및 시간 */}
      <div className="max-sm:justify-end">
        <ul className="flex items-center gap-5">
          {NAV_ICONS.map((icon) => (
            <li key={icon.id} className="shrink-0">
              <img src={icon.img} alt={`icon-${icon.id}`} className="icon-hover w-4 h-4" />
            </li>
          ))}
        </ul>

        <time className="max-sm:hidden">{dayjs().format('MMM DD h:mm A')}</time>
      </div>
    </nav>
  );
};

export default Navbar;
