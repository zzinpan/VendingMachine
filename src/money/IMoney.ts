import {IMoneyUnit} from '../moneyUnit/IMoneyUnit.js';

export interface IMoney {

    getValue(): number;
    getMoneyUnit(): IMoneyUnit;

}