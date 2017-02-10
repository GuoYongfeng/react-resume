import React, { Component } from 'react'
import { Menu, Button, Icon } from 'antd'
import { Link } from 'react-router'

const FlipNav = ( props ) => {
  let { num, routerArray, handleClick } = props
  console.log( props );

  return (
    <div className="layout-flip">
        <div className="back" onClick={handleClick}>
            <Link to={num > 0 ? routerArray[num - 1] : routerArray[num]}>
                <Button type="primary">
                    <Icon type="left" />
                </Button>
            </Link>
        </div>
        <div className="next" onClick={handleClick}>
            <Link to={num < 4 ? routerArray[num + 1] : routerArray[num]}>
                <Button type="primary">
                    <Icon type="right" />
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default FlipNav
