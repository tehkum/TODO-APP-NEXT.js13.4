export default function TodoCard({ props }) {
  return (
    <div className="p-6 text-red-100 border-2 border-solid border-black">
      <input id="todo" type="checkbox" className="mr-2" />
      <label htmlFor="todo" className="text-xl">
        {props.todoName}
      </label>
    </div>
  );
}
