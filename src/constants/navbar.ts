import type { Navbar } from 'src/types/types';

export const NAV_ITEMS: Navbar[] = [
  { id: 1, name: '이력서', type: 'resume' },
  { id: 2, name: '연락', type: 'contact' },
  { id: 3, name: '프로젝트', type: 'project' },
];

export const NAV_ICONS = [
  { id: 1, img: '/icons/wifi.svg' },
  { id: 2, img: '/icons/search.svg' },
  { id: 3, img: '/icons/user.svg' },
  { id: 4, img: '/icons/mode.svg' },
];
