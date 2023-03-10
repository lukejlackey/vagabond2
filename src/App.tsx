import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";

import Header from './components/Header';
import Body from './components/Body';

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}
