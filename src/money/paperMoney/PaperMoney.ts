import {IMoney} from '../IMoney.js';
import {IMoneyUnit} from '../../moneyUnit/IMoneyUnit.js';

export abstract class PaperMoney implements IMoney {

    private readonly value: number;
    private readonly moneyUnit: IMoneyUnit;

    constructor( value: number, moneyUnit: IMoneyUnit ) {

        this.value = value;
        this.moneyUnit = moneyUnit;

    }

    public getMoneyUnit(): IMoneyUnit {
        return this.moneyUnit;
    }

    public getValue(): number {
        return this.value;
    }

}