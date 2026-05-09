import { useState } from 'react';
import { useTaskList } from './src/hooks/useTaskList';
import { filterTasks } from './src/utils/filterTasks';
import { Greeting } from './src/components/Greeting';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');
  const { tasks, loading } = useTaskList();

  const visibleTasks = filterTasks(filter, tasks);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <Greeting name="Student"/>

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
