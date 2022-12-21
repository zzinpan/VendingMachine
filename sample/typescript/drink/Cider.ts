import {Drink} from '../../../src/product/Drink.js';
import {Won} from '../../../src/moneyUnit/Won.js';

const Constant = {

    name: 'cider',
    price: 1000

};

export class Cider extends Drink {

    constructor() {

        super( Constant.name, Constant.price, Won );

    }

}