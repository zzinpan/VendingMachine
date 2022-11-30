import {Coin} from '../Coin.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 500

};

export class Won500 extends Coin {

    constructor() {

        super( Constant.value, Won );

    }

}