import {PaperMoney} from '../PaperMoney.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 10000

};

export class Won10000 extends PaperMoney {

    constructor() {

        super( Constant.value, Won );

    }

}