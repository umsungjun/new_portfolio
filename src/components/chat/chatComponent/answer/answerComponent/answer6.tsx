import { useTranslation } from "react-i18next";
import ProjectComponent from "./utilComponent/projectComponent";

export default function Answer6() {
  const { t } = useTranslation();

  return (
    <div className="answer">
      <p className="font-black flex items-center gap-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#3B82F6"
          viewBox="0 0 16 16"
        >
          <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
        </svg>
        {t("chat.question6")}
      </p>
      <ProjectComponent
        title="New Portfolio"
        imgId="1u6qHDayTlzeWLxR8toIkB3RtVFyOqk04"
        date="2024.05.19 ~ 2024.06.01"
        stack="React, TypeScript, Tailwind CSS, Zustand, react-i18next, Vite"
        desc={t("chat.question6.project5")}
        git="https://github.com/umsungjun/new_portfolio"
        site="https://new-portfolio-nine-tau.vercel.app"
      />
      <ProjectComponent
        title="Next Portfolio"
        imgId="1R2EIW4DGDCnzJoE2BCO6UuIITvEMQreA"
        date="2023.06.01 ~ 2023.06.04"
        stack="NextJs, TypeScript, Tailwind CSS, BootStrapIcon, LottieFilesAnimation, Vite"
        desc={t("chat.question6.project4")}
        git="https://github.com/umsungjun/Next-Portfolio"
        site="https://next-portfolio-umsungjun.vercel.app/"
      />
      <ProjectComponent
        title="Compass"
        videoId="whBVPjiTXMo"
        date="2023.03.27 ~ 2023.04.27"
        stack="React, TypeScript, Redux-Toolkit, Styled-component, Vite, Java, SpringBoot, SpringSecurity, JPA, MySql"
        desc={t("chat.question6.project3")}
        git="https://github.com/umsungjun/1seok4jo_Front"
      />
      <ProjectComponent
        title="Poketmon Master"
        imgId="1xpMQBvCSBZrECtDXJll2lbpZHZK4Q-nz"
        date="2023.03.13 ~ 2023.03.24"
        stack="React, TypeScript, Redux-Toolkit, Styled-component, Kakao SDK,Vite"
        desc={t("chat.question6.project2")}
        git="https://github.com/umsungjun/PoketmonMaster"
        site="https://poketmon-master.vercel.app/"
      />
      <ProjectComponent
        title="ReactShop"
        imgId="1Gs7D5TmO-plfWUiWbcqmJV_5nSeUpzxJ"
        date="2023.03.02 ~ 2023.03.12"
        stack="React, TypeScript, Redux-Toolkit, Styled-component, Kakao SDK,Vite"
        desc={t("chat.question6.project1")}
        git="https://github.com/umsungjun/React-Shop--TS"
        site="https://react-shop-ts-hazel.vercel.app/"
      />
    </div>
  );
}
