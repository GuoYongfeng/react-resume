import React from 'react'

const AboutItem = ( props ) => {
    let {message} = props
    let { styleName, title, desc } = message

    return (
      <div>
        <div className="item">
            <div className="item-icon">
                <span className={ styleName }></span>
            </div>
            <div className="item-info">
                <p className="info-title">{ title }</p>
                <p className="info-desc">{ desc }</p>
            </div>
        </div>
      </div>

    )
}

export default AboutItem
