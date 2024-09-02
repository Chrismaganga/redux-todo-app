import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer, middleware);
import './index.css'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
)