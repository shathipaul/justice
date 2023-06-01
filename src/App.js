import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/Router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
