import Image from "next/image";
import { redirect } from "next/navigation";

export function generateMetadata() {
  return {
    title: "About Us - College",
    description: "This is description for about us",
  };
}

export default function AboutCollegePage() {
  return (
    <div>
      About Us page <br />
      <br />
      <button>GO TO HOME PAGE</button>
      <Image
        src={
          "https://images.unsplash.com/photo-1720048170970-3848514c3d60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
        }
        width={200}
        height={200}
        alt="charger"
      />
    </div>
  );
}
