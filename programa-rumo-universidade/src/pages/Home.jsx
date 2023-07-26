import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import styles from '../styles/pages/home.module.css';



export default function Home() {


  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <>
    <main>
    <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src="/src/assets/remoto.jpg" >
          <a href='https://www.youtube.com/@projetorumoauniversidadepr500/videos' target='_blank'>
            <p>Aulas Remotas durante a pandemia </p>
          </a>
        </div>
        <div data-src="/src/assets/libras.jpg" >
          <p>Interpréte de Libras</p>
        </div>
        <div data-src="/src/assets/aulao.jpg" ></div>
      </AutoplaySlider>
    </main>
    </>
  )
}
