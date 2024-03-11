import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import Paper from '@mui/material/Paper'; 
 import {TbWorldUpload} from 'react-icons/tb'
import Swal from 'sweetalert2';
import OrganizationLedgerForm from './OrganizationLedgerForm'
const OrganizationLedger = () => {
  return (
    <div>
         <Sidebar/>
           <div style={{width:'82.5%',float:'right'}} >
        <Header/>

        <div className='p-4' >
          <Paper elevation={2} className="pb-5" style={{backgroundColor:'rgb(229 229 229)'}}>
            <h3 className='p-3'><TbWorldUpload size={45} className='pe-2' />Organization Ledger</h3>
          
          <div className='container'>
            <OrganizationLedgerForm/>
          </div>
        </Paper>
</div>
      </div>
    </div>
  )
}

export default OrganizationLedger