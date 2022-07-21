import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux";
import Layout from "./components/Layuot";
import {BrowserRouter} from "react-router-dom";
import "./style/style.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      <Provider store={store}>
          <Layout>
              <App />
          </Layout>
      </Provider>
  </BrowserRouter>
  </React.StrictMode>
);

