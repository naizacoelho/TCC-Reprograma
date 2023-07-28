import styles from '../styles/pages/relatos.module.css'
import { BsChatLeftHeart } from "react-icons/bs";
import {
  Stack, FormControl, FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button
} from '@chakra-ui/react';
import Card from '../componentes/Card';
import imagem from '../assets/fotinha.jpg'
import { useState } from "react"
import database from '../services/firebase'
import { ref, push, set, query, limitToLast } from 'firebase/database'

export default function Relatos() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [descricao, setDescricao] = useState("")
  const relatosRef = query(ref(database, 'relatos'), limitToLast(100));
  console.log(relatosRef)

  function handleInputNome(e) {

    setNome(e.target.value)
  }

  function handleInputEmail(e) {
    setEmail(e.target.value)
  }

  function handleInputDescricao(e) {
    setDescricao(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    const RelatosListRef = ref(database, 'relatos')
    const newRelatoRef = push(RelatosListRef)
    set(newRelatoRef, {
      nome: nome,
      email: email,
      relato: descricao,
    })

    setNome('')
    setEmail('')
    setDescricao('')
  }

  return (
    <main className={styles.background}>
      <div className={styles.formContainer} >
        <div className={styles.formText} >
          <BsChatLeftHeart size={'3rem'} />
          <h1> Já foi estudante do PRU?</h1>
          <h4>Deixe aqui o seu relato!</h4>
        </div>
        <div className={styles.form}  >
          <Stack spacing={3} className='w-100'>
            <h4>Qual a sua história com o PRU?</h4>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input onChange={handleInputNome} value={nome}/>
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' onChange={handleInputEmail} value={email} />
              </FormControl>
              <FormControl>
                <FormLabel>Relate aqui:</FormLabel>
                <Textarea onChange={handleInputDescricao} value={descricao}></Textarea>
              </FormControl>
              <Button colorScheme='blue' type="submit" >Enviar</Button>
            </form>

          </Stack>
        </div>
      </div>
      <div className={styles.reportContainer}>
        <h2 className={styles.title}>Relatinhos dos PRUalunos😍</h2>
        <div>
          <Card nome="noeme" descricao="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to mak" imagem={imagem} />
        </div>
      </div>

    </main>
  )
}
