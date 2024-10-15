import React, { useState, useContext, useEffect } from 'react'
import iconImg from '../../asset/bag.png'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartDetails from './CartDetails/CartDetails'
import Checkout from './Checkout/Checkout'


const Cart = () => {
  const ctx = useContext(CartContext)
  //添加一个state，用来控制是否显示购物车详情
  const [showDetails, setShowDetails] = useState(false);
  //添加一个state，用来控制是否显示结算按钮
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      setShowCheckout(false);
    }
  }, [ctx]);
  // 添加一个显示详情页的函数
  const toggleDetailsHandler = () => {
    if (ctx.totalAmount === 0) {
      setShowDetails(false);
      return;
    };
    setShowDetails(prevState => !prevState);
  }
  //添加一个显示结算页的函数
  const showCheckoutHandler = () => {
    if (ctx.totalAmount === 0) return
    setShowCheckout(true);
  };
  //添加一个隐藏结算页的函数
  const hideCheckoutHandler = () => {
    setShowCheckout(false);
  }

  return (
    <div className={classes.Cart} onClick={toggleDetailsHandler}>
      {showCheckout && <Checkout onHide={hideCheckoutHandler} />}
      {/* 购物车详情页 */}
      {/* <CartDetails /> */}
      {showDetails && <CartDetails onHide={toggleDetailsHandler} />}
      <div className={classes.Icon}>
        <img src={iconImg} />
        {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
      </div>
      {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}
      <button onClick={showCheckoutHandler}
        className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
    </div>
  )
}

export default Cart