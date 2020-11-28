import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Fillings from "./components/Fillings";
import Order from "./components/Order";
import Modal from "./components/Modal";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  const [sandwich, setSandWich] = useState({ base: "", fillings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setSandWich({ ...sandwich, base });
  };

  const addFillings = (filling) => {
    let newFillings;
    if (!sandwich.fillings.includes(filling)) {
      newFillings = [...sandwich.fillings, filling];
    } else {
      newFillings = sandwich.fillings.filter((item) => item !== filling);
    }
    setSandWich({ ...sandwich, fillings: newFillings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} sandwich={sandwich} />
          </Route>
          <Route path="/fillings">
            <Fillings addFillings={addFillings} sandwich={sandwich} />
          </Route>
          <Route path="/order">
            <Order sandwich={sandwich} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
