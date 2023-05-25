import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

const styles = {
  header: `flex justify-between items-center mb-4`,
  todoText: `text-2xl`,
  newLink: `border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none`,
  ul: `pl-4`,
};

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.todoText}>
          Todo App
        </div>
        <Link className={styles.newLink} href="/new">
          New
        </Link>
      </header>
      <ul className={styles.ul}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
