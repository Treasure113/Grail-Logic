import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage/main'
import CompanyPage from '../CompanyPage/main'
import PricingPage from '../PricingPage/main'
import FAQsPage from '../FAQsPage/main'
import ContactPage from '../ContactPage/main'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage />}  />
        <Route path='/company' element={<CompanyPage />}  />
        <Route path='/pricing' element={<PricingPage />}  />
        <Route path='/FAQs' element={<FAQsPage />}  />
        <Route path='/contact-us' element={<ContactPage />}  />
      </Routes>
    </>
  )
}

export default App;
