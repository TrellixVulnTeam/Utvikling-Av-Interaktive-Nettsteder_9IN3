function Answer({ answer, updateAnswer, checkedAnswer, isFail }) {
  const isChecked = () => checkedAnswer?._key === answer?._key
  // console.log(checkedAnswer, isFail)
  return (
    <div>
      <label htmlFor={answer?.title}>
        <input
          id={answer?._key}
          type="radio"
          name="answer"
          value={answer?.title}
          className="mr-3"
          onChange={() => updateAnswer(answer)}
          checked={isChecked()}
        />
        {answer?.title}
        {isChecked() && isFail ? (
          <span className="text-red-300">Feil</span>
        ) : null}
      </label>
    </div>
  )
}

export default Answer
