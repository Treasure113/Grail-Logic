import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import HomePage from '../HomePage/main'
import CompanyPage from '../CompanyPage/main'
import PricingPage from '../PricingPage/main'
import FAQsPage from '../FAQsPage/main'
import ContactPage from '../ContactPage/main'
import PrivacyPolicyPage from '../PrivacyPolicyPage/main'
import TandCPage from '../T&CPage/main'
import Signup from '../AuthPages/SignupPage'
import Login from '../AuthPages/LoginPage'
import ForgotPasswordOne from '../AuthPages/ForgotPasswordFlow/Page1'
import ForgotPasswordTwo from '../AuthPages/ForgotPasswordFlow/Page 2'
import ForgotPasswordThree from '../AuthPages/ForgotPasswordFlow/Page 3'

function App() {

  return (
    <>
      <Routes>
        <Route path='/home' element={<HomePage />}  />
        <Route path='/company' element={<CompanyPage />}  />
        <Route path='/pricing' element={<PricingPage />}  />
        <Route path='/FAQs' element={<FAQsPage />}  />
        <Route path='/contact-us' element={<ContactPage />}  />
        <Route path='contact-us/privacy-policy' element={<PrivacyPolicyPage />}  />
        <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
        <Route path='/terms-and-condition' element={<TandCPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password?' element={<ForgotPasswordOne />} />
        <Route path='/generate-OTP' element={<ForgotPasswordTwo />} />
        <Route path='/reset-password' element={<ForgotPasswordThree />} />
      </Routes>
    </>
  )
}

export default App;
