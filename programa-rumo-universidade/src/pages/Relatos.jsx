import styles from '../styles/pages/relatos.module.css'
import { BsChatLeftHeart } from "react-icons/bs";
import {
  Stack, FormControl, FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Grid,
  useToast
} from '@chakra-ui/react';
import Card from '../componentes/Card';
import imagem from '../assets/fotinha.jpg'
import { useState, useEffect } from "react"
import database from '../services/firebase'
import { ref, push, set, get, child } from 'firebase/database'

export default function Relatos() {

  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [descricao, setDescricao] = useState("")
  const [relatoList, setRelatoList] = useState([]);
  const dbRef = ref(database)
  const toast = useToast()

  useEffect(() => {
    getListData();
  }, []);

  async function getListData() {
    let tempList = [];
    await get(child(dbRef, `relatos`))
      .then((snapshot) => {
        snapshot.forEach((child) => {
          tempList.push(child.val())
        })
      })
    setRelatoList(tempList)
  }

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
    toast({
      title: 'Relato recebido',
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
    getListData()
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

          <form onSubmit={handleSubmit}>
            <Stack spacing={3} className='w-100'>
              <h4>Qual a sua história com o PRU?</h4>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input onChange={handleInputNome} value={nome} />
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
            </Stack>
          </form>
        </div>
      </div>
      <div className={styles.reportContainer}>
        <h2 className={styles.title}>Relatinhos dos PRUalunos😍</h2>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          {
            relatoList.map((relato) => {
              return (
                <Card nome={relato.nome} descricao={relato.relato} imagem={imagem} />
              )
            })
          }
        </Grid>
      </div>
    </main>
  )
}
