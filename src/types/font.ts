interface WeightRange {
  min: number;
  max: number;
  default: number;
}

export type FontWeightType = Record<string, WeightRange>;
