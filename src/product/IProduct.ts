import {IMoneyUnit} from '../moneyUnit/IMoneyUnit.js';

export interface IProduct {

    getName(): string;
    getPrice(): number;
    getMoneyUnit(): IMoneyUnit;

}