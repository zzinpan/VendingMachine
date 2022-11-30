import {Drink} from '../../../src/product/Drink.js';
import {Won} from '../../../src/moneyUnit/Won.js';

const Constant = {

    name: 'coka-cola',
    price: 1200

};

export class CokaCola extends Drink {

    public static NAME: string = Constant.name;

    constructor() {

        super( Constant.name, Constant.price, Won );

    }

}