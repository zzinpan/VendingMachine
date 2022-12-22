import { IMoney } from "./money/IMoney";
import { ICashMachine } from "./cashMachine/ICashMachine";
import { Buffer } from "./common/Buffer";
import { IProduct } from "./product/IProduct";
import { IMoneyConstructor } from "./money/IMoneyConstructor";

export interface IVendingMachineAdminBehavior {

    [key: string]: Function;

    getCashMachineMap: () => Map<string, ICashMachine<IMoney>>;
    getMoneyBufferMap: () => Map<string, Buffer<IMoney>>;
    getProductBufferMap: () => Map<string, Buffer<IProduct>>;

}