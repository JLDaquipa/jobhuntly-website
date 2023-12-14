import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css';
import MainLayout from './components/layouts/MainLayout';
import Home from './pages/Home';
import FindJob from './pages/FindJob';
import BrowseCompanies from './pages/BrowseCompanies';
import JobDetails from './pages/JobDetails';
import CompanyDetails from './pages/companyDetails';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='/jobs' element={<FindJob />} />
    <Route path='/jobs/1' element={<JobDetails />} />
    <Route path='/companies' element={<BrowseCompanies />} />
    <Route path='/companies/1' element={<CompanyDetails />}/>
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
