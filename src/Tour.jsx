import React, { useState } from 'react'

const Tour = ({id, name, info, image, price, removeTour }) => {
    const[readmore,setReadmore]=useState(false)
    console.log(info.substring(0,10))
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">{price}rs</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{readmore?info : `${info.substring(0,100)}....`} <button className="info-btn" type="button" onClick={()=>setReadmore(!readmore)}>{readmore?'show less':'Read more'}</button>  </p>
        <button
          className="btn btn-block delete-btn"
          type="button"
          onClick={() => removeTour(id)}
        >not interested</button>
      </div>
    </article>
  )
}

export default Tour
