import React, {useContext} from 'react'
import "./styles.css"
import { BillContext } from '../../Context/BillContext'

const BillList = () => {
    const { bills, editBill, updateEditMode } = useContext(BillContext)

    return (
        <div className="bill-list-container">
            <h6 className="edit-mode-btn" onClick={() => updateEditMode(true)}>Edit</h6>
            { bills.map((bill, index) => {
                const {title, cost, enabled} = bill
                return (
                    <div key={index} className="bill-list-row">
                        <input 
                            type="checkbox"
                            className="form-check-input"
                            checked={enabled}
                            onChange={() => {
                                return(
                                    editBill({
                                        title: title,
                                        cost: cost,
                                        enabled: !enabled
                                    })
                                )}
                            }
                            />
                        <div className="bill-list-row-content">{title} - ${cost}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default BillList