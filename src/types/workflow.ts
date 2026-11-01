export type NodeType = 'trigger' | 'action' | 'condition' | 'transform';

export interface Workspace {
  id: string;
  name: string;
  createdAt: string;
}

export interface WorkflowNode {
  id: string;
  type: NodeType;
  label: string;
  config: Record<string, unknown>;
  position: { x: number; y: number };
}

export interface WorkflowEdge {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
}

export interface Workflow {
  id: string;
  workspaceId: string;
  name: string;
  status: 'draft' | 'active' | 'archived';
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  createdAt: string;
  updatedAt: string;
}
