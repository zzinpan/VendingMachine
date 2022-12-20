import { IMoney } from "../money/IMoney";
import { IMoneyUnit } from "../moneyUnit/IMoneyUnit";
import { Coin } from "../money/coin/Coin";
import { ICashMachine } from "./ICashMachine";

class CoinInserter implements ICashMachine<Coin> {

    private moneyUnit: IMoneyUnit;

    constructor( moneyUnit: IMoneyUnit ) {

        this.moneyUnit = moneyUnit;

    }

    public payment( money: Coin ): boolean {

        // 특정 단위만 지불 가능
        return money.getMoneyUnit() === this.moneyUnit;

    }

}

export { CoinInserter };