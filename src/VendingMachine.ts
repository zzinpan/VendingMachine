import { Util } from './Util.js';
import { IProduct } from './product/IProduct.js';
import { IMoney } from './money/IMoney.js';
import { ProductBuffer } from './ProductBuffer.js';
import { ICashMachine } from './cashMachine/ICashMachine.js';
import { IVendingMachineAdminBehavior } from './IVendingMachineAdminBehavior.js';
import { MoneyBuffer } from './MoneyBuffer.js';
import { Coin } from './money/coin/Coin.js';
import { IMoneyConstructor } from './money/IMoneyConstructor.js';

export class VendingMachine {

    // 자판기 식별자
    private id: string;

    // 자판기 열쇠
    private key: any;
    
    private moneyBufferMap: Map<string, MoneyBuffer<IMoney>> = new Map<string, MoneyBuffer<IMoney>>();
    private productBufferMap: Map<string, ProductBuffer<IProduct>> = new Map<string, ProductBuffer<IProduct>>();
    private cashMachineMap: Map<string, ICashMachine<IMoney>> = new Map<string, ICashMachine<IMoney>>();
    private adminBehavior: IVendingMachineAdminBehavior | null = null;

    constructor( id: string = Util.createRandomId(), key: any ) {

        this.id = id;
        this.key = key;

    }

    /******************
     * 사용자
     */
    public getCashMachineMap(): Record<string, ICashMachine<IMoney>> {

        const cashMachineKeys = Array.from( this.cashMachineMap.keys() );
        return cashMachineKeys.reduce(( map, cashMachineKey ) => {

            const cashMachineMap = this.cashMachineMap.get( cashMachineKey ) as ICashMachine<IMoney>;
            map[ cashMachineKey ] = cashMachineMap;
            return map;

        }, {} as Record<string, ICashMachine<IMoney>>);

    }


    /******************
     * 관리자
     */
    public open( key: any ): IVendingMachineAdminBehavior | undefined {
        
        if( this.key !== key ){
            return;
        }

        if( this.adminBehavior === null ){
            
            const self = this;
            const adminBehavior: IVendingMachineAdminBehavior = {

                getCashMachineMap(): Map<string, ICashMachine<IMoney>> {
                    return self.cashMachineMap;
                },

                getCashMachine( IMoney: IMoneyConstructor ): MoneyBuffer<IMoney> | undefined {
                    
                    return self.moneyBufferMap.get( IMoney.name );
                    
                },

                setCashMachine <T extends IMoney>( cashMacine: ICashMachine<T> ): IVendingMachineAdminBehavior {
                    
                    self.cashMachineMap.set( T.name, cashMacine );
                    return this;

                },

                getMoneyBuffer( IMoney: IMoneyConstructor ): MoneyBuffer<IMoney> | undefined {
                    
                    return self.moneyBufferMap.get( IMoney.name );
                    
                },

                setMoneyBuffer( IMoney: IMoneyConstructor ): IVendingMachineAdminBehavior {
                    
                    self.moneyBufferMap.set( IMoney.name, new MoneyBuffer<IMoney>() );
                    return this;

                },

                getProductBufferMap(): Map<string, ProductBuffer<IProduct>> {
                    return self.productBufferMap;
                }
    
            };

            // AOP - 기능 제한 어드바이스
            Object.keys( adminBehavior ).forEach(( key ) => {

                const method = adminBehavior[ key ];
                adminBehavior[ key ] = function( ...args: Array<any> ) {

                    if( this !== self.adminBehavior ){
                        console.error( '이 관리자 행동은 더이상 사용할 수 없습니다.' );
                        return;
                    }
                    return method.apply( adminBehavior, args );

                }

            });

            this.adminBehavior = adminBehavior;

        }        

        return this.adminBehavior;

    }

    public close( key: any ): boolean {

        // 이미 닫혀있음
        if( this.adminBehavior === null ){
            return true;
        }

        if( this.key !== key ){
            return false;
        }

        this.adminBehavior = null;
        return true;

    }

}