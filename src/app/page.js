import { About } from "@/components/about";
import { MainCard } from "@/components/mainCard";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-24">
      <MainCard/>
      <About/>
    </main>
  );
}
