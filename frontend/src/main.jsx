
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from  "react-router-dom"
import AuthContext from './components/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContext>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContext>
  
)
