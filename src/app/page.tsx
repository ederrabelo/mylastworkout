'use client'

import { useState } from "react";
import Form from "./components/form/form";
import List from "./components/list/list";
import Workout from "./types/workout";

export default function Home() {

  const [workouts, setWorkouts] = useState<Workout[]>([]);

  return (
    <main>
      <Form
        workouts={workouts}
        setWorkouts={setWorkouts}
      />
      <List workouts={workouts} />
    </main>
  )
}
