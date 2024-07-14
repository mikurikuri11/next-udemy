import { Task } from "@/app/api/tasks/route";

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks", {
    method: "GET",
    // cache: "no-store",
  });
  return await response.json();
};

const TaskEditIdPage = async ({ params }: { params: { id: string } }) => {
  const tasks = (await getTasks()).tasks as Task[];
  return (
    <>
      <div>TaskEditIdPage</div>
      <div>{params.id}</div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </>
  );
};

export default TaskEditIdPage;
