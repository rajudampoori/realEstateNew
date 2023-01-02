import './App.css'
import Login from './components/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BasicInfo from './components/basicinfo'
import Properties from './components/propertydetails'
import GeneralInfo from './components/generalinfo'
import LocationInfo from './components/locationinfo'
import List from './components/list'
import Listings from './components/listings'
import SignUp from './components/SignUp'
function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/list' element={<List />} />

          <Route path='/signup' element={<SignUp />} />

          <Route path='/listings' element={<Listings />} />
          <Route path='/basicinfo' element={<BasicInfo />} />
          <Route path='/basicinfo/propertydetails' element={<Properties />} />
          <Route
            path='/basicinfo/propertydetails/generalinfo'
            element={<GeneralInfo />}
          />
          <Route
            path='/basicinfo/propertydetails/generalinfo/locationinfo'
            element={<LocationInfo />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
