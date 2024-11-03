import * as React from 'react'
import { Text, Center, VStack, useTheme, useColorModeValue } from 'native-base'

export default function Main() {
  const theme = useTheme()
  const bgColor = useColorModeValue('primary.50', 'primary.900')
  return (
    <Center flex={1} bg={bgColor}>
      <VStack space={4}>
        <Text fontSize="xl" color={theme.colors.primary[500]}>
          Welcome to Animated Todo!
        </Text>
        <Text fontSize="md" color={theme.colors.primary[500]}>
          This is a simple todo app with animations built using React Native and
          NativeBase.
        </Text>
        <Text fontSize="md" color={theme.colors.primary[500]}>
          You can start by adding a new todo item below.
        </Text>
        <Text fontSize="md" color={theme.colors.primary[500]}>
          You can also toggle the theme using the switch below.
        </Text>
      </VStack>
    </Center>
  )
}
