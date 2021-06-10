import { useContext, useEffect, useState } from 'react';
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import InvoicesPendingCollection from "../../components/invoices/InvoicesPendingCollection";
import InvoicesAll from "../../components/invoices/InvoicesAll";
import {AuthContext} from "../../hooks/contexts/AuthContext"

const Invoice = () => {

    const { currentUser, setCurrentUser, setAuth} = useContext(AuthContext);

    return (
        <>
            <Header page="home" />
            <h1>Estado de cuenta del usuario {currentUser.user_name} </h1>
            <h1>Saldo Inicial:  {currentUser.user_initial_balance} </h1>
  
            <InvoicesPendingCollection />
            <InvoicesAll />
            <Footer id="contact" />
  
        </>
    )
}

export default Invoice;