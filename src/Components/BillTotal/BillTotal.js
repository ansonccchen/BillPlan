import React, {useContext} from 'react'
import "./styles.css"
import { BillContext } from '../../Context/BillContext'



const BillTotal = () => {
    const { bills, costInterval } = useContext(BillContext)

    const intervalChange = (bill) => {
        if (costInterval === "Daily") 
            return (bill * 12/ 365).toFixed(2)
        else if (costInterval === "Monthly") 
            return bill.toFixed(2)
        else 
            return (bill * 12).toFixed(2)
    }

    let total = intervalChange(bills.reduce((acc, val) => {
        if (val.enabled) 
            return (Number.parseFloat(val.cost) + acc)
        else
            return acc
        }, 0))
    let savings = intervalChange(bills.reduce((acc,val) => {
        if (!val.enabled)
            return (Number.parseFloat(val.cost) + acc)
        else 
            return acc
    }, 0))

    return (
        <div>
            <div className="bill-total-container">
                {costInterval} Spendings: 
                <span className="total-cost">{total}</span>
            </div>
            <div className="total-saved-container">
                {costInterval} Savings: 
                <span className="total-saved">{savings}</span>
            </div>
        </div>
    )

}

export default BillTotal