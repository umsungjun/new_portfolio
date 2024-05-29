/* import YouTube from "react-youtube"; */

type Answer = {
  answerKey: string | undefined;
};

{
  /* 분기 처리 랜더링 해야됨
    이유: innerHtml은 xss공격에 취약
         youtube video 안나옴 */
}
export default function Answer({ answerKey }: Answer) {
  console.log(answerKey);
  return <div className="answer"></div>;
}
