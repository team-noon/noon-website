import { Center, Stack } from '@mantine/core'
import { createLazyFileRoute } from '@tanstack/react-router'
import { Title } from '@mantine/core'
import { Text } from '@mantine/core'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <Center h="100vh">
        <Title td="underline">About us</Title>
      </Center>
      <Stack gap={0} px="20vw" bg="transparent">
        <Text>The Hu-More-Bot team was originally founded in 2019 under the name Robo quartet.</Text>
        <Text>We all love robotics and technology, that's what brought us together as a team, although the team members have changed over the years. Our team has been accumulating success since the beginning, because in the year of its foundation, we won the MIRK 2019 OnStage league with our performance “The Bremen Town Musicians”.</Text>
        <Text>In the same year, some of us from the team also participated in other competitions, such as the Robot Exatlon held in Nyíregyháza. After that, as we all remember, the 2020-21 pandemic followed and the whole country was forced to work from home, but this did not deter us. We spent these two years preparing a more ambitious show called Treasure hunters. With this performance, we achieved not only domestic but international success, as we made it to the 2022 RoboCup Junior Europen in Porto, from which we returned with the special award for Best Technical Solutions. This competition gave us a huge boost, as we decided that we would like to qualify for next year's World Championship.</Text>
        <Text>So we started working under the name Hu-More-Bot. Their performance in 2023 was called The Ladybug of Szeged, which was also a great success with the Hungarian audience, as it was about a Hungarian invention, Dr. Dániel Muszka's robot ladybug, so we made it to the second time. This time, however, we traveled to Bordeaux, France, for the World Championship.</Text>
        <Text>This competition is a world-wide known and recognized competition, where not only the competition but also the technological innovations are given considerable emphasis. This competition provided us with a great experience and we also won the OnStage superteam league with the Slovak and Japanese teams in 2023.</Text>
        <Text>We are currently looking for sponsors for our trip to the World Cup this year in Salvador, Brazil.</Text>
      </Stack>
    </>
  )
}
