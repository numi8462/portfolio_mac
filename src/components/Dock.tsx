import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Tooltip } from 'react-tooltip';
import gsap from 'gsap';
import { DOCK_APPS } from '@constants/dock';
import { locations } from '@constants/index';
import { useWindowStore } from '@store/window';
import { useLocationStore } from '@store/location';
import type { DockApp } from 'src/types/types';

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const { setActiveLocation } = useLocationStore();
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;

    if (!dock) return;

    const icons = dock.querySelectorAll('.dock-icon');

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 5000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: 'power1.out',
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const resetIcons = () => {
      icons.forEach((icon) => {
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power1.out',
        });
      });
    };

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener('mouseleave', resetIcons);

    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener('mouseleave', resetIcons);
    };
  }, []);

  const toogleApp = (app: DockApp) => {
    // 쓰레기통은 finder를 열고 쓰레기통 위치로 이동
    if (app.id === 'trash') {
      openWindow('finder');
      setActiveLocation(locations.trash);
      return;
    }

    if (!app.canOpen) return;

    const window = windows[app.id];

    if (!window) {
      console.error(`해당 앱의 윈도우를 찾을 수 없습니다: ${app.id}`);
      return;
    }

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }

    console.log(window);
  };

  return (
    <section className="absolute bottom-5 left-1/2 -translate-x-1/2 z-50 select-none">
      <div
        ref={dockRef}
        className="bg-white/20 backdrop-blur-md justify-between rounded-2xl p-1.5 flex items-end gap-1.5"
      >
        {DOCK_APPS.map((app) => (
          <div key={app.id} className="relative flex justify-center">
            <button
              type="button"
              className="size-13 sm:size-14 3xl:size-20 cursor-pointer"
              aria-label={app.name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={app.name}
              data-tooltip-delay-show={150}
              disabled={!app.canOpen}
              onClick={() => toogleApp(app)}
            >
              <img
                src={`/images/${app.icon}`}
                alt={app.name}
                loading="lazy"
                className={`dock-icon object-cover object-center ${app.canOpen ? '' : 'opacity-60'}`}
              />
            </button>
          </div>
        ))}

        <Tooltip
          id="dock-tooltip"
          place="top"
          offset={16}
          className="py-1! px-3! w-fit! text-center! text-xs! rounded-md! bg-purple-200! text-black! shadow-2xl!"
        />
      </div>
    </section>
  );
};

export default Dock;
