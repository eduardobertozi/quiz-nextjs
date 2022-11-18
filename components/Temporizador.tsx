import styles from '../styles/Temporizador.module.css'

import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: number
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return <div className={styles.temporizador}>
        <CountdownCircleTimer
            key={props.key}
            duration={props.duracao}
            size={100}
            isPlaying
            onComplete={props.tempoEsgotado}
            colors={['#BCE596', '#F7B801', '#ED827A']}
            colorsTime={[10, 3, 0]}
        >
            {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
    </div>
}