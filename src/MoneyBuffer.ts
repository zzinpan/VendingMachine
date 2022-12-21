import { IMoney } from "./money/IMoney";

// 반환구
class MoneyBuffer<T extends IMoney> {

    private moneys: Array<T>;

    constructor() {

        this.moneys = new Array<T>();

    }

    public addMoney( money: T ): this {

        this.moneys.push( money );
        return this;

    }

    public getAllMoney(): Array<T> {

        const moneys = this.moneys.slice();
        this.moneys.length = 0;
        return moneys;

    }

}

export { MoneyBuffer };