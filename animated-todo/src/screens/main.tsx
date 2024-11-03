import * as React from 'react'
import {
  Text,
  Center,
  Box,
  VStack,
  useTheme,
  useColorModeValue
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'

export default function MainScreen() {
  const theme = useTheme()
  const bgColor = useColorModeValue('primary.50', 'primary.900')
  return (
    <Center
      _dark={{ bg: 'primary.900' }}
      _light={{ bg: 'primary.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Box>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}
