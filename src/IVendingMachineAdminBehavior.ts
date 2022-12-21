import { IMoney } from "./money/IMoney";
import { ICashMachine } from "./cashMachine/ICashMachine";
import { MoneyBuffer } from "./MoneyBuffer";
import { ProductBuffer } from "./ProductBuffer";
import { IProduct } from "./product/IProduct";
import { IMoneyConstructor } from "./money/IMoneyConstructor";

export interface IVendingMachineAdminBehavior {

    [key: string]: Function;

    getCashMachineMap: () => Map<string, ICashMachine<IMoney>>;
    setMoneyBuffer: ( IMoney: IMoneyConstructor ) => IVendingMachineAdminBehavior;
    getMoneyBuffer: ( IMoney: IMoneyConstructor ) => MoneyBuffer<IMoney> | undefined;
    getProductBufferMap: () => Map<string, ProductBuffer<IProduct>>;

}