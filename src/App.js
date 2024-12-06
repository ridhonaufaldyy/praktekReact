// import logo from './logo.svg';
import { renderIntoDocument } from "react-dom/test-utils";
import "./App.css";
import ProductList from "./components/productList";
// import { useState } from "react";

function App() {
  return (
    <>
    <h1 className="app-title">Penjualan Mobil</h1>
    <ProductList/>
    </>
  );
}

export default App;
