import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import './Home.css'

export default function Home() {

    const themes = ["classes", "équipements", "statistiques"]

  return (
    <div>
        <Header/>
        <div className="background">
        <main>
          <div className="title"> 
            <h1>Bienvenu sur notre merveilleux site !</h1>
            <p>Vous trouverez ici ce dont vous avez besoin !!</p>
          </div>

          <div className="container">
            {themes.map( (el) => (
                <div className='item'>
                  <h2 key={el}>{el}</h2>
                </div>
              ))}
          </div>
        </main>
        </div>
        <Footer/>
    </div>
  )
}
