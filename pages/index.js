import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <TaskList />
      </main>
    </>
  );
}
