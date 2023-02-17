import './App.css'
import {Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Profile from './components/Profile'

const App = () => (
  <div>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/profile" component={Profile} />
  </div>
)

export default App
