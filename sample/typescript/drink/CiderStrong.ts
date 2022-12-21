import {Drink} from '../../../src/product/Drink.js';
import {Won} from '../../../src/moneyUnit/Won.js';

const Constant = {

    name: 'cider-strong',
    price: 1500

};

export class CiderStrong extends Drink {

    constructor() {

        super( Constant.name, Constant.price, Won );

    }

}