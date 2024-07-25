"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutCollegePage() {
  const router = useRouter();
  return (
    <div>
      About Us page <br />
      <br />
      <button onClick={() => router.push("/")}>GO TO HOME PAGE</button>
      <Image
        src={
          "https://images.unsplash.com/photo-1720048170970-3848514c3d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        }
        width={200}
        height={200}
      />
    </div>
  );
}
