import { ActionIcon, Affix, Group, Transition, useComputedColorScheme, useMantineColorScheme } from "@mantine/core"
import { Image } from '@mantine/core';
import { IconBrandGithub, IconLighter } from "@tabler/icons-react"
import { useWindowScroll } from '@mantine/hooks';
import Logo from "../noon.svg"
import NoonRoutes from "./NoonRoutes"

export default function NoonNavbar() {
    const [scroll] = useWindowScroll();
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });
    return (
        <Affix top={0} w="100vw" px="2vw" py="2vh">
            <Transition transition="slide-down" mounted={scroll.y <= 0}>
                {(transitionStyles) => (
                    <Group justify="space-between" style={transitionStyles}>
                        <ActionIcon component="a" href="https://github.com/team-noon" variant="transparent" size="xl" ><Image src={Logo} /></ActionIcon>
                        <NoonRoutes />
                        <Group justify="center">
                            <ActionIcon variant="default" size="xl" onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}><IconLighter /></ActionIcon>
                            <ActionIcon component="a" href="https://github.com/team-noon" variant="default" size="xl" ><IconBrandGithub /></ActionIcon>
                        </Group>
                    </Group>
                )}
            </Transition>
        </Affix>
    )
}