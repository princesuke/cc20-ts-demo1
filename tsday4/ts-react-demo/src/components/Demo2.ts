// // store/counter.ts
// import { create } from "zustand";
// import type { CounterStore } from "./types";

// const initialState: CounterState = { count: 0, user: null };

// export const useCounter = create<CounterStore>()((set) => ({
//   ...initialState,
//   inc: (by = 1) => set((s) => ({ count: s.count + by })),
//   setUser: (u) => set({ user: u }),
//   reset: () => set(initialState, true), // true = replace ทั้งก้อน
// }));



