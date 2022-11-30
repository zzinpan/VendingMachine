import {PaperMoney} from '../PaperMoney.js';
import {Won} from '../../../moneyUnit/Won.js';

const Constant = {

    value: 1000

};

export class Won1000 extends PaperMoney {

    constructor() {

        super( Constant.value, Won );

    }

}