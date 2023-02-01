import React from 'react'
import "./menu.scss"

const Menu = (props) => {
  return (
    <div className='menuModal'>
        <div className='menuInfo'>
        <h1>MENU</h1>
        <div onClick={props.menuClickHandler}>CONTINUE GAME</div>
        <div onClick={props.restart}>RESTART</div>
        <div onClick={props.quit}>QUIT GAME</div>
        </div>
    </div>
  )
}

export default Menu