import { Check, Trash } from "phosphor-react";
import styles from './Task.module.css';
import { TaskInterface } from "../App";

interface Props {
    data: TaskInterface;
    removeTask: (id: number) => void
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

function Task(props: Props) {

    function handleTaskToggle() {
       props.toggleTaskStatus({ id: props.data.id, value: !props.data.isChecked })
      }
    
      function handleRemove() {
       props.removeTask(props.data.id)
      }
    
      const checkboxCheckedClassname =props.data.isChecked
        ? styles['checkbox-checked']
        : styles['checkbox-unchecked']
      const paragraphCheckedClassname = props.data.isChecked
        ? styles['paragraph-checked']
        : ''
    
      return (
        <div className={styles.container}>
        
            <label htmlFor="checkbox" onClick={handleTaskToggle} >
              <input readOnly type="checkbox" checked={props.data.isChecked}   />
              <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                {props.data.isChecked && <Check size={12} />}
              </span>
    
              <p className={`${styles.paragraph} ${paragraphCheckedClassname} `} >
                {props.data.text}
              </p>
            </label>
    
    
          <button onClick={handleRemove}>
            <Trash size={16} color="#808080" />
          </button>
        </div>
      )
}

export default Task;