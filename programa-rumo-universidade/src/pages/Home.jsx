import styles from '../styles/pages/home.module.css';
import { CCarousel, CCarouselItem, CCarouselCaption, CImage } from '@coreui/react'



export default function Home() {



  return (
    <>
      <main className={styles.background}>
        <CCarousel className={styles.carouselContainer} controls indicators interval={6000}>
          <CCarouselItem>
            <CImage className={`d-block ${styles.imgContainer}`} src="/src/assets/remoto.jpg" alt="Uma arte representando alunos em casa com seus computadores em aula Remota" />
            <CCarouselCaption className={`d-none d-md-block ${styles.captionContainer}`}>
              <a className={styles.link} href='https://www.youtube.com/@projetorumoauniversidadepr500/videos' target='_blank'>
                <h3>Aulas Remotas durante a Pandemia </h3>
                <p>Em 2020 durante a Covid-19 o PRU manteve suas aulas de forma remotas, com chamadas no Google meet, as aulas podem ser assistidas
                  no canal do YouTube.
                </p>
              </a>

            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className={`d-block ${styles.imgContainer}`} src="/src/assets/libras.jpg" alt="Imagem de um homem fazendo sinais em libras" />
            <CCarouselCaption className={`d-none d-md-block ${styles.captionContainer}`}>
              <h3>Inclusão</h3>
              <p>Em 2018 o PRU passou a contar com o voluntariado de intérpretes de Libras para atender
                também a demanda de estudantes com alguma deficiência auditiva.</p>
            </CCarouselCaption>
          </CCarouselItem>
          <CCarouselItem>
            <CImage className={`d-block ${styles.imgContainer}`} src="/src/assets/aulao.jpg" alt="Imagem de alunos do Pru numa sala de aula" />
            <CCarouselCaption className={`d-none d-md-block ${styles.captionContainer}`}>
              <a className={styles.link} href='https://www.diariodepernambuco.com.br/noticia/educacao/2023/01/inscricoes-estao-abertas-para-o-projeto-rumo-a-universidade-pru.html' target='_blank'>
                <h3>Inscrições estão abertas para o Projeto Rumo à Universidade (PRU)</h3>
                <p>Numa matéria no Jornal Diário de Pernambuco se pode conhecer mais como funciona o processo de inscrição para o PRU.</p>
              </a>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>

      </main>
    </>
  )
}
