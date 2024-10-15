import React, { useState, useContext } from 'react'
import classes from './CartDetails.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/cart-context'
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm'

const CartDetails = () => {
  const ctx = useContext(CartContext)
  //设置state控制确认框的显示
  const [showConfirm, setShowConfirm] = useState(false)
  //添加函数显示确认框
  const showConfirmHandler = () => {
    setShowConfirm(true)
  }

  const CancelHandler = (e) => {
    e.stopPropagation()
    setShowConfirm(false)
  }

  const okHandler = () => {
    //清空购物车
    // ctx.clearCart()
    ctx.cartDispatch({ type: 'CLEAR' })
    setShowConfirm(false)
  }

  return (
    <Backdrop>
      {
        showConfirm && <Confirm onOk={okHandler} onCancel={CancelHandler} />
      }
      <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
        <header className={classes.Header}>
          <h2 className={classes.Title}>餐品详情</h2>
          <div className={classes.Clear}
            onClick={showConfirmHandler}
          >
            <FontAwesomeIcon icon={faTrash} />
            <span>清空购物车</span>
          </div>
        </header>

        <div className={classes.MealList}>
          {
            ctx.items.map(item => <Meal noDesc key={item.id} meal={item} />)
          }
        </div>

      </div>
    </Backdrop>
  )
}

export default CartDetails