// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
  solid: {
    bgGradient: "linear(to-r, primary.600, primary.500)",
    color: "white",
    _active: {},
    _hover: {
      transform: "scale(0.98)",
      bgGradient: "linear(to-r, primary.500, primary.400)",
    },
    _focus: {},
    _loading: { opacity: 1 }
  },
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme