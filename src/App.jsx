import { About } from "./pages/About";
import { Info } from "./pages/Info";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <header className="text-center p-6 bg-blue-100 shadow">
        <h1 className="text-4xl font-bold">Ms. Ramirez’s Psychology Website</h1>
        <p className="mt-2 text-lg text-gray-700">Support for Growth and Healing</p>
      </header>
      <main className="flex-grow p-6 max-w-4xl mx-auto space-y-10 prose">
        <About />
        <Info />
        <Contact />
      </main>
      <footer className="text-center p-4 text-sm text-gray-400">
        © 2025 Ms. Ramirez, Licensed Psychologist
      </footer>
    </div>
  );
}

export default App;
