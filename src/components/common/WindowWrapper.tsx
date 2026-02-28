import { useGSAP } from '@gsap/react';
import { useWindowStore } from '@store/window';
import { useRef, type ComponentType } from 'react';
import type { WindowKey } from 'src/types/types';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';

interface Position {
  initialPosition?: { left: number; top: number };
}

const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: WindowKey,
  position?: Position
) => {
  const Wrapped = (props: P) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement>(null);
    const isMounted = useRef(false);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (!isMounted.current) {
        isMounted.current = true;
        if (!isOpen) {
          el.style.display = 'none';
          return;
        }
      }

      if (isOpen) {
        el.style.display = 'block';

        if (!el.dataset.positioned) {
          gsap.set(el, {
            x: 100,
            y: 100,
          });
          el.dataset.positioned = 'true';
        }

        gsap.fromTo(
          el,
          { scale: 0.8, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        );
      } else {
        gsap.to(el, {
          scale: 0.8,
          opacity: 0,
          y: 30,
          duration: 0.15,
          ease: 'power3.in',
          onComplete: () => {
            el.style.display = 'none';
          },
        });
      }
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [draggable] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      // Draggable 생성 후 초기 위치 지정
      if (position?.initialPosition) {
        gsap.set(el, position.initialPosition);
      }

      return () => draggable.kill();
    }, []);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
};

export default WindowWrapper;
