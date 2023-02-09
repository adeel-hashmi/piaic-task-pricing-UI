"use client";
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'

// const inter = Inter({ subsets: ['latin'] })
//chakra is a component library and has given replacement for existing components and therefore, we write between Chakra provider tags.
import { ChakraProvider, Heading, Text } from '@chakra-ui/react'
import Feature from './Feature';
import Footer from './Footer';
import Header from './Header';


import Practice from './practice';
import Pricing from './Pricing';

export default function Home() {
  return <ChakraProvider>
    <Header />
    <Pricing />
    <Feature />
    <Footer />
  </ChakraProvider>;
}