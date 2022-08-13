import styles from './styles.module.css'
import {useState} from 'react'

export const App = () => {

  const [mode, setMode] = useState('start')
  return <div className={styles.main}>
    {mode === 'start' && <>Start menu</>}

    {mode === 'battle' && <>Battle Mode</>}

    {mode === 'gameOver' && <>Game Over</>}
  </div>
};