import styles from '../styles/pages/Informacoes.module.css'
import informar from '../assets/informar.jpg'

export default function Informacoes() {
  return (
    <>
      <main>
        <div className={styles.content}>
          <h1>Informações sobre o processo de matrícula para o PRU</h1>
          <div className={styles.infoContainer}>
            <div className={styles.leftContainer}>
              <span>
                <h2>Quando abre as incrições?</h2>
                <p> As incrições para o pré-ENEM Projeto Rumo à Universidade (PRU), abrem todos os anos por volta do mês de janeiro.
                  As aulas são gratuitas e acontecem no Centro de Tecnologia e Geociências (CTG) da UFPE, todos sábados, das 12h às 19h.
                </p>
              </span>
              <span>
                <h2>Quem pode participar?</h2>
                <p>O projeto social foca nos estudantes que querem concorrer uma vaga no ensino superior, mas precisam conciliar a rotina de trabalho e estudos.
                  o PRU não é só para quem está terminando o ensino médio, mas quem concluiu há muito tempo, para quem não pôde fazer o vestibular na época porque precisou trabalhar.
                  E ele [estudante] volta depois de casado, depois até de aposentado.
                </p>
              </span>
            </div>
            <img src={informar} alt="imagem de uma menina negra em desenho" className={styles.imgContainer} />
            <div className={styles.rightContainer}>
              <span>
                <h2>Quais as disciplinas o Pré-enem PRU oferece?</h2>
                <p>O Pré-enem oferece aulas para todas as disciplinas pedidas no ENEM, também com técnicas de aprendizagem
                  para o ensino fundamental e ensino médio.
                </p>
              </span>
              <span>
                <h2>Onde posso me inscrever?</h2>
                <p>A última abertura para inscrição aconteceu por meio de formulário disponíbilizado através do instagram
                  oficial do projeto, para mais informações em tempo real siga o <a href="https://www.instagram.com/rumoauniversidadepru/?hl=pt-br" target='_blank' className={styles.link}>@rumoauniversidadepru</a>  no instagram.
                </p>
              </span>
            </div>
          </div>
        </div>
      </main>

    </>
  )
}
