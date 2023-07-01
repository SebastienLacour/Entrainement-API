import React from 'react'
import './Accordion.css'

export default function Accordion(props) {

    props.softCap ? console.log(props.softCap) : console.log("pas de soft cap")

  return (
    <div className='accordion'>
        <div className="accordion__head">
            <h2>{props.name}</h2>
            <i class="fa-solid fa-plus fa-xl"></i>
        </div>
        <div className="accordion__body">
            {props.description.split(",").map(el => (
                <p>{el}</p>
            ))}

            
        </div>
    </div>
  )
}
