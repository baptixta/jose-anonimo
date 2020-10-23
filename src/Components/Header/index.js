import React from 'react'
import './style.scss'

const HeaderJose = ({ title, text }) => {
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
            <p className="header__text">
                {text}
            </p>
        </div>
    )
}

export default HeaderJose