import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {createBrowserRouter,createRoutesFromElements, RouterProvider,Route} from 'react-router-dom';
import Cart from './Components/Cart';
import RouteLayout from './Components/RouteLayout';
import Dashboard from './Components/Dashboard';

function App() {
 
 const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<RouteLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Route>
  ))


  return (
    <div className="App">
    <RouterProvider router={router}/>
    
    </div>
  );
}

export default App;
