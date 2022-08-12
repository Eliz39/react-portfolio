import { Counter } from './counterApp/Counter'
import { JsHistory } from './js-history/TimelineList'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { Template } from './Template/Template'
import { ThemeProvider } from 'styled-components'
import { URLS } from '../urls'
import { Welcome } from './WelcomePage/Welcome'
import { defaultTheme } from '../styles/theme'
import GlobalStyle from '../styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path={'/'} element={<Template />}>
          <Route path={URLS.welcome} element={<Welcome />} />
          <Route path={URLS.jsHistory} element={<JsHistory />} />
          <Route path={URLS.btns} element={<Counter />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
