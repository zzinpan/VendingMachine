import { IProduct } from './product/IProduct.js';

export class ProductBuffer<E extends IProduct> {

    private readonly maxCount: number;
    private products: Array<E> = [];

    constructor( maxCount: number ) {

        this.maxCount = maxCount;

    }

    addProduct( product: E ): this {

        if( this.maxCount <= this.products.length ){
            return this;
        }

        this.products.push( product );
        return this;

    }

    getCount() {

        return this.products.length;

    }

    getMaxCount() {

        return this.maxCount;

    }

}