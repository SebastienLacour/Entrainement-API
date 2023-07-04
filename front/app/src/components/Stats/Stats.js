import React from 'react'
import { useState, useEffect } from 'react'
import './Stats.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Accordion from '../Accordion/Accordion'

export default function Stats() {

    const [data, setData] = useState([])

    const fetchData = () => {
        fetch("http://localhost:3000/api/stats/")
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const levelingStats = data.filter(el => el.softCap.length > 1)

    const otherStats = data.filter(el => el.softCap.length <= 1)

    return (
        <div>
            <Header />
            <div className="background">
                <div className="overlay">
                    <main className='main-stats'>
                        <div className="title">
                            <h1>Statistiques</h1>
                            <p>
                                Vous trouverez ici les informations concernant les différentes statistques et les informations les concernant,
                                y compris les soft caps qui, pour ceux qui ne le savent pas, représente des paliers à partir desquels
                                les stats augmentent plus ou moins à chaque niveau attribué. 
                            </p>
                        </div>
                        <section>
                            <h2 className='section__title'>Stats principales</h2>
                            <div className="accordion-container">
                                {levelingStats.map(item => (
                                    <Accordion name={item.name} description={item.description} softCap={item.softCap} />
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className='section__title'>Stats secondaires</h2>
                            <div className="accordion-container">
                                {otherStats.map(item => (
                                    <Accordion name={item.name} description={item.description} softCap={item.softCap} />
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}
