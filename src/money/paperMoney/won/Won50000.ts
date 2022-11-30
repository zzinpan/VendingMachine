import {PaperMoney} from '../PaperMoney.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 50000

};

export class Won50000 extends PaperMoney {

    constructor() {

        super( Constant.value, Won );

    }

}