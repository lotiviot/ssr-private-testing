import React from 'react'
import './app.scss'

export default function App(props) {
    const facts = props.facts.map((fact , i) => {
        return <li key ={i}>{fact.text}</li>
    })
    return (
        <div>
            {facts}
        </div>
    )
}
