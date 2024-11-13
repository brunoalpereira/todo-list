import styles from './TaskListHeader.module.css'

interface props{
    totalTasks: number,
    totalCheckedTasks:number
}


function TaskListHeader(props: props) {

    return (
        <div>
            <header className={styles.containerHeader}>
                <aside>

                    <p> Tarefas criadas</p>
                    <span>{props.totalTasks}</span>
                </aside>
                <aside>
                    <p> Concluidas</p>

                    <span>
                        {props.totalCheckedTasks === 0
                            ? props.totalTasks
                            : `${props.totalCheckedTasks} de ${props.totalTasks}`}
                    </span>
                </aside>
            </header>

        </div>
    )

} export default TaskListHeader