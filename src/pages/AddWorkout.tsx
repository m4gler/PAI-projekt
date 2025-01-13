import {useForm} from "react-hook-form"
import { data } from "react-router-dom";

type Workout = {
    name: string;
    description: string;
    typeOfTraining: string;
    duration: string;
}

export const AddWorkout = () => {

    const {register, handleSubmit} = useForm<Workout>();

    const onSubmit = (data:Workout) => {
        console.log(data)
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")}>Name</input>
            <input {...register("description")}></input>
        </form>
    )

}