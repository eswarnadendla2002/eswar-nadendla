import React, { useEffect, lazy, Suspense } from "react";
import Aos from "aos";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Routing } from "./components/Routes/routes";


const Designs = lazy(() => import("./components/Designs/designs"));

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Routes>
        {Routing.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {item.component === Designs ? (
                  <Designs />
                ) : (
                  <item.component />
                )}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
