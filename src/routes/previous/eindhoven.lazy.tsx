import { Center, Title } from '@mantine/core'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/previous/eindhoven')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Center h="100vh">
        <Title>Eindhoven (2024)</Title>
      </Center>
    </>
  ) 
}

