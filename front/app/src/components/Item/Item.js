import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Item.css'

export default function Item(props) {

  const id = useParams('id').id
  console.log(id)

  const url = props.url + id

  const [data, setData] = useState([])

  const fetchData = async () => {
    await fetch(url)
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  const weapons = data.equipement.armes
  const armors = data.equipement.armure

  const stats = data.stats
  console.log(stats);

  return (
    <div>
      <Header />
      <div className="background">
        <div className="overlay">
          <main className='item__main'>
            <Link to={props.back} className='back'>retour</Link>
            <div className="item__container">

              <div className="item__title">
                <h1>{data.name}</h1>
              </div>

              <div className="item__body">

                <div className="item__img">
                  <img src={data.imageUrl} alt={data.name} />
                </div>

                {data.stats ? 
                  <div className='stats'>
                    <table>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        niveau
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.niveau}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        vigueur
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.vigeur}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        esprit
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.esprit}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        endurance
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.endurance}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        force
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.force}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        dextérité
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.dextérité}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        intelligence
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.intelligence}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        foi
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.foi}
                      </tr>
                      </td>
                      <td className = 'stats__cell'>
                      <th className='stats__cell__head'>
                        ésotérisme
                      </th>
                      <tr className = 'stats__cell__row'>
                        {data.stats.ésotérisme}
                      </tr>
                      </td>
                    </table>
                  </div>
                  :
                  <div>

                  </div>
                }
                {data.equipement ?
                  <div className="item__equipement">
                    <h2>équipements</h2>
                    <div className='item__equipement__container'>
                      <div className='item__equipement__list'>
                        <h3>armes</h3>
                        <ul>
                          {weapons.map((el) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                      </div>
                      <div className='item__equipement__list'>
                        <h3>armures</h3>
                        <ul>
                          {armors.map((el) => (
                            <li>{el}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  :
                  <div>

                  </div>
                }
                <div className="item__description">
                  <cite>{data.description}</cite>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
