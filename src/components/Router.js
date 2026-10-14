import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";

export default class Router extends Component {
  render() {
    function HomeElement() {
      let { oficio } = useParams();
      return <Home oficio={oficio} />;
    }
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home/:oficio" element={<HomeElement />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
