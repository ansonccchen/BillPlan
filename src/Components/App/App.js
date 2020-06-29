import React, { useContext } from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill'
import BillList from '../BillList/BillList'
import BillTotal from '../BillTotal/BillTotal'
import BillOptions from '../BillOptions/BillOptions'
import EditBills from '../EditBills/EditBills'
import Header from '../Header/Header'
import { BillContext } from '../../Context/BillContext';

const App = () => {
  const { editMode } = useContext(BillContext)
  return (
    <div className="bills-container">
      { editMode ? <EditBills /> : <span><Header /><BillOptions /><AddBill /><BillTotal /><BillList /></span> }
    </div>
  );
}

export default App;
