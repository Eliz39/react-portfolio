import './App.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './theme'
import TimelineList from './TimelineList'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className='timeline-content'>
        <h1 className='timeline-content__title'>JavaScript history</h1>
        <TimelineList />
      </div>
    </ThemeProvider>
  )
}

export default App
