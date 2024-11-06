import { Check, Trash } from "phosphor-react"
import styles from './Task.module.css'
import { TaskInterface } from "../App"

interface props {
    data: TaskInterface
}

function Task(props:props) {

    return (
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" >
                    <input type="checkbox" />
                    <span className={`${styles.checkbox} `}>

                        <Check size={12} />
                    </span>

                    <p className={`${styles.paragraph} `}>
                       {props.data.text}
                    </p>
                </label>
            </div>

            <button>
                <Trash size={16} color="#808080" />
            </button>
        </div>
    )


} export default Task