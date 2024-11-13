import styles from './InsertTaskInput.module.css'

interface InsertTaskInputProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

function InsertTaskInput({ onChange, value }: InsertTaskInputProps) {
    return (
      
            <input
                type="text"
                className={`${styles.input}  ${styles.inputFocus}`}
                placeholder="Adicione uma nova tarefa"
                onChange={onChange}
                value={value}
            />
         
       
    );
}
export default InsertTaskInput