import React, {useContext} from 'react'
import { BillContext } from '../../Context/BillContext'
import "./styles.css"

const BillOptions = () => {
    const { costInterval, updateCostInterval } = useContext(BillContext)

    return (
        <div className='interval-option-container'>
            <div 
                className={ costInterval === "Daily" ? 'selected-interval' : 'interval' }
                onClick={event => updateCostInterval(event.target.innerText)}>
                Daily
            </div>
            <div
                className={ costInterval === "Monthly" ? 'selected-interval' : 'interval' }
                onClick={event => updateCostInterval(event.target.innerText)}>
                Monthly
            </div>
            <div
                className={ costInterval === "Yearly" ? 'selected-interval' : 'interval' } 
                onClick={event => updateCostInterval(event.target.innerText)}>
                Yearly
            </div>
        </div>
    )
}

export default BillOptions