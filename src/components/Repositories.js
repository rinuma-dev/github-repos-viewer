import React from 'react'
import { useState, useEffect } from 'react';
import{ BASE_URL,USERNAME} from '../utils/constants';
import Repository from './Repository';

const Repositories = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${BASE_URL}${USERNAME}/repos`)
          .then(response => response.json())
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
          {items.map((item)=>(
           <Repository key = {item.id} item = {item}/>))}
           </div>
        )
        
    }

}
export default Repositories
