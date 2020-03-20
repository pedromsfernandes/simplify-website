import React from "react"

const ProductCard = props => (
  <>
    <img scr={props.img} alt={props.name}></img>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
  </>
)

export default ProductCard
