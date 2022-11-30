import {IMoneyUnit} from './IMoneyUnit.js';

const Constant = {

    sign: "₩",
    oneDollar: 1326.63

};

export const Won: IMoneyUnit = {

    getSign(): string {
        return Constant.sign;
    },

    getOneDollar(): number {
        return Constant.oneDollar;
    }

}