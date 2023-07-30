import Workout from "@/app/types/workout";
import styles from "./list.module.css";

interface ListProps {
    workouts: Workout[];
}

export default function List({ workouts }: ListProps) {
    return (
        <ul className={styles.list}>
            {workouts.map((workout, index) => (
                <li key={index}>
                    {index === 0 ?
                        `Seu último treino: ${workout.name}` :
                        workout.name}
                </li>
            ))}
        </ul>
    )
}