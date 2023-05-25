import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData){
    "use server"

    const title = data.get("title")?.valueOf()
    if (typeof title !== "string" || title.length === 0){
        throw new Error("Invalid title")
    }
    await prisma.todo.create({data: {title, complete: false}})
    redirect("/")
}

const styles = {
  header: `flex justify-between items-center mb-4`,
  todoText: `text-2xl`,
  input: `border border-slate-300 bg-transparent rounded-md px-2 py-1 outline-none focus-within:border-slate-100`,
  form: `flex flex-col gap-2`,
  divCon: `flex gap-1 justify-end`,
  button: `border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none`,
};

export default function Page() {
  return (
    <>
    <header className={styles.header}>
    <div className={styles.todoText}>Todo App</div>
    </header>
    <form action={createTodo} className={styles.form}>
        <input type="text" name="title" className={styles.input} />
        <div className={styles.divCon}>
            <Link href={'..'} className={styles.button}>Cancel</Link>
            <button type="submit" className={styles.button}>Create</button>
        </div>
    </form>
    </>
  );
}
