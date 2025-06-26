import { Center } from '@mantine/core'
import { createLazyFileRoute } from '@tanstack/react-router'
import Logo from "../assets/noon.svg"
import { Image } from '@mantine/core'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <Center h="100vh">
      <Image radius="md" src={Logo} h="auto" w="10vw" />
    </Center>
  )
}