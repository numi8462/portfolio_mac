import { INITIAL_Z_INDEX, WINDOW_CONFIG } from '@constants/window';
import type { WindowKey, WindowState } from 'src/types/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface WindowStore {
  windows: Record<WindowKey, WindowState>;
  nextZIndex: number;
  openWindow: (windowKey: WindowKey, data?: unknown) => void;
  closeWindow: (windowKey: WindowKey) => void;
  focusWindow: (windowKey: WindowKey) => void;
}

export const useWindowStore = create<WindowStore, [['zustand/immer', never]]>(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.zIndex = state.nextZIndex++;
      }),
  }))
);
