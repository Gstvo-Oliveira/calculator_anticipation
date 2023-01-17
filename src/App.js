import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import MainPage from "./pages/mainPage";

function App() {
  return (
    <>
    
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainPage />
    </>
  );
}

export default App;
