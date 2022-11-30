import {Coin} from '../Coin.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 100

};

export class Won100 extends Coin {

    constructor() {

        super( Constant.value, Won );

    }

}