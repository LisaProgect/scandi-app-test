import { lazy, PureComponent, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';
import SomethingWentWrong from '../../route/SomethingWentWrong';
import Loader from '../Loader';

export const CartPage = lazy(() => import('../../route/CartPage'));
export const ProductPage = lazy(() => import('../../route/ProductDescriptionPage'));
export const ProductListing = lazy(() => import('../../route/ProductListingPage'));

export class Router extends PureComponent {
  state = {
    hasError: false,
    errorDetails: {},
  };

  componentDidCatch(err, info) {
    this.setState({
      hasError: true,
      errorDetails: { err, info },
    });
  }

  handleErrorReset = () => {
    this.setState({ hasError: false });
  };

  renderMainItems() {
    return (
      <Suspense fallback={this.renderFallbackPage()}>
        <Header />
        <Routes>
          <Route path="/cart" element={<CartPage />} />
          <Route path="pd/:id" element={<ProductPage />} />
          <Route path=":title" element={<ProductListing />} />
        </Routes>
      </Suspense>
    );
  }

  renderErrorRouterContent() {
    const { errorDetails } = this.state;

    return (
      <SomethingWentWrong onClick={this.handleErrorReset} errorDetails={errorDetails} />
    );
  }

  renderFallbackPage() {
    return (
      <main style={{ height: '100vh' }}>
        <Loader isLoading size={100} />
      </main>
    );
  }

  renderRouterContent() {
    const { hasError } = this.state;

    if (hasError) {
      return this.renderErrorRouterContent();
    }

    return this.renderMainItems();
  }

  render() {
    return <BrowserRouter>{this.renderRouterContent()}</BrowserRouter>;
  }
}

export default Router;
