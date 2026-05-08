import { useState } from 'react';
import { useTaskList } from './src/hooks/useTaskList';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTaskList();

  // #2: Filtering logic inside component
  let visibleTasks = tasks;
  if (filter === 'completed') {
    visibleTasks = tasks.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    visibleTasks = tasks.filter((task) => !task.completed);
  }

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI, not reusable */}
      <h2>Welcome, Student</h2>

      {/* #4: Repeated button JSX */}
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <p>Current filter: {filter}</p>
      </div>

      {/* #5: Inline list rendering */}
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.id}>
            {task.title} {task.completed ? '✅' : '⏳'}
          </li>
        ))}
      </ul>
    </div>
  );
}
