"use client"
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
     const pathname = usePathname();
     console.log(pathname);
  return (
    <div>
      <div>
        {pathname !== "/about/aboutschool" ? (
          <h2>About Us Layout</h2>
        ) : (
          <h2>Other Layout</h2>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
