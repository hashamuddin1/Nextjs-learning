"use client";
import { useRouter } from "next/navigation";
import custom from "@/style/custom.module.css"

export default function AboutPage() {
  const router = useRouter();
  return (
    <div>
      About Us page <br />
      <br />
      <button onClick={() => router.push("/")}>GO TO HOME PAGE</button>
      <br />
      <br />
      <button onClick={() => router.push("/about/aboutcollege")}>
        GO TO ABOUT COLLEGE PAGE
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/about/aboutschool")}>
        GO TO ABOUT SCHOOL PAGE
      </button>
      <br />
      <br />
      <button onClick={() => router.push("/product")}>
        GO TO PRODUCT PAGE
      </button>
      <h3 className={custom.heading}>Custom heading</h3>
    </div>
  );
}
