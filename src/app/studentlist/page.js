import Link from "next/link";

export default function page() {
  return (
    <>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/student/1">Hasham</Link>
        </li>
        <li>
          <Link href="/student/2">Azhar</Link>
        </li>
        <li>
          <Link href="/student/3">Amin</Link>
        </li>
        <li>
          <Link href="/student/4">Moin</Link>
        </li>
      </ul>
    </>
  );
}
