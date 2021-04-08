import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            collection: SHOP_DATA
        }
        //console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>SHOP PAGE</h1>
                <PreviewCollection {...this.state}/>
            </div>
        )
    }
}
