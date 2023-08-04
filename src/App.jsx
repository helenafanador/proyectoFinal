import './App.css'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Purchases from './pages/purchases'
import ProductDetail from './pages/ProductDetail'
import AppNav from './assets/components/AppNav'
import { Container } from 'react-bootstrap'
import Loader from './assets/components/Loader'
import IsLoading from './store/slice/isLoading'
import { useSelector } from 'react-redux/es/hooks/useSelector'


function App() {
 const isLoading = useSelector(state => state.isLoading)

  return (
    <>
    <HashRouter>
      <AppNav/>
      
      <Container>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login' element={<Login />}/>  
      <Route path='purchases' element={<Purchases />}/>  
      <Route path='/products/:id' element={<ProductDetail />}/>  
       </Routes> 
       </Container>
      { isLoading && <Loader/> } 
      
    </HashRouter>
     
    </>
  )
}

export default App
