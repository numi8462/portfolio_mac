import { useWindowStore } from '@store/window';
import type { WindowKey } from 'src/types/types';

const WindowControls = ({ target }: { target: WindowKey }) => {
  const { closeWindow } = useWindowStore();
  return (
    <div className="flex gap-2">
      <div
        className="size-3.5 rounded-full bg-[#ff6157] cursor-pointer"
        onClick={() => closeWindow(target)}
      ></div>
      <div className="size-3.5 rounded-full bg-[#ffc030]" />
      <div className="size-3.5 rounded-full bg-[#2acb42]" />
    </div>
  );
};

export default WindowControls;
