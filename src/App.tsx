import "./App.css";
import Header from "./components/HeaderChildren";
import goalsImg from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Learn Ts", description: "Learn ts from ground up" },
    {
      id: 2,
      title: "Learn Ts2",
      description: "Learn ts from ground up2",
    },
    {
      id: 3,
      title: "Learn Ts3",
      description: "Learn ts from ground up3",
    },
  ]);
  function handleDelete(id: number) {
    setGoals((prev) => prev.filter((g) => g.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals((prev) =>
      prev.concat({ id: Math.random(), title: text, description: summary })
    );
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoal goals={goals} onDelete={handleDelete} />
    </main>
  );
}

export default App;
