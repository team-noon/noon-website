import { Center, Title } from '@mantine/core'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/previous/porto')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Center h="100vh">
        <Title>Porto (2022)</Title>
      </Center>
    </>
  ) 
}
