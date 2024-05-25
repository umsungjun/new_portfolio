import ChatHeader from "./chatHeader";

export default function Chat() {
  return (
    <section className="max-w-[475px] w-[475px] h-dvh border border-solid border-y-0 border-slate-200 chatBackground">
      {/* chat header */}
      <ChatHeader />
    </section>
  );
}
