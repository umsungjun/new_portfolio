type QuestionComment = {
  id: number;
  text: string;
};

export default function QuestionComment({ id, text }: QuestionComment) {
  return (
    <div className="questionWrapper">
      {id !== 2 && <div className="questionMark">Q</div>}
      <p>{text}</p>
    </div>
  );
}
