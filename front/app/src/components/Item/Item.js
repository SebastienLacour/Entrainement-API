import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Item.css'

export default function Item(props) {

  const id = useParams('id').id
  console.log(id)

  const url = props.url

  const [data, setData] = useState([])

  const fetchData = () => {
    fetch(url)
    .then( response => response.json())
    .then( result => setData(result))
    .catch( error => console.error(error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(data)

  const item = data.find(el => el._id === id)
  console.log(item)

  return (
    <div>
      <Header/>
      <div className="background">
        <div className="overlay">
          <main className='item__main'>
            <div className="item__container">
              <div className="item__title">
                <h1>{item.name}</h1>
              </div>
              <div className="item__body">
                <div className="item__img">
                  <img src={item.imageUrl} alt={item.name}/>
                </div>
                <div className="item__description">
                  <cite>{item.description}</cite>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
