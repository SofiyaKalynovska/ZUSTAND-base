import "./Column.css";
import Task from "./Task.jsx";

export default function Column({ state }) {
  return (
    <div className="column">
      <p>{state}</p>
      <Task title={"To do"} />
    </div>
  );
}
