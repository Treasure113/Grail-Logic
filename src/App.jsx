import { useState } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'

import HomePage from '../HomePage/main'
import CompanyPage from '../CompanyPage/main'
import PricingPage from '../PricingPage/main'
import FAQsPage from '../FAQsPage/main'
import ContactPage from '../ContactPage/main'
import PrivacyPolicyPage from '../PricingPage/PrivacyPolicyPage/main'
import TandCPage from '../T&CPage/main'
import Signup from '../AuthPages/SignupPage'
import Login from '../AuthPages/LoginPage'
import ForgotPasswordOne from '../AuthPages/ForgotPasswordFlow/Page1'
import ForgotPasswordTwo from '../AuthPages/ForgotPasswordFlow/Page 2'
import ForgotPasswordThree from '../AuthPages/ForgotPasswordFlow/Page 3'

import Dashboard from '../DashboardPage/Dashboard'
import Trading from '../DashboardPage/TradingPage/Trading'
import TradingAccount from '../DashboardPage/TradingPage/TradingAccount'
import SidebarLayout from '../DashboardPage/Sidebar'

import SupportPage from '../DashboardPage/SupportPage/SupportLayout'
import GettingStarted from '../DashboardPage/SupportPage/GettingStarted'
import AccountAndSecurity from '../DashboardPage/SupportPage/AccountAndSecurity'
import TradingAndSync from '../DashboardPage/SupportPage/TradingAndSync'
import PlatformNavigation from '../DashboardPage/SupportPage/PlatformNavigation'
import TroubleshootingAndSupport from '../DashboardPage/SupportPage/TroubleshootingAndSupport'

import SettingsPage from '../DashboardPage/SettingsPage/SettingsLayout'
import Profile from '../DashboardPage/SettingsPage/Profile'
import Security from '../DashboardPage/SettingsPage/Security'
import Notifications from '../DashboardPage/SettingsPage/Notifications'
import BillingAndSubscription from '../DashboardPage/SettingsPage/BillingAndSubscription'



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

      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/trading-account" element={<TradingAccount />} />

          {/* /Support */}

           <Route path="/support" element={<SupportPage />}>

              <Route
                  index
                  element={<Navigate to="getting-started" replace />}
              />

              <Route
                  path="getting-started"
                  element={<GettingStarted />}
              />

              <Route
                  path="account-and-security"
                  element={<AccountAndSecurity />}
              />

              <Route
                  path="trading-and-sync"
                  element={<TradingAndSync />}
              />

              <Route
                  path="platform-navigation"
                  element={<PlatformNavigation />}
              />

              <Route
                  path="troubleshooting-and-support"
                  element={<TroubleshootingAndSupport />}
              />
          </Route>

          {/* /Settings */}

          <Route path="/settings" element={<SettingsPage />}>

              <Route
                  index
                   element={<Navigate to="my-profile" replace />}
              />

              <Route
                  path="my-profile"
                   element={<Profile />}
              />

              <Route
                  path="security"
                   element={<Security />}
              />

              <Route
                  path="notifications"
                  element={<Notifications />}
              />

              <Route
                  path="billing-and-subscription"
                  element={<BillingAndSubscription />}
              />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
