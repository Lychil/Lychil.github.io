import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import App from './App.tsx';
import { HTML5Backend } from 'react-dnd-html5-backend';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </StrictMode>,
)
