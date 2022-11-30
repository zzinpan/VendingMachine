import {Coin} from '../Coin.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 5

};

export class Won5 extends Coin {

    constructor() {

        super( Constant.value, Won );

    }

}