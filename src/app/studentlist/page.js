import Link from "next/link";

export default function page() {
  return (
    <>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/1">Hasham</Link>
        </li>
        <li>
          <Link href="/2">Azhar</Link>
        </li>
        <li>
          <Link href="/3">Amin</Link>
        </li>
        <li>
          <Link href="/4">Moin</Link>
        </li>
      </ul>
    </>
  );
}
