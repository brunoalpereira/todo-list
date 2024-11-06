import { PlusCircle } from 'phosphor-react';
import styles from './InsertTaskButton.module.css'


function InsertTaskButton() {
    return (

        <button type="button" className={styles.button}>
            Criar
            <PlusCircle size={20} />
        </button>

    );
}
export default InsertTaskButton