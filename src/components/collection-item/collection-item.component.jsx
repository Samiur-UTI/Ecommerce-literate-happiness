import React from 'react';
import './collection-item.component.scss';

export default function CollectionItem({id,name,price,imageUrl}) {
    return (
        <div className='collection-item' key={id}>
            <div 
                className='image'
                style={{backgroundImage:`url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
        </div>
    )
}
