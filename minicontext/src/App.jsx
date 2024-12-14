import './App.css'
import Profile from './components/Profile'
import LogIn from './components/LogIn'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>Chai with Context API</h1>
      <LogIn />
      <Profile />
    </UserContextProvider>
  )
}

export default App
