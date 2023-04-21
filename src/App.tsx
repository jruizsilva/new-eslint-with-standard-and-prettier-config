import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'

import theme from './theme/theme'
// clean the localstorage if the initial theme is not working
export function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <h2>App</h2>
    </ChakraProvider>
  )
}
