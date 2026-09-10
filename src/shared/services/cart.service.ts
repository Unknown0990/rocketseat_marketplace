import { CartProductProps, OmittedCartProduct } from "../store/cart-store";

export const CartService = {
    findExistingProduct: (productList: CartProductProps[], productId: number) => productList.some(item => item.id === productId),
    addProductToCart: (productList: CartProductProps[], newProduct: OmittedCartProduct) => {
        const existingProduct = CartService.findExistingProduct(productList, newProduct.id)

        if(existingProduct){
            const products = 
                productList.map(product => {
                    if(product.id === newProduct.id) return { ...product, quantity: product.quantity + 1 }
                    else return product
                })
            

                const total = CartService.calculateTotal(products)

                return{
                    products,
                    total
                }
        }

        const products = [...productList, {...newProduct, quantity: 1}]
        const total = CartService.calculateTotal(products)

        return{
            products,
            total
        }
    },
    calculateTotal: (productList: CartProductProps[]) => {
        return productList.reduce((acc, product) => acc + Number(product.price) * product.quantity, 0)
    },
    removeProductFromList: (productList: CartProductProps[], productId: number) => {
        const products = productList.filter(({ id }) => id !== productId)
        const total = CartService.calculateTotal(products)

        return{
            products,
            total
        }
    },
    updateProductQuantity: ({ productList, productId, quantity }: { productList: CartProductProps[], productId: number, quantity: number }) => {
        if(quantity <= 0) return CartService.removeProductFromList(productList, productId)

        const products = productList.map(product => {
            if(product.id === productId) return { ...product, quantity }
            else return product
        })

        const total = CartService.calculateTotal(products)

        return{
            products,
            total
        }
    },
    getItemCount: (productList: CartProductProps[]) => productList.reduce((acc, product) => acc + product.quantity, 0)
}