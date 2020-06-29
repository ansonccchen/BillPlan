import React, {useState, createContext, useEffect} from 'react'

const BillContext = createContext()

const BillProvider = ({children}) => {
    const [bills, setBills] = useState([])
    const [costInterval, setCostInterval] = useState('Monthly')
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        if (localStorage.getItem("bills"))
            setBills(JSON.parse(localStorage.getItem("bills")))
         else 
            setBills([])
    }, [setBills])
    
    const alphaSort = bills => {
        return (
            bills.sort((a,b) => {
                return (
                    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                )
            })
        )
    }

    const updateCostInterval = interval => { setCostInterval(interval) }
    const updateEditMode = enabled => { setEditMode(enabled) }

    const updateBills = bill => {
        const updatedBills = alphaSort([
            ...bills,
            bill
        ])
        localStorage.setItem("bills", JSON.stringify(updatedBills))
        setBills(updatedBills)
    }
    const editBill = billToUpdate => {
        const filteredBills = bills.filter(bill => {
            return (bill.title !== billToUpdate.title)
        })
        const updatedBills = alphaSort([
            ...filteredBills,
            billToUpdate
        ])
        localStorage.setItem("bills", JSON.stringify(updatedBills))
        setBills(updatedBills)
    }
    const deleteBill = billToDelete => {
        const filteredBills = bills.filter(bill => {
            return (bill.title !== billToDelete.title)
        })
        localStorage.setItem("bills", JSON.stringify(filteredBills))
        setBills(filteredBills)
    }

    return (
        <BillContext.Provider value={{
            bills,
            updateBills,
            costInterval,
            updateCostInterval,
            editBill,
            editMode,
            updateEditMode,
            deleteBill
        }}>
            {children}
        </BillContext.Provider>
    )
}

export {
    BillContext,
    BillProvider
}