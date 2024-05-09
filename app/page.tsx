import Link from "next/link";

import Header from "./components/header";

export default function Home() {
  console.log("Executing...");
  return (
    <main>
      <Header title={"Welcome to this NextJS Course!"} />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
    </main>
  );
}
