type QuestionComment = {
  id: number;
  text: string;
};

export default function QuestionComment({ id, text }: QuestionComment) {
  return (
    <div className="questionWrapper">
      {/* id:2 두 번째 고정 메시지 */}
      {id !== 2 && <div className="questionMark">Q</div>}
      <p>{text}</p>
    </div>
  );
}
