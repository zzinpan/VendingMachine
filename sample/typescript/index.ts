import {VendingMachine} from '../../src/VendingMachine.js';
import {CokaCola} from './drink/CokaCola.js';
import {CokaColaZero} from './drink/CokaColaZero.js';
import {Cider} from './drink/Cider.js';
import {CiderZero} from './drink/CiderZero.js';
import {CiderStrong} from './drink/CiderStrong.js';
import {Drink as AbstractDrink} from '../../src/product/Drink.js';
import {ProductBuffer} from '../../src/ProductBuffer.js';

// 음료수 최대치
const Constant = {

    config: {
        drinkMaxCount: 100
    }

};

// 자판기 생성
const drinkMachine = new VendingMachine( 'drinkMachine' );

// 자판기 조립
[

    CokaCola,
    CokaColaZero,
    Cider,
    CiderZero,
    CiderStrong

].forEach(( Drink ) => {

    // 버퍼 조립
    const drinkBuffer = new ProductBuffer<AbstractDrink>( Constant.config.drinkMaxCount );
    drinkMachine.setProductBuffer( Drink.NAME, drinkBuffer );

    // 음료수 채우기
    for( let i=0; i<Constant.config.drinkMaxCount; i=i+1 ){
        drinkMachine.addProduct( Drink.NAME, new Drink() );
    }

});


console.log( drinkMachine );