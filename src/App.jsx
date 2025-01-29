import React from "react";
import DummyComp from "./components/DummyComp";
import { useDispatch } from "react-redux";
import { setDummyCompVisibility } from "./store/dummyCompSlice";
export default function App() {
  const dispatch = useDispatch();
  return (
    <div>
      <DummyComp />
      <button onClick={() => {dispatch(setDummyCompVisibility(true))}}>Show dummy component</button>
    </div>
  );
}