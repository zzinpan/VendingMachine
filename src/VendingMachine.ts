import {Util} from './Util.js';
import {IProduct} from './product/IProduct.js';
import {IMoney} from './money/IMoney.js';
import {ProductBuffer} from './ProductBuffer.js';

export class VendingMachine {

    private id: string;

    private moneys: Array<IMoney> = [];
    private productBufferMap: Map<string, ProductBuffer<IProduct>> = new Map<string, ProductBuffer<IProduct>>();

    constructor( id: string = Util.createRandomId() ) {

        this.id = id;

    }

    setProductBuffer( key: string, productBuffer: ProductBuffer<IProduct> ): this {

        this.productBufferMap.set( key, productBuffer );
        return this;

    }

    addProduct( productBufferKey: string, product: IProduct ): this {

        const productBufferMap = this.productBufferMap.get( productBufferKey );
        if( productBufferMap === undefined ){
            return this;
        }

        productBufferMap.addProduct( product );
        return this;

    }

}