
import { Route, Routes,} from 'react-router'

import { ProductPage } from './pages/product/ProductPage'
import { HomePage } from './pages/home/HomePage'


function App() {
 

  return (
  <>
 <Routes>
   <Route path="/" element={<HomePage />} />
    <Route path="/trang-chu/san-pham" element={<HomePage />} />
   <Route path="/danh-muc-san-pham/:label" element={<ProductPage />} />
  </Routes>
     
    
    </>
  )
}

export default App
