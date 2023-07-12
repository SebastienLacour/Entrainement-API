import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ItemList.css'

export default function ItemList(props) {

    const url = props.url
    console.log(url)

    const [data, setData] = useState([])

    const fetchData = () => {
        fetch(url)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div>
            <Header />
            <div className="background">
                <div className="overlay">
                    <main className='main-itemList'>
                        <div className="title">
                            <h1>{props.title}</h1>
                            <p>Vous trouverez ici toutes les informations concernant les classes</p>
                        </div>
                        <div className="container">
                            {data.map((el) => (
                                <div className='container__item'>
                                    <Link to={'./' + el._id} className='link'>
                                        <div className='item__inside'>
                                            <div className='item__head'>
                                                <h2>{el.name}</h2>
                                            </div>
                                            <div className="item__body">
                                                <img src={el.imageUrl} alt={el.name} className='item__img' />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    )
}
