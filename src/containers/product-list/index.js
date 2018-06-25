import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../../actions/cart.actions';

import './product-list.css';

export class ProductList extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  renderProducts() {
    return this.props.products.map((i, index) => (
      <div className="product_list_item" key={index}>
        <p>{i.name}</p>
        <p>Price: {i.price}</p>
        <p>{i.available > 0 ? 'In stock' : 'Sold out'}</p>
        <button className="add-to-cart-btn" onClick={() => this.addToCart(i)}>Add to card</button>
      </div>
    ));
  }

  addToCart = product => dispatch => {
    dispatch({type: 'ADD_CART_ITEM', product});
}

  render() {
    return (<div className="App-product_list">
      {this.renderProducts()}
    </div>);
  }
}

const mapStateToProps = state => ({...state});
 
export default connect(mapStateToProps, {addToCart})(ProductList);