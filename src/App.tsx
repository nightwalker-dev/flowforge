import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Workspace } from './pages/Workspace';
import './index.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Workspace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
