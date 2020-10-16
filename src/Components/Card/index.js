import React from 'react'
import './style.scss'
import Poems from '../../Data/poems.json'

const Card = () => {
    return (
        <>
            {Poems.map((poem, index) => {            
                return (
                    <div className="card"> 
                    <h2 key={ index }>{poem.title}</h2>
                    </div>
                )
            })}
        </>
    )
}

export default Card