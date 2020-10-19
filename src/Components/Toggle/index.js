import React from 'react'
import './style.scss'
import '../../index.css'

const Mode = ({ text, setTheme }) => {
    return (
    <h2 className="mode" onClick={() => setTheme(true)}>{ text }</h2>
    )
}

export default Mode
