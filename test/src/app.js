/**
 * @file
 * @author zdying
 */

import math from './lib/math';
import $ from './lib/dom';

import './app.less';

$('a').addEventListener('keyup', calc);
$('b').addEventListener('keyup', calc);

function calc(eve){
    if(eve.keyCode === 13){
        var a = $('a').value || '';
        var b = $('b').value || '';

        $('result').textContent = math.add(a, b);
    }
}

console.log(math.add(1,2));

// var tipsNode = document.createElement('div');
//
// tipsNode.textContent = '输入数字，并按`Enter`查看计算结果：';
// $('app').appendChild(tipsNode);

if(module.hot){
    module.hot.accept();
}
