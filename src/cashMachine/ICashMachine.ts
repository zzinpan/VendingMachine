import { IMoney } from "../money/IMoney";
import { MoneyBuffer } from "../MoneyBuffer";

// 금액 지불기
export interface ICashMachine<T extends IMoney> {

    // 지불
    payment( money: T ): boolean;

}