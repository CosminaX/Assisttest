import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './homes.css';


const Home = () => {
    const[cards,setCards] = useState([])

    useEffect(()=>{
        axios.get('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed')
        .then(res => {
            console.log(res)
            setCards(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    }, [])
  return (
      
    <div>
      <ul className='cardurihome'>
          {
              cards.map(card =>(
                  <div key={card.id} className="carduri">
                  <h3 > {card.title.rendered} </h3>
                  <img src={card.jetpack_featured_media_url} alt="s" className="pozecard"/>
                  <p>{card.excerpt.rendered}</p>
                  <p>{card.date}</p>
                  <button className='butoncard'>Delete</button>
                  <button className='butoncard'>Edit</button>
                  </div>
              ))
          }
      </ul>
    </div>
  )
}

export default Home