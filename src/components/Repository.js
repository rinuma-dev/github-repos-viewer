// import React from 'react'

const Repository = ({item}) => {
    return (
        <div key={item.id} className="card box-shadow">
        <a className="item-title"href={item.html_url}>{item.name}</a> 
        <p className= "item-proglang">{item.language}</p>
        
      </div>
    )
}

export default Repository
