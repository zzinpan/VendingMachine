import {Coin} from '../Coin.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 1

};

export class Won1 extends Coin {

    constructor() {

        super( Constant.value, Won );

    }

}