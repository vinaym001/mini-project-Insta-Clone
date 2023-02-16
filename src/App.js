import './App.css'
import {Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

const App = () => (
  <div>
    <Route path="/login" component={Login} />
    <Route path="/" component={Home} />
    <Route path="/profile" component={Profile} />
  </div>
)

export default App
