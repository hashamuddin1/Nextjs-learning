"use client";
import { useRouter } from "next/navigation";

export default function AboutSchoolPage() {
  const router = useRouter();
  return (
    <div>
      About Us page <br />
      <br />
      <button onClick={() => router.push("/")}>GO TO HOME PAGE</button>
    </div>
  );
}
