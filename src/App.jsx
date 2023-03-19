import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./pages/Home";
import CategoryPage from "./pages/Category";
import Favorite from "./pages/Favorite";
import Cart from './pages/Cart';



function App() {
  return (
   <>
     <Router>
       <Routes>
        <Route path='/'element={<Home />} />
        <Route path="/category/:type" element={<CategoryPage/>}/>
        <Route path="/favorite" element={<Favorite />}/>
        <Route path='/cart' element={<Cart />} />
       </Routes>
     </Router>
   </>
  );
}

export default App;
