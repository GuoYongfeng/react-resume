import React from 'react'

const AboutItem = ( props ) => {
    let { styleName, title, desc } = props.message

    return (
        <div className="item">
            <div className="item-icon">
                <i className={ styleName }></i>
            </div>
            <div className="item-info">
                <p className="info-title">{ title }</p>
                <p className="info-desc">{ desc }</p>
            </div>
        </div>
    )
}

export default AboutItem
