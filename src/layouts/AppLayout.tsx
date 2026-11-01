import { Outlet, Link } from 'react-router-dom';


export function AppLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ padding: '1rem 2rem', backgroundColor: 'var(--bg-surface)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <h1 style={{ margin: 0, color: 'var(--action-accent)', fontSize: '1.25rem' }}>FlowForge</h1>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/" style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>Workspace</Link>
        </nav>
      </header>
      <main style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
    </div>
  );
}
