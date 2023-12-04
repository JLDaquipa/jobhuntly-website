import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';
import FindJob from './pages/FindJob';
import BrowseCompanies from './pages/BrowseCompanies';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='/find' element={<FindJob />} />
    <Route path='/browse' element={<BrowseCompanies />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
