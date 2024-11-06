import styles from './InsertTaskInput.module.css'


function InsertTaskInput() {
    return (
      
            <input
                type="text"
                className={styles.input}
                placeholder="Adicione uma nova tarefa"
            />
         
       
    );
}
export default InsertTaskInput