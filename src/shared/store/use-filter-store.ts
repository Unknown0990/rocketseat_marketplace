import { create } from "zustand";

export interface FilterState{
    minValue: number | null;
    maxValue: number | null;
    selectedCategories: number[];
    searchText: string;
}

interface FilterStore{
    appliedFilterState: FilterState;
    filterState: FilterState;
    updateFilter: (props: { key: keyof FilterState; value: string | number | number[] }) => void;
    resetFilter: () => void;
    applyFilter: () => void;
}

const defaultFilterValues = {
    searchText: '',
    selectedCategories: [],
    minValue: null,
    maxValue: null,
}

export const useFilterStore = create<FilterStore>((set) => ({
    appliedFilterState: defaultFilterValues,
    filterState: defaultFilterValues,
    updateFilter: ({ key, value }) => {
        set((state) => ({
            filterState: { ...state.filterState, [key]: value }
        }))
    },
    resetFilter: () => set({
        appliedFilterState: defaultFilterValues,
        filterState: defaultFilterValues,
    }),
    applyFilter: () => set((state) => ({
        appliedFilterState: state.filterState
    }))
}))