import {Coin} from '../Coin.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 10

};

export class Won10 extends Coin {

    constructor() {

        super( Constant.value, Won );

    }

}