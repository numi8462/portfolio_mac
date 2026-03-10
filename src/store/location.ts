import { locations } from '@constants/index';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const DEFAULT_LOCATION = locations.work;

type Location = (typeof locations)[keyof typeof locations];
type Project = (typeof locations.work.children)[number];

export type ActiveLocation = Location | Project;

interface LocationStore {
  activeLocation: ActiveLocation;
  setActiveLocation: (location: ActiveLocation) => void;
  resetActiveLocation: () => void;
}

export const useLocationStore = create<LocationStore, [['zustand/immer', never]]>(
  immer((set) => ({
    activeLocation: locations.work,

    setActiveLocation: (location) =>
      set((state) => {
        state.activeLocation = location;
      }),

    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  }))
);
