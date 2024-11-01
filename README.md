# New Portfolio(https://umsungjun.vercel.app)

<img width="100%" src="https://drive.google.com/thumbnail?id=1NxpqukbWOfZgNQ6HgfycCM7XrbpVSKBb&sz=w1000"/>

### 프로젝트 소개

New Portfolio는 제가 1년간 실무 생활을 통해 습득한 기술들을 바탕으로 제작한 프로젝트로, 반응형 웹 디자인을 통해 웹과 모바일 환경 모두에서 원활하게 작동하며, 포트폴리오를 확인하는 분들이 더 재미있게 탐색할 수 있도록 인터랙티브한 채팅 UI를 도입했습니다. 또한, 영어 번역 기능을 추가하여 국제 사용자들도 쉽게 이해할 수 있도록 다국어 지원을 제공합니다.

### 프로젝트 사용 기술

```
React, TypeScript, Tailwind CSS, Zustand, react-i18next, Vite
```

### 폴더 구조

```
src
 ┣ assets
 ┣ components
 ┃ ┣ ReactHelmet
 ┃ ┃ ┗ ReactHelmet.tsx
 ┃ ┣ chat
 ┃ ┃ ┣ chatComponent
 ┃ ┃ ┃ ┣ answer
 ┃ ┃ ┃ ┃ ┣ answerComponent
 ┃ ┃ ┃ ┃ ┃ ┣ utilComponent
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ answerMark.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ imagePreView.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ projectComponent.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ questionMark.tsx
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ videoPlayer.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ answer1.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ answer2.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ answer3.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ answer4.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ answer5.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ answer6.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ gitAndBlog.tsx
 ┃ ┃ ┃ ┃ ┗ answer.tsx
 ┃ ┃ ┃ ┣ chatStart.tsx
 ┃ ┃ ┃ ┣ questionComment.tsx
 ┃ ┃ ┃ ┗ selectQuestion.tsx
 ┃ ┃ ┣ chat.tsx
 ┃ ┃ ┣ chatBody.tsx
 ┃ ┃ ┗ chatHeader.tsx
 ┃ ┣ side
 ┃ ┃ ┣ profileSwiper
 ┃ ┃ ┃ ┗ profileSwiper.tsx
 ┃ ┃ ┣ .DS_Store
 ┃ ┃ ┗ side.tsx
 ┃ ┗ .DS_Store
 ┣ data
 ┃ ┣ locales
 ┃ ┃ ┣ en-US
 ┃ ┃ ┃ ┗ translation.json
 ┃ ┃ ┗ ko-KR
 ┃ ┃ ┃ ┗ translation.json
 ┃ ┗ initialChatHistory.ts
 ┣ i18n
 ┃ ┣ credentials.js
 ┃ ┣ i18n.ts
 ┃ ┗ loadSpreadSheet.js
 ┣ pages
 ┃ ┗ Main.tsx
 ┣ store
 ┃ ┣ useChatStore.ts
 ┃ ┣ useImagePreviewStore.ts
 ┃ ┗ useLanguageStore.ts
 ┣ type
 ┃ ┗ chatType.ts
 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts
```

### Commit Convention

```
Feat : 새로운 기능을 추가하는 경우
Fix : 버그를 고친경우
Docs : 문서를 수정한 경우
Style : 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우
Refactor : 코드 리펙토링
Test : 테스트 코드, 리펙토링 테스트 코드를 추가했을 때
Chore : 빌드 업무 수정, 패키지 매니저 수정
Design : CSS 등 사용자가 UI 디자인을 변경했을 때
Rename : 파일명(or 폴더명) 을 수정한 경우
Remove : 코드(파일) 의 삭제가 있을 때. "Clean", "Eliminate" 를 사용하기도 함
```
