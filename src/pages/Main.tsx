import Chat from "../components/chat/chat";
import ReactHelmet from "../components/ReactHelmet/ReactHelmet";
import Side from "../components/side/side";

export default function Main() {
  return (
    <>
      <ReactHelmet
        title="프론트엔드 개발자 엄성준 포트폴리오"
        description="꾸준함이 강점이자 자랑인 프론트엔드 개발자 엄성준 포트폴리오입니다."
        keywords="프론트엔드 개발자, 엄성준, 포트폴리오, frontend developer, umsungjun, portfolio"
      />
      <section className="flex justify-center gap-32 overflow-hidden dark:bg-neutral-900">
        <Side />
        <Chat />
      </section>
    </>
  );
}
