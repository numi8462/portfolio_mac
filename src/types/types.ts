// font
interface WeightRange {
  min: number;
  max: number;
  default: number;
}

export type FontWeightType = Record<string, WeightRange>;

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
  | 'imgfile';
