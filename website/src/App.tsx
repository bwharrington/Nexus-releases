import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteHeader } from './components/SiteHeader'
import { HomePage } from './pages/HomePage'
import { HelpIndexPage } from './pages/HelpIndexPage'
import { HelpDocPage } from './pages/HelpDocPage'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className="page-shell">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/help" element={<HelpIndexPage />} />
          <Route path="/help/:slug" element={<HelpDocPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <footer className="site-footer">
          <div className="container">
            <span>Nexus — document editor</span>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
