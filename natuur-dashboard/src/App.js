import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {UserProvider} from './context/UserContext';
import {ProductProvider} from './context/ProductContext';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <Sidebar/>
            <Content/>
          </ProductProvider>
        </UserProvider>
    </BrowserRouter>
  );
}

export default App;
