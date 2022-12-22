export class Buffer<E> {

    private readonly maxCount: number;
    private items: Array<E> = [];

    constructor( maxCount: number ) {

        this.maxCount = maxCount;

    }

    // 꼬리에 넣기
    public push( product: E ): this {

        if( this.maxCount <= this.items.length ){
            return this;
        }

        this.items.push( product );
        return this;

    }

    // 꼬리 빼기
    public pop(): E | undefined {

        return this.items.pop();

    }

    // 꼬리부터 머리까지 빼기
    public popAll(): Array<E> {

        return this.shiftAll().reverse();

    }

    // 머리에 넣기
    public unshift( product: E ): this {

        if( this.maxCount <= this.items.length ){
            return this;
        }

        this.items.unshift( product );
        return this;

    }

    // 머리 빼기
    public shift(): E | undefined {

        return this.items.shift();

    }

    // 머리부터 꼬리까지 빼기
    public shiftAll(): Array<E> {

        const items = this.items.slice();
        this.items.length = 0;
        return items;

    }


    public getCount(): number {

        return this.items.length;

    }

    public getMaxCount(): number {

        return this.maxCount;

    }

}