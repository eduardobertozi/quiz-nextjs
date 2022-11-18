import RespostaModel from "../model/resposta"
import styles from '../styles/Resposta.module.css'

interface RespostaProps {
    valor: RespostaModel
    indice: number
    letra: string
    corFundoLetra: string
    respostaFornecida: (indice: number) => void
}

export default function Resposta(props: RespostaProps) {
    const resposta = props.valor

    const letraStyle = {
        backgroundColor: props.corFundoLetra
    }

    const respostaRevelada = resposta.revelada ? styles.respostaRevelada : ''

    return (
        <div
            className={styles.resposta}
            onClick={() => props.respostaFornecida(props.indice)}
        >
            <div className={`${respostaRevelada} ${styles.conteudoResposta}`}>
                <div className={styles.frente}>
                    <div
                        className={styles.letra}
                        style={letraStyle}
                    >
                        {props.letra}
                    </div>
                    <div className={styles.valor}>
                        {resposta.valor}
                    </div>
                </div>

                <div className={styles.verso}>
                    {resposta.certa ? (
                        <div className={styles.certa}>
                            <span>A Resposta certa é ...</span>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    ) : (
                        <div className={styles.errada}>
                            <span>A Resposta errada é ...</span>
                            <div className={styles.valor}>{resposta.valor}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}