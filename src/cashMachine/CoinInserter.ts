import { IMoneyUnit } from "../moneyUnit/IMoneyUnit";
import { Coin } from "../money/coin/Coin";
import { ICashMachine } from "./ICashMachine";
import { MoneyBuffer } from "../MoneyBuffer";

class CoinInserter implements ICashMachine<Coin> {

    private moneyUnit: IMoneyUnit;

    constructor( moneyUnit: IMoneyUnit ) {

        this.moneyUnit = moneyUnit;

    }

    public payment( money: Coin ): boolean {

        return money.getMoneyUnit() === this.moneyUnit;

    }

}

export { CoinInserter };