type QuestionComment = {
  id: number;
  phrase: string;
};

export default function QuestionComment({ id, phrase }: QuestionComment) {
  return (
    <div className="questionWrapper">
      {id !== 2 && <div className="questionMark">Q</div>}
      <p>{phrase}</p>
    </div>
  );
}
