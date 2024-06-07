import React, { useRef } from "react";
import useStore from "../store";
export default function Input() {
  const inputRef = useRef();
  const addPerson = useStore((state) => state.addPerson);

  const add = () => {};
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={add}>
        Add Person
      </button>
    </div>
  );
}
