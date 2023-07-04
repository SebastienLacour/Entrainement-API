import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

import './Home.css'

export default function Home() {

  const themes = ["statistiques", "classes", "equipements"]

  return (
    <div>
      <Header />
      <div className="background">
        <div className="overlay">
          <main>
            <div className="title">
              <h1>Bienvenue sur notre merveilleux site !</h1>
              <p>Vous trouverez ici tout ce dont vous avez besoin !!</p>
            </div>
            <div className="container">
              {themes.map((el) => (
                <div className='item'>
                  <Link to={"/" + el} className='link'>
                    <h2 key={el}>{el}</h2>
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
