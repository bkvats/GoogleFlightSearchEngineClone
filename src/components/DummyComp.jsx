import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDummyCompVisibility } from "../store/dummyCompSlice";
export default function DummyComp() {
    const {isDummyCompVisible} = useSelector(state => state.dummyComp);
    const dispatch = useDispatch();
    const [showBox, setShowBox] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            if (isDummyCompVisible) setShowBox(true);
        }, 50);
    }, [isDummyCompVisible]);
    return (
        <div className={`fixed top-0 w-full min-h-screen bg-black/50 ${isDummyCompVisible ? "flex" : "hidden"} justify-center items-center`}>
            <div className={`w-xl h-2xl bg-white dark:bg-black shadow-2xl shadow-black rounded-sm p-4 flex flex-col items-center mx-3 ${showBox ? "scale-100" : "scale-0"} transition-all duration-300`}>
                <p className="text-2xl text-center dark:text-white">
                    This is just a <span className="underline">Dummy Component!</span>
                </p>
                <button className="text-lg bg-blue-400 text-white py-2 px-4 rounded-sm mt-6 hover:bg-blue-500 cursor-pointer" onClick={() => {
                    setShowBox(false);
                    setTimeout(() => {dispatch(setDummyCompVisibility(false))}, 300);
                }}>Close</button>
            </div>
        </div>
    );
}