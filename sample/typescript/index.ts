import { VendingMachine } from '../../src/VendingMachine.js';
import { CoinInserter } from '../../src/cashMachine/CoinInserter.js';
import { CokaCola } from './drink/CokaCola.js';
import { CokaColaZero } from './drink/CokaColaZero.js';
import { Cider } from './drink/Cider.js';
import { CiderZero } from './drink/CiderZero.js';
import { CiderStrong } from './drink/CiderStrong.js';
import { Drink as AbstractDrink } from '../../src/product/Drink.js';
import { Buffer } from '../../src/common/Buffer.js';
import { Won } from '../../src/moneyUnit/Won.js';
import { Won100 } from '../../src/money/coin/won/Won100.js';
import { IVendingMachineAdminBehavior } from '../../src/IVendingMachineAdminBehavior.js';
import { Won500 } from '../../src/money/coin/won/Won500.js';
import { Coin } from '../../src/money/coin/Coin.js';

// 음료수 최대치
const Constant = {

    config: {
        drinkMaxCount: 100,
        coinMaxCount: 100
    }

};

// 자판기 열쇠
const adminKey = Object.freeze({
    color: 'silver',
    size: '4cm'
});

// 자판기 생성
const drinkMachine = new VendingMachine( 'drinkMachine', adminKey );

// 자판기 열기
const adminBehavior = drinkMachine.open( adminKey ) as IVendingMachineAdminBehavior;

// 닫기 테스트
// drinkMachine.close( adminKey );


/********************
 * 자판기 조립시작
 */


// 동전투입기 조립
const cashMachineMap = adminBehavior.getCashMachineMap();
cashMachineMap.set( 'coin', new CoinInserter(Won) );

// 음료수 버퍼 조립
const productBufferMap = adminBehavior.getProductBufferMap();
[

    CokaCola,
    CokaColaZero,
    Cider,
    CiderZero,
    CiderStrong

].forEach(( Drink ) => {

    // 버퍼 조립
    const drinkBuffer = new Buffer<AbstractDrink>( Constant.config.drinkMaxCount );
    productBufferMap.set( Drink.name, drinkBuffer );

    // 음료수 채우기
    for( let i=0; i<Constant.config.drinkMaxCount; i=i+1 ){
        drinkBuffer.push( new Drink() );
    }

});


// 동전 버퍼 조립
const moneyBufferMap = adminBehavior.getMoneyBufferMap();
[

    Won100,
    Won500

].forEach(( Won ) => {

    // 버퍼 조립
    const moneyBuffer = new Buffer<Coin>(Infinity);
    moneyBufferMap.set( Won.name, moneyBuffer );

    // 동전 채우기
    for( let i=0; i<Constant.config.coinMaxCount; i=i+1 ){
        moneyBuffer.push( new Won() );
    }

});



console.log( drinkMachine );