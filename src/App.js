
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import {Routes, Route} from 'react-router-dom';
import Auth from './routes/auth/auth';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';

import { useEffect } from 'react';

import { setUsers } from "./utils/firebase";
import { setCurrentUser } from './store/user/user.action';

import { useDispatch } from 'react-redux';

import {fetchProductsStart} from './store/products/products.action';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    setUsers().then(userAuth => {
      dispatch(setCurrentUser(userAuth));
    }) 
},[]);

useEffect(() => {
  dispatch(fetchProductsStart())
 },[])



  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/auth' element={<Auth/>} />
          <Route path='/shop/*' element={<Shop/>} />
          <Route path='/checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
