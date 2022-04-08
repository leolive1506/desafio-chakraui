import { Box, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Box bgImage="url('/imgs/background.png')" >
        <Grid
          templateColumns={'repeat(2, 1fr)'} gap="24"
          justifyContent="space-between"
          alignItems="center"
          mx='auto' maxW="1400px"
        >
          <GridItem w='100%' h='100%' px="6">
            <Stack 
              
              height='20rem'
              justify="center"
              spacing={['6']}
              align="flex-start"
              direction={['column']}
            >
              <Text 
                color={'whiteAlpha.900'} 
                fontWeight={'500'}
                lineHeight="54px"
                fontSize="4xl"
              >
                5 Continentes,<br /> infinitas possibilidades
              </Text>
              <Text 
                fontSize={['20px']}
                color={'whiteAlpha.800'}
                line-height="3xl"
                fontWeight="400"
              >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou...
                </Text>
              {/* <Image src="/imgs/background.png" alt="Background img" /> */}
            </Stack>
          </GridItem>
          <GridItem mb="-28">
            <Image src="/imgs/airplane.svg" alt="Airplane" boxSize='450px'/>
          </GridItem>

        </Grid>
      </Box>
      
    </>
  )
}

export default Home
