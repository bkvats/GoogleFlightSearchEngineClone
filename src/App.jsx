import React from "react";
import DummyComp from "./components/DummyComp";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { setDummyCompVisibility } from "./store/dummyCompSlice";
export default function App() {
  const dispatch = useDispatch();
  return (
    <>
      <Header />
      <DummyComp />
    </>
  );
}