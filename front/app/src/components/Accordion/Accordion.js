import React, { useState } from 'react'
import './Accordion.css'

export default function Accordion(props) {

    const [toggle, setToggle] = useState(false)

    const toggleHandler = () => {
        setToggle(!toggle)
    }

    return (
        <div className='accordion'>
            {toggle === false ?
                <div>
                    <div className='accordion__head'>
                        <h2>{props.name}</h2>
                        {props.imageUrl === undefined ? <i class="fa-solid fa-plus fa-xl" onClick={toggleHandler}></i>
                                                        : 
                                                        <img src={props.imageUrl} alt={props.name} className='accordion__img' onClick={toggleHandler} />}
                    </div>
                    <div className='accordion__body__close'>
                    {props.description.split(",").map(el => (
                    <p>{el}</p>
                ))}

                {props.softCap ? <div className='accordion__softcap'>
                    {typeof props.softCap[0] === "number" ?
                        <div>
                            <h3> soft cap: </h3>
                            <p>{props.softCap.join("/")}</p>
                        </div>
                        :
                        <div>
                            <h3> soft cap: </h3>
                            <p>{props.softCap.join(", ")}</p>
                        </div>
                    }
                </div>
                    :
                    ""
                }

                    </div>
                </div>
                :
                <div>
                    <div className='accordion__head'>
                        <h2>{props.name}</h2>
                        <i class="fa-solid fa-minus fa-xl" onClick={toggleHandler}></i>
                    </div>
                    <div className='accordion__body'>
                    {props.description.split(",").map(el => (
                    <p>{el}</p>
                ))}

                {props.softCap.length > 1 ? <div className='accordion__softcap'>
                    {typeof props.softCap[0] === "number" ?
                        <div>
                            <h3> soft cap: </h3>
                            <p>{props.softCap.join("/")}</p>
                        </div>
                        :
                        <div>
                            <h3> soft cap: </h3>
                            <p>{props.softCap.join(", ")}</p>
                        </div>
                    }
                </div>
                    :
                    ""
                }

                    </div>

                </div>
            }
            </div>
    )
}
