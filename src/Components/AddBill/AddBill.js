import React, {useContext, useState} from 'react'
import './styles.css'
import { BillContext } from '../../Context/BillContext'

const AddBill = () => {
    const [newBillTitle, setNewBillTitle] = useState('')
    const [newBillCost, setNewBillCost] = useState('')

    const { updateBills } = useContext(BillContext)

    const changeBillTitle = event => {
        setNewBillTitle(event.target.value)
    }
    const changeMonthlyCost = event => {
        setNewBillCost(event.target.value)
    }
    const billObjectValid = () => {
        const titleValid = newBillTitle && newBillTitle.split('').find(char => char !== ' ')
        const costValid = newBillCost && Number.parseFloat(newBillCost)
        return titleValid && costValid
    }
    const clearForm = () => {
        setNewBillTitle('')
        setNewBillCost('')
    }
 
    return (
        <div className="add-bill-container">
            <input 
                className="add-bill-form-control form-control"
                type="text" 
                placeholder="Enter bill title" 
                value={newBillTitle} 
                onChange={changeBillTitle}></input>
            <input
                className="add-bill-form-control form-control"
                type="number"
                placeholder="Enter monthly cost" 
                value={newBillCost} 
                onChange={changeMonthlyCost}></input>
            <button 
                className="add-bill-form-control btn btn-primary"
                onClick = {() => {
                    if (billObjectValid()) {
                        updateBills({
                            title: newBillTitle,
                            cost: newBillCost,
                            enabled: true
                        })
                        clearForm()
                    }
                }}>Add Bill</button>
        </div>
        
    )
}
export default AddBill