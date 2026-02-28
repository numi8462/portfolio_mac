// font
interface WeightRange {
  min: number;
  max: number;
  default: number;
}

export type FontWeightType = Record<string, WeightRange>;

// dock app
export interface DockApp {
  id: WindowKey;
  name: string;
  icon: string;
  canOpen: boolean;
}

// window
export interface WindowState {
  isOpen: boolean;
  zIndex: number;
  data: unknown;
}

export type WindowKey =
  | 'finder'
  | 'contact'
  | 'resume'
  | 'safari'
  | 'photos'
  | 'terminal'
  | 'txtfile'
  | 'imgfile'
  | 'trash';
