import { useState } from 'react';
import { useTaskList } from './src/hooks/useTaskList';
import { filterTasks } from './src/utils/filterTasks';
import { Greeting } from './src/components/Greeting';
import { TaskFilterButtons } from './src/components/TaskFilterButtons';
import { TaskItem } from './src/components/TaskItem';

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

      <div>
        <TaskFilterButtons filter={filter} onFilterChange={setFilter}/>
      </div>

      <ul>
        {visibleTasks.map((task) => (<TaskItem key={task.id} task={task}/>))}
      </ul>
    </div>
  );
}
