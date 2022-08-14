import { PlayerSummary } from 'components/PlayerSummary/PlayerSummary'
import styles from './styles.module.css'
import {useState} from 'react'
import { playerStats, opponentStats } from 'components/shared'
import { BattleMenu } from 'components/BattleMenu'

export const Battle = () => {

    const [playerHealth, setPlayerHealth] = useState(playerStats.maxHealth)
    const [opponentHealth, setOpponentHealth] = useState(opponentStats.maxHealth)

    return (
    
        <div className={styles.main}>
            <div className={styles.opponent}>
                <div className={styles.summary}>
                    <PlayerSummary 
                        health={opponentHealth}
                        name={opponentStats.name}
                        level={opponentStats.level}
                        maxHealth={opponentStats.maxHealth}
                    />
                </div>
            </div>
            <div className={styles.user}>
                <div className={styles.summary}>
                    <PlayerSummary 
                        main
                        health={playerHealth}
                        name={playerStats.name}
                        level={playerStats.level}
                        maxHealth={playerStats.maxHealth}    
                     />
                </div>
            </div>
            <div className={styles.hudChild}>
                <BattleMenu 
                    onAttack={()=> console.log('Attack!')}
                    onMagic={()=> console.log('Magic!')}
                    onHeal={()=> console.log('Heal!')}
                />
            </div>
        </div>
    )
}