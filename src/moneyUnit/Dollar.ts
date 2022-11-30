import {IMoneyUnit} from './IMoneyUnit.js';

const Constant = {

    sign: "$",
    oneDollar: 1

};

export const Dollar: IMoneyUnit = {

    getSign(): string {
        return Constant.sign;
    },

    getOneDollar(): number {
        return Constant.oneDollar;
    }

}