import ChatBody from "./chatBody/chatBody";
import ChatHeader from "./chatHeader";

export default function Chat() {
  return (
    <section className="max-w-[475px] w-[475px] h-dvh border border-solid border-y-0 border-slate-200 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
      {/* chat header */}
      <ChatHeader />
      <ChatBody />
    </section>
  );
}
