import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext); // Get cart from context
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const history = useHistory();

  // Handle form change for shipping
  const handleShippingChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form change for payment
  const handlePaymentChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  // Calculate the total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle Order Submission
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      cart,
      shippingInfo,
      paymentInfo,
      total: getTotalPrice(),
    };

    try {
      const response = await axios.post('/api/checkout', orderData); // Send order to backend
      alert('Order placed successfully!');
      setCart([]); // Clear the cart after order submission
      history.push('/order-confirmation'); // Redirect to order confirmation page
    } catch (error) {
      console.error('Error placing order', error);
      alert('There was an issue processing your order. Please try again.');
    }
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Cart Summary</h3>
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <p>{item.name} (x{item.quantity})</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        ))}
        <h4>Total: ${getTotalPrice().toFixed(2)}</h4>
      </div>

      {/* Shipping Info */}
      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <form onSubmit={handleOrderSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={shippingInfo.name}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shippingInfo.address}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={shippingInfo.city}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP Code"
            value={shippingInfo.zipCode}
            onChange={handleShippingChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={shippingInfo.country}
            onChange={handleShippingChange}
            required
          />

          {/* Payment Info */}
          <h3>Payment Information</h3>
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentInfo.cardNumber}
            onChange={handlePaymentChange}
            required
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            value={paymentInfo.expiryDate}
            onChange={handlePaymentChange}
            required
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={paymentInfo.cvv}
            onChange={handlePaymentChange}
            required
          />

          {/* Submit Order */}
          <button type="submit">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
