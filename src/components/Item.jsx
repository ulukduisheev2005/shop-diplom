/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className="item">
        
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}сом</b>
        <div className="add-to-cart" onClick={() => this.props.onAdd(this.props.item)}> <button>В корзину</button> </div>
      </div>
    )
  }
}

export default Item