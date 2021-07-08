import { u64 } from "@solana/spl-token";
import { Percentage } from "../model/utils/percentage";

export const defaultSlippagePercentage: Percentage = {
  numerator: new u64(1),
  denominator: new u64(1000),
}; // 0.1%