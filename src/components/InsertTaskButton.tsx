import { PlusCircle } from 'phosphor-react';
import styles from './InsertTaskButton.module.css'

interface InsertTaskButtonProps {
    onClick: () => void;
}

function InsertTaskButton({ onClick }: InsertTaskButtonProps) {
    return (

        <button type="button" onClick={onClick} className={styles.button}>
            Criar
            <PlusCircle size={20} />
        </button>

    );
}
export default InsertTaskButton