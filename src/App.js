
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import {Routes, Route} from 'react-router-dom';
import Auth from './routes/auth/auth';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';


const App = () => {
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
