type Answer = {
  phrase: string;
};

export default function Answer({ phrase }: Answer) {
  return (
    <div
      className="answerWrapper"
      dangerouslySetInnerHTML={{ __html: phrase }}
    />
  );
}
