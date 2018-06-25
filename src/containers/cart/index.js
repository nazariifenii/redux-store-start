import React, {Component} from 'react';
import {connect} from 'react-redux';
import './cart.css';
import { removeFromCart } from '../../actions/cart.actions';

export class Cart extends Component {
  constructor(props) {
    super(props);

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  renderCart() {
    return this.props.inCart.map((i, index) => (
      <div className="cart_list_item" key={index}>
        <p>{i.name}</p>
        <button className="remove-from-cart-btn" onClick={() => this.removeFromCart(index)}>Remove</button>
      </div>
    ));
  }

  removeFromCart(id) {
    this.props.removeFromCart(id);
  } 

  render() {
    return (<div className="App-cart">
      {this.renderCart()}
    </div>);
  }
}

const mapStateToProps = state => ({...state});
const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id))
 });

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
