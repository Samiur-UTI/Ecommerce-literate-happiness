import React from 'react'
import './custom-button.styles.scss';
export default function CustomButton({children, isGoogleSignedIn, ...otherProps}) {
    return (
        <button className={`${isGoogleSignedIn ? 'google-sign-in':''} custom-button`} {...otherProps}>
            {children}
        </button>
    )
}
