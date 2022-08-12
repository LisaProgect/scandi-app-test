import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './component/Navbar';
import ErrorBoundry from './component/ErrorBoundry';
import ProductListingPage from './route/ProductListingPage';
import ProductDescriptionPage from './route/ProductDescriptionPage';

function App() {
  return (
    <ErrorBoundry>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListingPage />}>
            <Route path="product" element={<ProductDescriptionPage />} />
          </Route>
        </Routes>
      </Router>
    </ErrorBoundry>
  );
}

export default App;
