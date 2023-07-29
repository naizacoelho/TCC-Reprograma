import styles from '../styles/pages/historia.module.css'
import pombo from '../assets/pomba.png'
import {Link} from 'react-router-dom'


export default function Historia() {
  return (
    <>
      <main className={styles.background}>
        <div className={styles.banner}>
          <div className={styles.textBox}>
            <p>Localizado no Prédio do CTG na UFPE.
              O Programa rumo á Universidade vem á 28 anos ajudando jovens e adultos á entrarem na universidade pública.
            </p>
          </div>
        </div >
        <div className={styles.content} >
          <div className={styles.title}>
            <h2>Conheça o PRU!</h2>

            <img src={pombo} alt="Desenho de um pombo azul" />
          </div>
          <div className={styles.textContainer}>
            <p className="mt-5">O PRU foi concebido em 1994 por três professores, visando auxiliar o ingresso dos estudantes oriundos da rede pública às Universidades públicas de Pernambuco.
              A fim de oferecer um ensino de qualidade a baixo custo, o projeto surge como uma alternativa de minimizar a distância entre o conhecimento e a aprendizagem do estudante, tornando a Universidade acessível a esse.</p>
            <p>Em seu primeiro ano, o Projeto foi realizado na Escola Estadual Senador Novaes Filho com cinco alunos e três professores graduandos voluntários, os quais tinham a ideia de oferecer aulas de “reforço” apenas aos sábados para estudantes interessados e de origem popular (baixa renda).
              Os cinco estudantes assumiram este compromisso, desafiando seu contexto social, e não perderam nenhum sábado.
              Como primeiro fruto, um deles conseguiu uma vaga no curso de Medicina na Universidade Federal de Pernambuco. Com este feito, o PRU ganhou fôlego para atrair novos estudantes, auxiliando-os a conseguirem realizar seu sonho: o ingresso à Universidade.
              Diante desse contexto, o PRU nasce com a ideologia que vira seu cerne: a inclusão social e o voluntariado.</p>

            
            <h3>Apoio Psicopedagógico:</h3>
            <p>Em 2019, o PRU conseguiu construir um núcleo de apoio pedagógico, com profissionais da psicologia atuando fortemente no auxílio emocional de seus estudantes e da equipe docente.</p>
            <h3 className='mt-5'>Quer saber mais?</h3>
            <p>Para saber Informações como o meio de matrícula para o PRU  <Link to="/informacoes" className={styles.link}>clique aqui</Link> .</p>
          </div>
        </div>
      </main>
    </>
  )
}
