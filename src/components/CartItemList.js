import React, { Component } from 'react';
import { Box } from 'grommet';
import { connect } from 'react-redux';
import CartItem from './CartItem';

class CartItemList extends Component {
  render() {
    const { cartItems } = this.props
    console.log(cartItems)
    return (
      <Box
        pad="small"
        direction="row"
        fill
        wrap
        overflow="auto"
      >
        {
          cartItems.map((product) => (
            <CartItem {...product} />
          ))
        }
      </Box>
    )
  }
}
const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
  }
}
export default connect(mapStateToProps)(CartItemList)