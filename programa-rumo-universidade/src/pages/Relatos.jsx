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

export default function Relatos() {
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
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input  />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl>
              <FormLabel>Relate aqui:</FormLabel>
              <Textarea></Textarea>
            </FormControl>
            <Button colorScheme='blue'>Enviar</Button>
          </Stack>
        </div>
      </div>
     <div className={styles.reportContainer}>

     </div>
    </main>
  )
}
