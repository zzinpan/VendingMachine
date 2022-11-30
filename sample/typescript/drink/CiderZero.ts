import {Drink} from '../../../src/product/Drink.js';
import {Won} from '../../../src/moneyUnit/Won.js';

const Constant = {

    name: 'cider-zero',
    price: 1500

};

export class CiderZero extends Drink {

    public static NAME: string = Constant.name;

    constructor() {

        super( Constant.name, Constant.price, Won );

    }

}