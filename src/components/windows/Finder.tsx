import WindowControls from '@components/common/WindowControls';
import WindowWrapper from '@components/common/WindowWrapper';
import { locations } from '@constants/index';
import { useLocationStore } from '@store/location';
import { useWindowStore } from '@store/window';
import clsx from 'clsx';
import { Search } from 'lucide-react';
import type { WindowKey } from 'src/types/types';

// locations의 최상위 값들 (work, about, resume, trash)
type Location = (typeof locations)[keyof typeof locations];

// work.children의 프로젝트들
type Project = (typeof locations.work.children)[number];

// 사이드바 렌더링용 유니온
type SidebarItem = Location | Project;

type LocationChild = Location['children'][number];

// fileType을 가진 아이템인지 확인하는 타입 가드
const hasFileType = (item: LocationChild): item is LocationChild & { fileType: string } => {
  return 'fileType' in item;
};

const Finder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const openItem = (item: LocationChild) => {
    // PDF 파일은 이력서 창으로 열기
    if (hasFileType(item) && item.fileType === 'pdf') return openWindow('resume');

    // 폴더는 하위 위치로 이동
    if (item.kind === 'folder' && 'children' in item) return setActiveLocation(item);

    // fig 또는 url 파일은 새 탭에서 열기
    if (
      hasFileType(item) &&
      ['fig', 'url'].includes(item.fileType) &&
      'href' in item &&
      typeof item.href === 'string'
    )
      return window.open(item.href, '_blank');

    // txt, img 파일은 해당 윈도우로 열기
    if (hasFileType(item) && item.fileType !== 'fig' && item.fileType !== 'url') {
      const windowKey = `${item.fileType}${item.kind}` as WindowKey;
      return openWindow(windowKey, item);
    }
  };

  const renderList = (items: SidebarItem[]) =>
    items.map((item) => (
      <li
        key={item.id}
        onClick={() => setActiveLocation(item)}
        className={clsx(item.id === activeLocation.id ? 'active' : 'not-active:')}
      >
        <img src={item.icon} alt={item.name} className="w-4" />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>즐겨찾기</h3>
            <ul className="space-y-1">{renderList(Object.values(locations))}</ul>
          </div>

          <div>
            <h3>프로젝트</h3>
            <ul className="space-y-1">{renderList(locations.work.children)}</ul>
          </div>
        </div>

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li key={item.id} className={item.position} onClick={() => openItem(item)}>
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;
