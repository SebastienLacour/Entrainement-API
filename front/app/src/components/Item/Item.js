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

  const equipement = data.equipement

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
                      <thead>
                        <tr>
                          <th>niveau</th>
                          <th>vigueur</th>
                          <th>esprit</th>
                          <th>endurance</th>
                          <th>force</th>
                          <th>dextérité</th>
                          <th>intelligence</th>
                          <th>foi</th>
                          <th>ésotérisme</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{data.stats.niveau}</td>
                          <td>{data.stats.vigeur}</td>
                          <td>{data.stats.esprit}</td>
                          <td>{data.stats.endurance}</td>
                          <td>{data.stats.force}</td>
                          <td>{data.stats.dextérité}</td>
                          <td>{data.stats.intelligence}</td>
                          <td>{data.stats.foi}</td>
                          <td>{data.stats.ésotérisme}</td>
                        </tr>
                      </tbody>
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
                          {/* {weapons.map((el) => (
                            <li>{el}</li>
                          ))} */}
                        </ul>
                      </div>
                      <div className='item__equipement__list'>
                        <h3>armures</h3>
                        <ul>
                          {/* {armors.map((el) => (
                            <li>{el}</li>
                          ))} */}
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
