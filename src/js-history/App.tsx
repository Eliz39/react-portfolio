import './App.css'
import { Buttons } from '../buttons/Buttons'
import { Link, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { TimelineList } from './TimelineList'
import { URLS } from '../urls'
import { defaultTheme } from './theme'

function App() {
  return (
    <Routes>
      <Route
        path={URLS.jsHistory}
        element={
          <ThemeProvider theme={defaultTheme}>
            <div className='timeline-content'>
              <h1 className='timeline-content__title'>JavaScript history</h1>
              <TimelineList />
            </div>
          </ThemeProvider>
        }
      />
      <Route path={URLS.btns} element={<Buttons />} />
    </Routes>
  )
}

export default App
