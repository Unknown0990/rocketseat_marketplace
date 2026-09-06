import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories"
import { useFilterStore } from "@/shared/store/use-filter-store"

export const useFilterViewModel = () => {
    const { data: categories, isLoading } = useGetProductCategoriesQuery()

    const { updateFilter, filterState } = useFilterStore()

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

    return{
        categories, 
        isLoading,
        handleMaxValueUpdate,
        handleMinValueUpdate,
        handleCategoryToggle,
        selectedCategories: filterState.selectedCategories
    }
}