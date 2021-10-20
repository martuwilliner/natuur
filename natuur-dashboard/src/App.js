import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import {UserIdProvider} from './context/UserIdContext';
import {ProductIdProvider} from './context/ProductIdContext';
import {ProductProvider} from './context/ProductContext';
import {CategoryProvider} from './context/CategoryContext';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <UserIdProvider>
              <ProductIdProvider>
                <CategoryProvider>
                  <Sidebar/>
                  <Content/>
                </CategoryProvider>
              </ProductIdProvider>
              </UserIdProvider>
          </ProductProvider>
        </UserProvider>
    </BrowserRouter>
  );
}

export default App;
