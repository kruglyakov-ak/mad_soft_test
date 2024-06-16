import { QUESTIONS } from "@/shared/mocks/questions";
import Test from "@/widgets/test";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Test currentquestion={5} questions={QUESTIONS} isTimer={true} />
    </main>
  );
}
