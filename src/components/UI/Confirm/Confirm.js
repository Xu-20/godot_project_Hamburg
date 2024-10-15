import React from 'react'
import classes from './Confirm.module.css'
import Backdrop from '../Backdrop/Backdrop'

const Confirm = (props) => {
  return (
    <Backdrop onClick={props.onCancel} className={classes.ConfirmOuter}>
      <div onClick={e => e.stopPropagation()} className={classes.Confirm}>
        <p className={classes.ConfirmText}>确认清空购物车吗？</p>
        <div>
          <button onClick={(e) => { props.onCancel(e) }} className={classes.Cancel}>取消</button>
          <button onClick={(e) => { props.onOk(e) }} className={classes.Ok}>确认</button>
        </div>
      </div>
    </Backdrop>
  )
}

export default Confirm