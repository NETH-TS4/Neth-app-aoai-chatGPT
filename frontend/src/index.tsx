import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Route, Routes, BrowserRouter } from 'react-router-dom'
import { initializeIcons } from '@fluentui/react'

import Chat from './pages/chat/Chat'
import Layout from './pages/layout/Layout'
import Mainpage from './pages/mainpage/Mainpage'
import NoPage from './pages/NoPage'
import { AppStateProvider } from './state/AppProvider'

import './index.css'


initializeIcons()

export default function App() {
  return (
    <AppStateProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Mainpage />} /> {/* Main page */}
            <Route path="chat" element={<Chat />} /> {/* Chat page */}
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppStateProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
