'use strict';

import React, {Component} from 'react';

import './index.less';

import tm from './tm.mustache';

export default class Hello extends Component {
    constructor(props){
        super(props);

        this.state = {
            values : ['def']
        }
    }

    render(){
        let {name, from} = this.props;
        let {values} = this.state;

        console.log(tm({
            list: [1,2,3,4,5]
        }));

        return (
            <div>
                <p>Hello {name} ({from}).</p>
                <input
                    ref="input"
                    onKeyUp={this.onChange.bind(this)}
                    placeholder="输入一些内容"
                    />
                <ul>
                    {
                        values.map((val, idx) => {
                            return (
                                <li key={idx}>
                                    {idx} ===> {val}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

    onChange(e){
        if(e.keyCode === 13){
            var input = this.refs.input;
            var val = input.value;
            var {values} = this.state;

            if(!val){
                return
            }

            this.setState({
                values: [...values, val]
            });
            input.value = '';
        }
    }
}
