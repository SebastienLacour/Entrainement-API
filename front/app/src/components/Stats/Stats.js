import React from 'react'
import { useState, useEffect } from 'react'
import './Stats.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Accordion from '../Accordion/Accordion'

export default function Stats() {

    // const [data, setData] = useState([])

    // const fetchData = () => {
    //      fetch("http://localhost:3000/api/stats/")
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json)
    //         setData(json)
    //     })
    //     .catch(error => console.error(error))
    // }

    // useEffect({
    //     fetchData
    // }, [])
    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("http://localhost:3000/api/stats/")
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setData(result)
        })
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    return (
        <div>
            <Header />
            <div className="background">
                <div className="overlay">
                    <main>
                        <div className="title">
                            <h1>Statistiques</h1>
                            <p>Vous trouverez ici les informations concernant les différentes statistques et les informations les concernant</p>
                        </div>
                            <div className='accordion-container'>
                                {data.map(item => (
                                    <Accordion name={item.name} description={item.description} softCap={item.softCap}/>
                                ))}

                            </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}
