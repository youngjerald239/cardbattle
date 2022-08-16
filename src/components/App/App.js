import {useEffect, useState} from 'react'
import styles from './styles.module.css'
import { StartMenu, EndMenu } from 'components'
import {Battle} from 'components/Battle'

export const App = () => {
  const [winner, setWinner] = useState();
  const [mode, setMode] = useState('start');

  useEffect(() => {
    if (mode === 'battle') {
      setWinner(undefined);
    }
  }, [mode]);

  return (
    <div className={styles.main}>
      {mode === 'start' && (
        <StartMenu onStartClick={() => setMode('battle')} />
      )}

      {mode === 'battle' && (
        <Battle
          onGameEnd={winner => {
            setWinner(winner);
            setMode('gameOver');
          }}
        />
      )}

      {mode === 'gameOver' && <EndMenu winner={winner} onStartClick={() => {
        setWinner(undefined)
        setMode('battle')
        
        }}/>}
    </div>
  );
};

export default App