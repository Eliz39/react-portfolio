import { Counter } from './pages/counterApp/Counter'
import { HackerTyper } from './pages/HackerTyper/HackerTyper'
import { JsHistory } from './pages/jsHistory/TimelineList'
import { MortageCalculator } from './pages/mortageCalculator/mortageCalculator'
import { Route, Routes } from 'react-router-dom'
import { Template } from './components/Template'
import { ThemeProvider } from 'styled-components'
import { TodoApp } from './pages/TodoApp/TodoList'
import { URLS } from './utils/urls'
import { Welcome } from './pages/WelcomePage/Welcome'
import { defaultTheme } from './styles/theme'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Routes>
        <Route path={URLS.template} element={<Template />}>
          <Route path={URLS.welcome} element={<Welcome />} />
          <Route path={URLS.jsHistory} element={<JsHistory />} />
          <Route path={URLS.counter} element={<Counter />} />
          <Route path={URLS.todo} element={<TodoApp />} />
          <Route path={URLS.hackerTyper} element={<HackerTyper />} />
          <Route path={URLS.mortageCalculator} element={<MortageCalculator />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
