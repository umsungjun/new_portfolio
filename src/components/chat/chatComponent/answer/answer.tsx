/* import YouTube from "react-youtube"; */
import { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";

type Answer = {
  answerKey: string | undefined;
};

export default function Answer({ answerKey }: Answer) {
  console.log(answerKey);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="answer">
      {isLoading && (
        <PulseLoader
          color="#3B82f6"
          size={10}
          loading={true}
          speedMultiplier={0.8}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}
