import { useDebounce } from "@/shared/hooks/useDebounce"
import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories"
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { useFilterStore } from "@/shared/store/use-filter-store"
import { useState } from "react"

export const useFilterViewModel = () => {
    const { data: categories, isLoading } = useGetProductCategoriesQuery()

    const { updateFilter, filterState, applyFilter, resetFilter } = useFilterStore()

    const { close } = useBottomSheetStore()

    const handleMaxValueUpdate = (value: number) => {
        updateFilter({ key: 'maxValue', value })
    }

    const handleMinValueUpdate = (value: number) => {
        updateFilter({ key: 'minValue', value })
    }

    const handleCategoryToggle = (categoryId: number) => {
        const categoryExists = filterState.selectedCategories.includes(categoryId)

        if(categoryExists){
            updateFilter({ key: 'selectedCategories', value: filterState.selectedCategories.filter(id => id !== categoryId) })
        }
        else{
            updateFilter({ key: 'selectedCategories', value: [...filterState.selectedCategories, categoryId] })
        }
    }

    const handleApplyFilter = () => {
        applyFilter();
        close();
    }

    const handleResetFilter = () => {
        resetFilter()
        close()
    }

    return{
        categories, 
        isLoading,
        handleMaxValueUpdate,
        handleMinValueUpdate,
        handleCategoryToggle,
        selectedCategories: filterState.selectedCategories,
        handleApplyFilter,
        handleResetFilter
    }
}