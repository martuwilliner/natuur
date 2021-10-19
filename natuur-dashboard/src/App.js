import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import {UserIdProvider} from './context/UserIdContext';
import {ProductIdProvider} from './context/ProductIdContext';
import {ProductProvider} from './context/ProductContext';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <UserIdProvider>
              <ProductIdProvider>
              <Sidebar/>
              <Content/>
              </ProductIdProvider>
              </UserIdProvider>
          </ProductProvider>
        </UserProvider>
    </BrowserRouter>
  );
}

export default App;
