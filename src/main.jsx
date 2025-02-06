import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './context/index.jsx'
import { initialState, reducer } from './context/reducer.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextProvider reducer={reducer} initialState={initialState}>
            <App />
        </ContextProvider>
    </BrowserRouter>
)
