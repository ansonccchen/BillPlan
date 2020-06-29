import React, {useContext} from 'react'
import "./styles.css"
import { BillContext } from '../../Context/BillContext'

const EditBills = () => {

    const { bills, editBill, deleteBill, updateEditMode} = useContext(BillContext)


    const numberCheck = () => {
        let invalidNumber = bills.reduce((acc, val) => {
            if (val.cost === "") {
                acc = false
            } 
            return acc
        }, true)
        return invalidNumber
    }


    return (
        <div>
            <h6 className="edit-mode-done-btn" onClick={() => numberCheck() ? updateEditMode(false) : ""}>Done</h6>
            <div className={ numberCheck() ? 'hidden' : 'error-msg'}>Please enter a valid dollar amount</div>
            <div>
                { bills.map((bill, index) => {
                    const {title, cost, enabled} = bill
                    return (
                        <div key={index} className="edit-bill-row">
                            <div className="edit-bill-title">{title}</div>
                            <input 
                                type="number" 
                                className="edit-bill-cost-input" 
                                value={cost}
                                onChange={event => editBill({ title: title, cost: event.target.value, enabled: enabled})}
                            />
                            <h6 className="delete-button" onClick={() => deleteBill(bill) }>Delete</h6>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


export default EditBills