import React from 'react'
import './PortfolioList.scss'

const PortfolioList = ({ id, title, active, setSelect }) => {

    return (
        <li className={active ? "PortfolioList active" : "PortfolioList"}
            onClick={() => setSelect(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
