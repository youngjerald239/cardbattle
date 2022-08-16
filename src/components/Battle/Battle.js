import { PlayerSummary } from 'components/PlayerSummary/PlayerSummary'
import styles from './styles.module.css'
import {useEffect, useState} from 'react'
import { playerStats, opponentStats } from 'components/shared'
import { BattleMenu } from 'components/BattleMenu'
import { BattleAnnouncer } from 'components/BattleAnnouncer'
import { useAIOpponent, useBattleSequence } from 'hooks'

export const Battle = () => {
    const [sequence, setSequence] = useState({})

     const {
        turn,
        inSequence,
        playerHealth,
        opponentHealth,
        announcerMessage,
        playerAnimation,
        opponentAnimation
        } =  useBattleSequence(sequence)

        const aiChoice = useAIOpponent(turn)

        useEffect(() => {
            if (aiChoice && turn === 1 && !inSequence) {
                setSequence({turn, mode: aiChoice})
            } 
        }, [turn, aiChoice, inSequence])

    return (
    
       

        <>
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
            <div className={styles.characters}>
                <div className={styles.gameHeader}>
                    {playerStats.name} vs {opponentStats.name}
                </div>
            </div>

            <div className={styles.gameImages}>
                <div className={styles.playerSprite}>
                    <img 
                        alt={playerStats.name}
                        src={playerStats.img}
                       className={styles[playerAnimation]}

                    />
                </div>

                <div className={styles.opponentSprite}>
                    <img 
                        alt={opponentStats.name}
                        src={opponentStats.img}
                        className={styles[opponentAnimation]}

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
                <div className={styles.hud}>

            <div className={styles.hudChild}>
                <BattleAnnouncer 
                    message={
                        announcerMessage || `What will ${playerStats.name} do?`
                    }

                />
            </div>

            <div className={styles.hudChild}>
                <BattleMenu 
                    onAttack={()=> setSequence({turn, mode: 'attack'})}
                    onMagic={()=> setSequence({turn, mode: 'magick'})}
                    onHeal={()=> setSequence({turn, mode: 'heal'})}
                />
            </div>
            </div>
            </div>
            
        </>
    )
}