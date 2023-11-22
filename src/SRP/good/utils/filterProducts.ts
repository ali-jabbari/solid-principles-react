import {IProduct} from "../models/Product.models.ts";

export function filterProducts(products: IProduct[], rate: number) {
    return products.filter(
        (product: IProduct) => product.rating.rate > rate
    );
}