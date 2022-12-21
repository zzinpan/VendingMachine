import {Drink} from '../../../src/product/Drink.js';
import {Won} from '../../../src/moneyUnit/Won.js';

const Constant = {

    name: 'coka-cola-zero',
    price: 1500

};

export class CokaColaZero extends Drink {

    constructor() {

        super( Constant.name, Constant.price, Won );

    }

}