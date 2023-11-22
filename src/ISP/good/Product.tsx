import React from 'react';
import {Thumbnail} from "./Thumbnail.tsx";

export interface IProduct {
    id: string;
    title: string;
    price: number;
    rating: { rate: number };
    image: string;
}

interface IProductProps {
    product: IProduct;
}

const Product: React.FC<IProductProps> = (props) => {
    const {product} = props;

    return (
        <div
            className="w-56 flex flex-col items-center m-2 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Thumbnail imageUrl={product.image} />
            </a>
        </div>
    )
};

export default Product;