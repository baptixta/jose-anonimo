import React from 'react'
import Poems from '../../Data/poems.json'
import './style.scss'

const Poem = () => {
    return (
        <>
            {Poems.map((poem, index) => {
                return (
                    <div className="poem" key={index}>
                        <h2 className="poemTitle">{poem.title}</h2>

                        <p className="poemText">{poem.poem}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Poem