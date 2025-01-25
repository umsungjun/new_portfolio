import Chat from "./components/chat/chat";
import Side from "./components/side/side";

export default function App() {
  return (
    <section className="flex justify-center gap-32 overflow-hidden dark:bg-neutral-900">
      <Side />
      <Chat />
    </section>
  );
}
