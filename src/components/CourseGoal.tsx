import { type FC } from "react";

interface CourseGoalProps {
  goals: Goal[];
  onDelete: (id: number) => void;
}
type Goal = {
  id: number;
  title: string;
  description: string;
};
//OVO je za moju sintaksu
const CourseGoal: FC<CourseGoalProps> = ({ goals, onDelete }) => {
  //OVO je za drugu koja je više korištena/ptencijalno prebacivanje ali ne jos
  // export default function CourseGoal = ({ goals }:CourseGoalProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <article>
            <div>
              <h2>{goal.title}</h2>
              <p>{goal.description}</p>
            </div>
            <button onClick={() => onDelete(goal.id)}>Delete</button>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoal;
