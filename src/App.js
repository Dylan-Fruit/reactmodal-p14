import React from "react";
import { Modal } from "./lib/components/Modal";
import UseModal from "./lib/components/UseModal";

function App() {
  const { isShowing, toggle } = UseModal();
  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} />
    </>
  );
}

export default App;
