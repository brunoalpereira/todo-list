import styles from './TaskListHeader.module.css'

function TaskListHeader() {

    return (
        <div>
            <header className={styles.containerHeader}>
                <aside>

                    <p> Tarefas criadas</p>
                </aside>
                <aside>
                    <p> Concluidas</p>


                </aside>
            </header>

        </div>
    )

} export default TaskListHeader