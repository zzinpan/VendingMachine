import { IMoney } from "../money/IMoney";

export interface ICashMachine<T extends IMoney> {

    payment( money: T ): boolean;

}