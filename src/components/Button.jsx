// importamos el estilo del módulo
import styles from '../css/Button.module.css'

function Button() {
  // aplicamos el estilo del módulo 'button'
  return (<>
    <button className={styles.button}>
      Button</button><br /><br />
  </>
  )
}

export default Button