"use client"

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};

const style = {
  li: `flex gap-1 items-center`,
  input: `cursor-pointer peer`,
  label: `cursor-pointer peer-checked:line-through peer-checked:text-slate-500`,
};
export function TodoItem({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <li className={style.li}>
      <input
        type="checkbox"
        className={style.input}
        id={id}
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className={style.label}>
        {title}
      </label>
    </li>
  );
}
