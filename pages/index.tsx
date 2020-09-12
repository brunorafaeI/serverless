// import Head from 'next/head'

import { Heading, Grid, Image, Flex, Link, Button, Text } from '@chakra-ui/core'
import Divider from '../components/Divider'
import Input from '../components/Input'
import { useState, FormEvent } from 'react'
import axios from 'axios'

export default function Home() {
  // return (
  //   <Grid
  //     as="main"
  //     height="100vh"
  //     templateColumns="1fr 480px 480px 1fr"
  //     templateRows="1fr 480px 1fr"
  //     templateAreas="
  //       '. . . .'
  //       '. logo form .'
  //       '. . . .'
  //     "
  //     justifyContent="center"
  //     alignItems="center"
  //   >
  //     <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
  //       <img src="/rocketseat.svg" alt="Rocketseat" />

  //       <Heading size="2xl" lineHeight="shorter" marginTop={16}>
  //         Faça seu login na plataforma
  //       </Heading>
  //     </Flex>

  //     <Flex 
  //       gridArea="form"
  //       height="100%"
  //       backgroundColor="gray.700"
  //       borderRadius="md"
  //       flexDir="column"
  //       alignItems="stretch"
  //       padding={16}
  //     >
  //       <Input
  //         placeholder="E-mail"
  //       />

  //       <Input
  //         placeholder="Senha"
  //         marginTop={2}
  //       />

  //       <Link
  //         alignSelf="flex-start"
  //         marginTop={2}
  //         fontSize="sm"
  //         color="purple.600"
  //         fontWeight="bold"
  //         _hover={{ color: 'purple.500' }}
  //       >
  //         Esqueci minha senha
  //       </Link>

  //       <Button
  //         backgroundColor="purple.500"
  //         height="50px"
  //         borderRadius="sm"
  //         marginTop={6}
  //         _hover={{ backgroundColor: 'purple.600' }}
  //       >
  //         ENTRAR
  //       </Button>

  //       <Text
  //         textAlign="center"
  //         fontSize="sm"
  //         color="gray.300"
  //         marginTop={6}
  //       >
  //         Não tem uma conta? {" "}
  //         <Link
  //           color="purple.600"
  //           fontWeight="bold"
  //           _hover={{ color: 'purple.500' }}
  //         >
  //           Registre-se
  //         </Link>
  //       </Text>

  //       <Divider />

  //       <Flex alignItems="center">
  //         <Text fontSize="sm">Ou entre com</Text>
  //         <Button
  //           height="50px"
  //           flex="1"
  //           backgroundColor="gray.600"
  //           marginLeft={6}
  //           borderRadius="sm"
  //           _hover={{ backgroundColor: 'purple.500' }}
  //         >
  //           GITHUB
  //         </Button>
  //       </Flex>
  //     </Flex>
  //   </Grid>
  // )

const [email, setEmail] = useState('')

async function handleSignUpToNewsletter(event: FormEvent) {
  event.preventDefault()

  const { data } = await axios.post('/api/subscribe', { email })

  console.log(data);

}


return (
  <Flex
    as="main"
    height="100vh"
    justifyContent="center"
    alignItems="center"
  >
    <Flex
      as="form"
      onSubmit={handleSignUpToNewsletter}
      backgroundColor="gray.700"
      borderRadius="md"
      flexDir="column"
      alignItems="stretch"
      padding={8}
      marginTop={4}
      width="100%" 
      maxW="400px"
    >
      <Image marginBottom={8} src="/rocketseat.svg" alt="Rocketseat" />

      <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
        Assine a newsletter da Rocketseat e receba os melhores conteúdos sobre programação!
      </Text>

      <Input
        placeholder="Seu melhor e-mail"
        marginTop={2}
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <Button
        type="submit"
        backgroundColor="purple.500"
        height="50px"
        borderRadius="sm"
        marginTop={6}
        _hover={{ backgroundColor: 'purple.600' }}
      >
        INSCREVER
      </Button>
    </Flex>
  </Flex>
)
}
