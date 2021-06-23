// import React from 'react'

const Repository = ({item}) => {
    return (
        <div key={item.id} className="card box-shadow">
        <a className="item-title"href={item.html_url}>{item.name}</a> 
        <div className="item-details">
        <p className= "item-programlang">{item.language}</p>
        <p className= "item-forks"> {item.forks_count} forks</p>
        </div>
        
      </div>
    )
}

export default Repository
