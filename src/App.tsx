import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { TeamCheckLayout } from './components/layout/TeamCheckLayout'
import { HomePage } from './components/pages/HomePage'
import { ServicePage, ServicesOverview } from './components/pages/ServicePage'
import { MethodenPage } from './components/pages/MethodenPage'
import { FallbeispielePage } from './components/pages/FallbeispielePage'
import { UeberMichPage } from './components/pages/UeberMichPage'
import { KontaktPage } from './components/pages/KontaktPage'
import { TeamCheckPage } from './components/pages/TeamCheckPage'
import { ImpressumPage, DatenschutzPage } from './components/pages/LegalPages'
import { NotFoundPage } from './components/pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/leistungen" element={<ServicesOverview />} />
          <Route path="/leistungen/:slug" element={<ServicePage />} />
          <Route path="/methoden" element={<MethodenPage />} />
          <Route path="/fallbeispiele" element={<FallbeispielePage />} />
          <Route path="/ueber-mich" element={<UeberMichPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route element={<TeamCheckLayout />}>
          <Route path="/team-check" element={<TeamCheckPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
