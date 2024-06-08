/* import YouTube from "react-youtube"; */
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Answer1 from "./answerComponent/answer1";
import Answer2 from "./answerComponent/answer2";
import Answer3 from "./answerComponent/answer3";

type Answer = {
  answerKey: string | undefined;
  isRefresh: boolean;
};

export default function Answer({ answerKey, isRefresh }: Answer) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {!isRefresh && isLoading ? (
        <div className="answerLoader">
          <PulseLoader
            color="#3B82f6"
            size={10}
            loading={true}
            speedMultiplier={0.8}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          {answerKey === "answer1" && <Answer1 />}
          {answerKey === "answer2" && <Answer2 />}
          {answerKey === "answer3" && <Answer3 />}
        </>
      )}
    </>
  );
}
