import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import { Workspace } from './pages/Workspace';
import { WorkflowCanvas } from './pages/WorkflowCanvas';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Workspace />} />
          <Route path="workspace/:id/canvas" element={<WorkflowCanvas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
