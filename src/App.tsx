import './index.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ padding: '1rem', backgroundColor: 'var(--color-deep-eggplant-violet)', color: 'var(--color-pastel-orchid-pink)' }}>
        <h1>FlowForge</h1>
      </header>
      <main style={{ flex: 1, padding: '2rem' }}>
        <p>Visual workflow canvas</p>
      </main>
      <footer style={{ padding: '1rem', backgroundColor: 'var(--color-deep-burgundy)' }}>
        <p>Footer</p>
      </footer>
    </div>
  );
}
export default App;
