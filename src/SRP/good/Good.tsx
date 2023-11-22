import {useProducts} from "./hooks/useProducts.ts";
import {useRateFilter} from "./hooks/useRateFilter.ts";
import {Filter} from "./Filter.tsx";
import {IProduct} from "./models/Product.models.ts";
import {Product} from "./Product.tsx";
import {filterProducts} from "./utils/filterProducts.ts";

export function Good() {
    const {products} = useProducts();

    const {filterRate, handleRating} = useRateFilter();

    return (
        <div className="flex flex-col h-full">
            <Filter
                filterRate={filterRate as number}
                handleRating={handleRating}
            />
            <div className="h-full flex flex-wrap justify-center">
                {filterProducts(products, filterRate).map((product: IProduct) => (
                    <Product product={product}/>
                ))}
            </div>
        </div>
    );
}