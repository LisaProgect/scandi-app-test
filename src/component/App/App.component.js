import React, { PureComponent } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import client from '../../service-worker';
import store from '../../store';

import Router from '../Router';

export default class App extends PureComponent {
  state = {
    isSomethingWentWrong: false,
    errorDetails: {},
  };

  contextProviders = [this.renderApollo.bind(this), this.renderRedux.bind(this)];

  componentDidCatch(error, info) {
    this.setState({
      isSomethingWentWrong: true,
      errorDetails: {
        error,
        info,
      },
    });
  }

  renderApollo(children) {
    return (
      <ApolloProvider client={client} key="apollo">
        {children}
      </ApolloProvider>
    );
  }

  renderRedux(children) {
    return (
      <Provider store={store} key="redux">
        {children}
      </Provider>
    );
  }

  renderSomethingWentWrong = () => {
    const { errorDetails } = this.state;

    return <p>{errorDetails.error}</p>;
  };

  renderRootComponents = () => <Router key="route" />;

  renderContextProviders() {
    const { isSomethingWentWrong } = this.state;

    const child = isSomethingWentWrong
      ? this.renderSomethingWentWrong
      : this.renderRootComponents;

    return this.contextProviders.reduce((acc, render) => render(acc), [child()]);
  }

  render() {
    return this.renderContextProviders();
  }
}
