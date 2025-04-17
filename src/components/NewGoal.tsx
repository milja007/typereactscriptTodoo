import { FC, useRef, type FormEvent } from "react";
interface NewGoalProps {
  onAdd: (text: string, summary: string) => void;
}
const NewGoal: FC<NewGoalProps> = ({ onAdd }) => {
  //sad ce storat null ali eventually ce storat Htmlinputele
  const goalRef = useRef<HTMLInputElement>(null);
  const summRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ovaj znak current! da se zna da nece bit null
    const entredGoal = goalRef.current!.value;
    const enteredSummary = summRef.current!.value;
    //validation if  entered empty values
    if (!entredGoal || !enteredSummary) return;

    onAdd(entredGoal, enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
