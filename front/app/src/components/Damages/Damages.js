import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Accordion from '../Accordion/Accordion'
import './Damages.css'

export default function Damages(props) {

    const [data, setData] = useState([])

    const url = 'http://localhost:3000/api/damages/'

    const fetchData = () => {
        fetch(url)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    console.log(data)

    const physicalDamages = data.filter(el => el.type === "physique")
    const elementalDamages = data.filter(el => el.type === "élémentaire")
    const statusEffect = data.filter(el => el.type === "effet de status")

    return (
        <div>
            <Header />
            <div className="background">
                <div className="overlay">
                    <main className='main-damages'>
                        <div className="title">
                            <h1>Dégâts</h1>
                            <p>Vous trouverez ici toutes les informations liées aux types de dégâts et aux effets de status.</p>
                        </div>
                        <section>
                            <h2 className='section__title'>dégâts physiques</h2>
                            <div className="accordion-container">
                                {physicalDamages.map(item => (
                                    <Accordion name={`dégâts ${item.name}`} imageUrl={item.imageUrl} description={item.description} softCap={[]} />
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className='section__title'>dégâts élémentaires</h2>
                            <div className="accordion-container">
                                {elementalDamages.map(item => (
                                    <Accordion name={`dégâts ${item.name}`} imageUrl={item.imageUrl} description={item.description} softCap={[]} />
                                ))}
                            </div>
                        </section>
                        <section>
                            <h2 className='section__title'>effets de status</h2>
                            <div className="accordion-container">
                                {statusEffect.map(item => (
                                    <Accordion name={item.name} imageUrl={item.imageUrl} description={item.description} softCap={[]} />
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
