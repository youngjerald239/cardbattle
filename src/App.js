import styles from './styles.module.css'
import {useState} from 'react'

export const App = () => {

  const [mode, setMode] = useState('start')
  return <div className={styles.main}>
    {mode === 'start'}

    {}

    {}
  </div>
};