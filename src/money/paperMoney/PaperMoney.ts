import {IMoney} from '../IMoney.js';
import {IMoneyUnit} from '../../moneyUnit/IMoneyUnit.js';

export class PaperMoney implements IMoney {

    private readonly value: number;
    private readonly moneyUnit: IMoneyUnit;

    constructor( value: number, moneyUnit: IMoneyUnit ) {

        this.value = value;
        this.moneyUnit = moneyUnit;

    }

    getMoneyUnit(): IMoneyUnit {
        return this.moneyUnit;
    }

    getValue(): number {
        return this.value;
    }

}