import ProfileSwiper from "./profileSwiper/profileSwiper";

export default function Side() {
  return (
    <aside className="max-w-[450px] w-[450px] h-screen flex items-center">
      <div className="w-full flex flex-col gap-10">
        {/* 제목 및 소개 */}
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl text-center font-medium">
            엄성준 포트폴리오
          </h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl">"인내와 꾸준함이 강점이자 자랑인</h3>
            <h3 className="text-2xl text-right">
              프론트엔드 개발자 엄성준입니다."
            </h3>
          </div>
        </div>
        {/* 연락처 */}
        <div className="flex gap-8">
          <div className="w-1/2">
            <h3 className="text-2xl font-bold">연락하기</h3>
            <ul className="pt-5 flex flex-col gap-5">
              <li>
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <h5 className="text-xl">핸드폰 번호</h5>
                </div>
                <p className="mt-2 text-lg">010-2112-0275</p>
              </li>
              <li>
                <div className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  <h5 className="text-xl">메일</h5>
                </div>
                <p className="mt-2 text-lg">umseongjun@naver.com</p>
              </li>
            </ul>
          </div>
          {/* 프로필 이미지 스와이퍼 */}
          <ProfileSwiper />
        </div>
        {/* git, blog 링크 */}
        <div>
          <div>git</div>
          <div>blog</div>
        </div>
      </div>
    </aside>
  );
}
