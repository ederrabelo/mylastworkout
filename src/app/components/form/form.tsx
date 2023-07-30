import Workout from "@/app/types/workout";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../button/button";
import styles from "./form.module.css";

interface FormProps {
    setWorkouts: (workouts: Workout[]) => void;
    workouts: Workout[];
}

export default function Form({ workouts, setWorkouts }: FormProps) {

    const [input, setInput] = useState("");

    useEffect(() => {
        checkStoredWorkouts();
    }, [])

    const checkStoredWorkouts = () => {
        const storedWorkouts = localStorage.getItem("workouts");
        if (storedWorkouts) {
            setWorkouts(JSON.parse(storedWorkouts))
        }
    }

    const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    const addWorkout = (event: FormEvent) => {
        event.preventDefault();

        if (workouts.length > 3) {
            workouts.pop();
        }

        const formattedInput = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

        const updatedWorkouts = [{ name: formattedInput }, ...workouts];
        setWorkouts(updatedWorkouts);
        localStorage.setItem("workouts", JSON.stringify(updatedWorkouts))
        setInput("")
    }

    const clearHistory = () => {
        setWorkouts([]);
        localStorage.removeItem("workouts");
    }

    return (
        <form className={styles.form} onSubmit={addWorkout}>
            <h1>Qual foi o seu último treino?</h1>

            <input
                placeholder="Exemplo: Peito, Costas"
                value={input}
                onChange={inputChange}
                required
            />

            <div>
                <Button name="Adicionar treino" type="submit" />
                <Button name="Limpar histórico" type="button" onClick={clearHistory} />
            </div>
        </form>
    )
}