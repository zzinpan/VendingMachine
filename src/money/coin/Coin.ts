import {IMoney} from '../IMoney.js';
import {IMoneyUnit} from '../../moneyUnit/IMoneyUnit.js';
import {IUseClone} from '../../IUseClone';

export class Coin implements IMoney, IUseClone {

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

    public clone(): Coin {
        return new Coin( this.value, this.moneyUnit );
    }

}