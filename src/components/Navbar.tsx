import { NAV_ICONS, NAV_ITEMS } from '@constants/navbar'
import dayjs from 'dayjs'

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-start">
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold text-sm">김영호</p>

        {/* 네브바 링크 */}
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {NAV_ICONS.map((icon) => (
            <li key={icon.id}>
              <img src={icon.img} alt={`icon-${icon.id}`} className="icon-hover" />
            </li>
          ))}
        </ul>

        <time>{dayjs().format('MMM DD h:mm A')}</time>
      </div>
    </nav>
  )
}

export default Navbar
