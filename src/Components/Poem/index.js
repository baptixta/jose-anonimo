import React from 'react'
import Poems from '../../Data/poems.json'
import './style.scss'

const Poem = ({ name, text }) => {
    return (
        <>
            {Poems.map(() => {
                return (
                    <div className="poem">
                        <h2 className="poemTitle">{name}</h2>

                        <p className="poemText">{text}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Poem