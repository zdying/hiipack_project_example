/**
 * @file
 * @author zdying
 */

import React from 'react';
import ReactDom, {render} from 'react-dom';

import Hello from './components/Hello/';

render(
    <Hello name="zdying" from="hiipack" />,
    document.getElementById('app')
);


// if(module.hot){
//     module.hot.accept();
// }
