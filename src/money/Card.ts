import { IMoneyUnit } from "../moneyUnit/IMoneyUnit";
import { IMoney } from "./IMoney";

class Card implements IMoney {
    getValue(): number {
        throw new Error("Method not implemented.");
    }
    getMoneyUnit(): IMoneyUnit {
        throw new Error("Method not implemented.");
    }

}

export { Card };