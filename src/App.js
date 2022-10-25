import { RouterProvider } from 'react-router-dom';
import './App.css';
// import Header from './components/header/Header';
import { routes } from './routes/Routes';

function App() {
  return (
    <div>
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
