import {IMoneyUnit} from '../moneyUnit/IMoneyUnit.js';
import { PaperMoney } from './paperMoney/PaperMoney.js';

export interface IMoney {

    getValue(): number;
    getMoneyUnit(): IMoneyUnit;

}