import Header from "./components/Header";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";

function App() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-20 bg-neutral-100 dark:bg-neutral-900">
      <Header />
      <Grid />
      <Keyboard />
    </main>
  );
}

export default App;
