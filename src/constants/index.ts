export const techStack = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript'],
  },
  {
    category: 'Styling',
    items: ['Tailwind CSS', 'Sass', 'CSS'],
  },
  {
    category: 'Database',
    items: ['Supabase'],
  },
  {
    category: 'Dev Tools',
    items: ['Git', 'GitHub'],
  },
];

export const photosLinks = [
  {
    id: 1,
    icon: '/icons/gicon1.svg',
    title: 'Library',
  },
  {
    id: 2,
    icon: '/icons/gicon2.svg',
    title: 'Memories',
  },
  {
    id: 3,
    icon: '/icons/file.svg',
    title: 'Places',
  },
  {
    id: 4,
    icon: '/icons/gicon4.svg',
    title: 'People',
  },
  {
    id: 5,
    icon: '/icons/gicon5.svg',
    title: 'Favorites',
  },
];

const WORK_LOCATION = {
  id: 1,
  type: 'work',
  name: '프로젝트',
  icon: '/icons/work.svg',
  kind: 'folder',
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: '어디가냥',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-5', // icon position inside Finder
      windowPosition: 'top-[10vh] right-25', // optional: Finder window position
      children: [
        {
          id: 1,
          name: '어디가냥.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          mdFile: '/files/meow-where.md',
        },
        {
          id: 2,
          name: '어디가냥.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://meowhere.vercel.app/',
          position: 'top-10 right-20',
        },
        {
          id: 3,
          name: '깃허브.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://github.com/Meowhere/Meowhere',
          position: 'top-40 right-30',
        },
        {
          id: 4,
          name: '어기다냥.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-1.png',
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: '비즈니스 프로세스 모델러 웹앱',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-52 right-80',
      windowPosition: 'top-[10vh] right-50',
      children: [
        {
          id: 1,
          name: 'BPMN.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-30 right-20',
          mdFile: '/files/bpmn.md',
        },
        {
          id: 2,
          name: 'BPMN.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://legend-waste-c00.notion.site/143d39f0dbf380fcb695fea7c6fa10e6',
          position: 'top-10 left-10',
        },
        {
          id: 3,
          name: '깃허브.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://github.com/numi8462/DeHeus_BPMN',
          position: 'top-50 left-30',
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: '3D 포켓몬 카드 도감',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-10 left-80',
      windowPosition: 'top-[25vh] right-20',
      children: [
        {
          id: 1,
          name: '포켓몬 카드도감.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          mdFile: '/files/pokemon-tcg.md',
        },
        {
          id: 2,
          name: '3D 포켓몬 카드도감.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://numi8462.github.io/pokemon-tcg/',
          position: 'top-10 right-20',
        },
        {
          id: 3,
          name: '3D 포켓몬 카드도감 1.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-80',
          imageUrl: '/images/project-3.png',
        },
        {
          id: 4,
          name: '3D 포켓몬 카드도감 2.png',
          icon: '/images/image.png',
          kind: 'file',
          fileType: 'img',
          position: 'top-52 right-30',
          imageUrl: '/images/project-3-1.png',
        },
      ],
    },

    // ▶ Project 4
    {
      id: 8,
      name: 'Mac-포트폴리오',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-45 right-30',
      windowPosition: 'top-[40vh] right-30',
      children: [
        {
          id: 1,
          name: '포트폴리오.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          mdFile: '/files/portfolio.md',
        },
        {
          id: 2,
          name: '포트폴리오.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://portfolio-mac-gamma.vercel.app/',
          position: 'top-10 right-20',
        },
        {
          id: 3,
          name: '깃허브.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://github.com/numi8462/portfolio_mac',
          position: 'top-50 right-30',
        },
      ],
    },

    // Project 5
    {
      id: 9,
      name: 'gogoQ',
      icon: '/images/folder.png',
      kind: 'folder',
      position: 'top-25 right-60',
      windowPosition: 'top-[30vh] right-60',
      children: [
        {
          id: 1,
          name: 'gogoQ.txt',
          icon: '/images/txt.png',
          kind: 'file',
          fileType: 'txt',
          position: 'top-5 left-10',
          mdFile: '/files/gogoq.md',
        },
        {
          id: 2,
          name: 'gogoq.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://gogoq.vercel.app',
          position: 'top-10 right-20',
        },
        {
          id: 3,
          name: '깃허브.com',
          icon: '/images/safari.png',
          kind: 'file',
          fileType: 'url',
          href: 'https://github.com/numi8462/gogoq',
          position: 'top-50 right-30',
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: 'about',
  name: '프로필',
  icon: '/icons/info.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: '김영호.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-5',
      imageUrl: '/images/me.jpg',
    },
    {
      id: 2,
      name: '자기소개.txt',
      icon: '/images/txt.png',
      kind: 'file',
      fileType: 'txt',
      position: 'top-30 left-50',
      subtitle: '안녕하세요 프론트엔드 개발자 김영호 입니다.',
      image: '/images/me.jpg',
      description: [
        '안녕하세요. 사용자 경험을 중요하게 생각하는 프론트엔드 개발자입니다.',
        '웹 서비스의 완성도는 단순히 기능 구현에 그치지 않고, 사용자가 느끼는 편의성과 흐름에서 결정된다고 생각합니다.',
        'React와 TypeScript 기반으로 안정적인 UI를 구현하고, 컴포넌트 구조와 상태 관리에 대해 꾸준히 고민하며 더 유지보수하기 좋은 코드를 작성하려 노력하고 있습니다. 또한 성능 최적화와 코드 가독성을 중요하게 생각하며, 협업 환경에서 이해하기 쉬운 구조를 만드는 것을 목표로 개발합니다.',
        '앞으로도 사용자 경험과 개발 생산성을 모두 고려하는 프론트엔드 개발자로 성장하고 싶습니다.',
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: 'resume',
  name: '이력서',
  icon: '/icons/file.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'Resume.pdf',
      icon: '/images/pdf.png',
      kind: 'file',
      fileType: 'pdf',
      position: 'top-10 left-10',
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: 'trash',
  name: '쓰레기통',
  icon: '/icons/trash.svg',
  kind: 'folder',
  children: [
    {
      id: 1,
      name: 'trash1.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-10 left-10',
      imageUrl: '/images/trash-1.png',
    },
    {
      id: 2,
      name: 'trash2.png',
      icon: '/images/image.png',
      kind: 'file',
      fileType: 'img',
      position: 'top-40 left-80',
      imageUrl: '/images/trash-2.png',
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};
