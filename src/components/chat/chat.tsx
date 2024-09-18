import ChatBody from "./chatBody";
import ChatHeader from "./chatHeader";

export default function Chat() {
  return (
    /* bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 */
    <section className="max-w-[475px] w-[475px] h-dvh border border-solid border-y-0 border-slate-200 bg-gradient-to-r from-[#d7e5fa] via-[#ede9f8] to-[#d7e5fa] bg-[length:200%_100%] animate-gradientAnimation dark:border-neutral-800 dark:from-neutral-800 dark:animate-none">
      {/* chat header */}
      <ChatHeader />
      <ChatBody />
    </section>
  );
}
