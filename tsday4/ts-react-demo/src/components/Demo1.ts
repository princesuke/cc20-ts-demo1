// counter.store.ts
import { create } from "zustand";

type CounterStore = {
  count: number;
  inc: () => void;
};

export const useCounter = create<CounterStore>()((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}));

