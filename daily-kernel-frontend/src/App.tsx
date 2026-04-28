import { Task } from "./components/Task/Task";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sun via-gold to-teal p-8 text-ink">
      <h1 className="mb-6 text-4xl font-bold">Daily Kernel</h1>

      <Task id={1} title="Create first React component" isDone={false} />
      <Task id={2} title="Learn props" isDone={true} />
    </main>
  );
}

export default App;