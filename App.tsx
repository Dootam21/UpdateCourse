import React, { Component } from 'react';
import AppNavigator from './src/AppNavigator';
import store from './src/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/SettingMultipleLanguage/i18n';
class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <AppNavigator />
        </I18nextProvider>
      </Provider>
    );
  }
}

export default App;