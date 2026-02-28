import type { DockApp } from 'src/types/types';

export const DOCK_APPS: DockApp[] = [
  {
    id: 'finder',
    name: '포트폴리오',
    icon: 'finder.png',
    canOpen: true,
  },
  {
    id: 'safari',
    name: 'Articles',
    icon: 'safari.png',
    canOpen: true,
  },
  {
    id: 'photos',
    name: '갤러리',
    icon: 'photos.png',
    canOpen: true,
  },
  {
    id: 'contact',
    name: '연락',
    icon: 'contact.png',
    canOpen: true,
  },
  {
    id: 'terminal',
    name: '스킬',
    icon: 'terminal.png',
    canOpen: true,
  },
  {
    id: 'trash',
    name: '쓰레기통',
    icon: 'trash.png',
    canOpen: false,
  },
];
