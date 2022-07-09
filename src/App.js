import { Toast } from "bootstrap";
import { useContext, useEffect, useRef } from "react";

import { ErrorContext } from "./contexts/ErrorContext";

import Router from "./route/Router";

function App() {
  // const [error, setError] = useContext(ErrorContext);
  // const toastEl = useRef();
  // useEffect(() => {
  //   if (error) {
  //     const toast = new Toast(toastEl.current);
  //     toast.show();
  //     setTimeout(() => setError(null), 6000);
  //   }
  // }, [error]);

  return (
    <>
      <div className="bg-secondary ">
        {/* <div className="toast-body">{error}</div> */}
        <Router />
      </div>
    </>
  );
}

export default App;
