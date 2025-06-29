import { create } from 'zustand'

// отвечает и работает с состоянием активной категории при скроллинге перемещение заголовка

interface State {
	activeId: number;
	setActiveId: (activeId: number) => void;
}

export const useCategoryStore = create<State>()((set) => ({

	activeId: 1,
	setActiveId: (activeId: number) => set({ activeId }),
}));