import { Coin } from "../money/coin/Coin";
import { ICashMachine } from "./ICashMachine";
import { Buffer } from "../common/Buffer";
import { IMoneyConstructor } from "../money/coin/IMoneyConstructor";

class CoinInserter implements ICashMachine<Coin> {

    private buffersMap: Map<IMoneyConstructor, Array<Buffer<Coin>>> = new Map<IMoneyConstructor, Array<Buffer<Coin>>>();
    private bufferMap: Map<string, Buffer<Coin>> = new Map<string, Buffer<Coin>>();

    constructor( ...CoinConstructors: Array<IMoneyConstructor> ) {

        CoinConstructors.forEach(( CoinConstructor: IMoneyConstructor ) => {

            const buffers = new Array<Buffer<Coin>>();
            this.buffersMap.set( CoinConstructor, buffers );

        });

    }

    private getBuffersByCoin( coin: Coin ): Array<Buffer<Coin>> | undefined {

        const iterator = this.buffersMap.keys();
        for( const CoinConstructor of iterator ){

            if( coin instanceof CoinConstructor ){
                return this.getBuffers( CoinConstructor );
            }

        }        

    }

    public payment( money: Coin ): boolean {

        // 허용되지 않는 동전
        const buffers = this.getBuffersByCoin( money );
        if( buffers === undefined ){
            return false;
        }

        // 버퍼에 동전이 꽉차면 들어가지 않음
        const inserted = buffers.some(( buffer: Buffer<Coin> ) => {

            return buffer.push( money );

        });

        return inserted;

    }

    public setBuffer( id: string, CoinConstructor: IMoneyConstructor, buffer: Buffer<Coin>): boolean {
            
        const beforeBuffer = this.bufferMap.get( id );
        if( beforeBuffer !== undefined ){
            return false;
        }

        let buffers = this.getBuffers( CoinConstructor );
        if( buffers === undefined ){
            return false;
        }

        buffers.push( buffer );
        this.bufferMap.set( id, buffer );

        return true;

    }

    public getBuffer( id: string ): Buffer<Coin> | undefined {

        return this.bufferMap.get( id );

    }

    public getBuffers( CoinConstructor: IMoneyConstructor ): Array<Buffer<Coin>> | undefined {

        return this.buffersMap.get( CoinConstructor );

    }

}

export { CoinInserter };