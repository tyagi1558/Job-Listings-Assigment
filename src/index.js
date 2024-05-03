import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';

const root = document.getElementById('root');

const renderApp = () => {
  ReactDOM.unstable_createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

if (ReactDOM.unstable_createRoot) {
  renderApp();
} else {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
}
