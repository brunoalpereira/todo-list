import styles from './Search.module.css'
import {PlusCircle} from 'phosphor-react'

function Search() {
    return (

        <div>
            <input type="text" placeholder='Adicione uma tarefa'></input>

            <button type="button" className={styles.button}>
                Criar
                <PlusCircle size={20} />
            </button>
        </div>


    )
}
export default Search