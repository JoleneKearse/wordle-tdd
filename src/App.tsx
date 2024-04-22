import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-neutral-100 dark:bg-neutral-900">
      <Header />
      <Keyboard />
    </main>
  );
}

export default App;
