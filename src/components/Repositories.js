import React from 'react'
import { useState, useEffect } from 'react';
import BASE_URL from '../utils/constants';

const Repositories = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(BASE_URL)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
              console.log(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className="results">
            {items.map(item => (
              <div key={item.id} className="card box-shadow">
                <a className="item-title"href={item.html_url}>{item.name}</a> 
                <p className= "item-proglang">{item.language}</p>
                <p className= "item-proglang">{item.created_at}toDateString();</p>
              </div>
            ))}
          </div>
        );
      }
    }

export default Repositories
