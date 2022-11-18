import styles from '../styles/Questao.module.css'
import QuestaoModel from "../model/questao"
import Enunciado from "./Enunciado"
import Resposta from './Resposta'
import Temporizador from './Temporizador'

const letras = [
    { valor: 'A', cor: '#F2C866' },
    { valor: 'B', cor: '#F266BA' },
    { valor: 'C', cor: '#85F4B2' },
    { valor: 'D', cor: '#BCE596' },
]

interface QuestaoProps {
    valor: QuestaoModel
    tempoPraResposta?: number
    respostaFornecida: (indice: number) => void
    tempoEsgotado: () => void
}

export default function Questao(props: QuestaoProps) {
    const questao = props.valor

    function renderizarRespostas() {
        return questao.respostas.map((resposta, ind) => {
            return (
                <Resposta
                    key={`${questao.id}-${ind}`}
                    valor={resposta}
                    indice={ind}
                    letra={letras[ind].valor}
                    corFundoLetra={letras[ind].cor}
                    respostaFornecida={props.respostaFornecida}
                />
            )
        })
    }

    return (
        <div className={styles.questao}>
            <Enunciado texto={questao.enunciado} />
            <Temporizador
                key={questao.id}
                duracao={props.tempoPraResposta ?? 10}
                tempoEsgotado={props.tempoEsgotado}
            />
            {renderizarRespostas()}
        </div>
    )
}