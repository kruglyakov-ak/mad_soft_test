import { TestPage } from "@/components";
import { QUESTIONS } from "@/shared/mocks/questions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TestPage questions={QUESTIONS} isTimer={true} />
    </main>
  );
}
