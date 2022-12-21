import {IMoneyUnit} from '../moneyUnit/IMoneyUnit.js';
import { IMoney } from './IMoney.js';
import { PaperMoney } from './paperMoney/PaperMoney.js';

export interface IMoneyConstructor {

    new (): IMoney;

}