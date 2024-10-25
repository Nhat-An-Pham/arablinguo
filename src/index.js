import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './container/Layout';
import './scss/index.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer stacked />
      <Layout />
  </React.StrictMode>
);

