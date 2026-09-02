import { FlatList, Text, View } from "react-native"
import { HomeHeader } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { ProductInterface } from "@/shared/interfaces/product"
import { ProductCard } from "./components/ProductCard"

export const HomeView = () => {
    const productList: ProductInterface[] = [
        {
            id: 0,
            value: "string",
            name: "string",
            description: "string",
            photo: "string",
            height: "string",
            width: "string",
            weight: "string",
            averageRating: 0,
            views: 0,
            ratingCount: 0,
            categoryId: 0,
            category: {
                id: 0,
                name: "Any"
            },
            createdAt: "string",
            updatedAt: "string",
            deletedAt: "string"
        }
    ]

    return(
        <View className="flex-1">
            <FlatList
                data={productList}
                keyExtractor={({ id }) => `product-list-item-${id}`}
                renderItem={({ item }) => <ProductCard product={item} />}
                ListHeaderComponent={() => (
                    <>
                        <HomeHeader/>
                        <SearchInput/>
                    </>
                )}
                contentContainerClassName="p-[16px] pb-[120px]"
            />
        </View>
    )
}