import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import type { FontWeightType } from 'src/types/font';

const FONT_WEIGHTS: FontWeightType = {
  subtitle: { min: 100, max: 500, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

const renderText = (text: string, className: string, baseWeight: number = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${baseWeight}` }}>
      {char === '' ? '\u00A0' : char}
    </span>
  ));
};

const textHover = (container: HTMLElement | null, type: keyof typeof FONT_WEIGHTS) => {
  if (!container) return () => {};

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter: HTMLSpanElement, weight: number, duration: number = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: 'power2.out',
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { left, top } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    letters.forEach((letter: HTMLSpanElement) => {
      const { left: l, top: t, width: w, height: h } = letter.getBoundingClientRect();
      const dx = mouseX - (l - left + w / 2);
      const dy = mouseY - (t - top + h / 2);
      const distance = Math.sqrt(dx ** 2 + dy ** 2);
      const intensity = Math.exp(-(distance ** 2) / 5000);

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => {
    letters.forEach((letter) => animateLetter(letter, base, 0.3));
  };

  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
};

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const titleCleanup = textHover(titleRef.current, 'title');
    const subtitleCleanup = textHover(subtitleRef.current, 'subtitle');

    return () => {
      titleCleanup?.();
      subtitleCleanup?.();
    };
  }, []);

  return (
    <section className="text-gray-200 flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none max-sm:h-screen max-sm:w-full max-sm:px-10">
      <h1 ref={titleRef}>{renderText('portfolio', 'text-9xl max-sm:text-7xl italic', 100)}</h1>
      <p
        ref={subtitleRef}
        className="text-[16px] text-center text-gray-200 mt-7 break-keep overflow-wrap-anywhere"
      >
        {renderText('안녕하세요! 볼 수 없는 가치를 보여주는 개발자 김영호입니다.', 'text-2xl', 100)}
      </p>
    </section>
  );
};

export default Welcome;
