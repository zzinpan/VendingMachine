import { IMoney } from "../money/IMoney";
import { Buffer } from "../common/Buffer";
import { IMoneyConstructor } from "../money/coin/IMoneyConstructor";

// 금액 지불기
export interface ICashMachine<T extends IMoney> {

    // 지불
    payment( money: T ): boolean;

    // 버퍼 연결
    setBuffer( id: string, CoinConstructor: IMoneyConstructor, buffer: Buffer<IMoney>): boolean;
    getBuffer( id: string ): Buffer<IMoney> | undefined;
    getBuffers( MoneyConstructor: IMoneyConstructor ): Array<Buffer<IMoney>> | undefined;

}