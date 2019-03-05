import { h } from "preact";

export default function Button({ title, onClick }) {
  return (
    <button onClick={onClick}>
      {title}
    </button>
  );
};
