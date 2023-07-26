import styles from '../styles/componentes/footer.module.css'
import { GrInstagram, GrFacebook, GrYoutube } from "react-icons/gr";
import imagemPru from '../assets/logo-pru-branco.png'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { useRef } from 'react'

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <footer className={styles.footerContainer}>
      <div className={`${styles.footerContent} container`}>
        <img className={styles.logoContainer} src={imagemPru} alt="Logo PRU branco" />
        <nav className={styles.footerSocials}>
          <a href='https://www.instagram.com/rumoauniversidadepru/' target='_blank'>
            <GrInstagram className={styles.footerIcon} size={"2.5rem"} color='white' title='Link para página do instagram' /></a>
          <a href='https://www.facebook.com/PRUProjetoRumoaUniversidade/?locale=pt_BR' target='_blank'>
            <GrFacebook className={styles.footerIcon} size={"2.5rem"} color='white' title='Link para página do facebook' /></a>
          <a href='https://www.youtube.com/@projetorumoauniversidadepr500/videos' target='_blank'>
            <GrYoutube className={styles.footerIcon} size={"2.5rem"} color='white' title='Link para canal no youtube' /></a>
        </nav>
        
        <span className={styles.footerBtn} onClick={onOpen}>Ficou com dúvidas?</span>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Dúvidas?</DrawerHeader>

            <DrawerBody>

              <Stack spacing={3}>
                <Input placeholder='Nome' />
                <Input placeholder='E-mail' />
                <Textarea placeholder='Digite aqui sua dúvida' />
                <Button colorScheme='blue'>Enviar</Button>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2023 Naíza Coelho. Todos os direitos reservados.</p>
      </div>
    </footer >
  )
}
