import {Util} from './Util.js';
import {IProduct} from './product/IProduct.js';
import {IMoney} from './money/IMoney.js';
import {ProductBuffer} from './ProductBuffer.js';
import { ICashMachine } from './cashMachine/ICashMachine.js';

export class VendingMachine {

    private id: string;

    private moneys: Array<IMoney> = [];
    private productBufferMap: Map<string, ProductBuffer<IProduct>> = new Map<string, ProductBuffer<IProduct>>();
    private cashMachineMap: Map<string, ICashMachine<IMoney>> = new Map<string, ICashMachine<IMoney>>();

    constructor( id: string = Util.createRandomId() ) {

        this.id = id;

    }

    payment( cashMachineKey: string, money: IMoney ): this {

        const cashMachine = this.cashMachineMap.get( cashMachineKey );
        if( cashMachine === undefined ){
            return this;
        }

        const result = cashMachine.payment( money );
        if( result === false ){
            return this;
        }

        this.moneys.push( money );
        return this;

    }

    setCashMachine( key: string, cashMachine: ICashMachine<IMoney> ): this {

        this.cashMachineMap.set( key, cashMachine );
        return this;

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