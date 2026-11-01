import { Link } from 'react-router-dom';

export function Workspace() {
  return (
    <div>
      <h2>Your Workflows</h2>
      <div style={{ padding: '2rem', border: '1px dashed var(--border-subtle)', borderRadius: '8px', marginTop: '1rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>No workflows yet.</p>
        <Link to="/workspace/new/canvas" style={{ display: 'inline-block', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: 'var(--action-primary)', color: 'var(--text-primary)', textDecoration: 'none', borderRadius: '4px' }}>Create your first automation</Link>
      </div>
    </div>
  );
}
