"use client";

export default function ButtonComponent(props) {
  return (
    <div>
      <button onClick={() => alert(props.price)}>Check Price</button>
    </div>
  );
}
