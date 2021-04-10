import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            collection: SHOP_DATA
        }
        //console.log(this.state);
    }
    render() {
        const {collection} = this.state;
        return (
            <div className='shop-page'>
                <h1>SHOP PAGE</h1>
                {collection.map(item => 
                    <PreviewCollection key={item.id} {...item}/>
                )}
            </div>
        )
    }
}
