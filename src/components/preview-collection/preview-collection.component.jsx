import React from 'react';
import './preview-collection.styles.scss';
import PreviewCollectionItem from '../../components/preview-collection-item/preview-collection-item';
export default function PreviewCollection({title,items}) {
    return (
        <div className='collection-preview'>
            <h1 className ='title'>{title}</h1>
            <div className='preview'>
                {
                    items.map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        </div>
    )
}
