import Task from './task';
import { useAppSelector } from '../lib/hooks';

const TaskList = () => {
  // const { tasks } = useContext(ApplicationContext);
  // const { entities: tasks } = useSelector((state: AppState) => state.tasks);
  const { entities: tasks } = useAppSelector((state) => state.tasks);

  return (
    <section className="task-list">
      {tasks && tasks.map((task) => <Task key={task.id} task={task} />)}
    </section>
  );
};

export default TaskList;
