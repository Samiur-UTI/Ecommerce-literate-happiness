import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';
export default function PreviewCollection({title,items}) {
    return (
        <div className='collection-preview'>
            <h1 className ='title'>{title}</h1>
            <div className='preview'>
                {
                    items.slice(0,4).map(item => (
                        <CollectionItem {...item}/>
                    ))
                }
            </div>
        </div>
    )
}
