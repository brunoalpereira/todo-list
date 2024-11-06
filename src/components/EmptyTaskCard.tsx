import styles from './EmptyTaskCard.module.css'

export function EmptyTaskCard() {
  return (
    <div className={styles.container}>
      <img src='/assets/Clipboard.svg' alt="ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}