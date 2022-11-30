import {IProduct} from './IProduct.js';
import {IMoneyUnit} from '../moneyUnit/IMoneyUnit.js';

export class Drink implements IProduct {

    private readonly name: string;
    private readonly price: number;
    private readonly moneyUnit: IMoneyUnit;

    constructor( name: string, price: number, moneyUnit: IMoneyUnit ) {

        this.name = name;
        this.price = price;
        this.moneyUnit = moneyUnit;

    }

    public getName(): string {
        return this.name;
    }

    public getPrice(): number {
        return this.price;
    }

    public getMoneyUnit(): IMoneyUnit {
        return this.moneyUnit;
    }

}