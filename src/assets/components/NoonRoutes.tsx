import { Text, Group, Menu } from "@mantine/core"
import { Link } from "@tanstack/react-router"

export default function NoonRoutes() {
    const Routes = ([
        {
            to: "/",
            label: "Home"
        },
        {
            to: "/for-sponsors",
            label: "For Sponsors",

        },
        {
            to: "/about",
            label: "About us"
        },
        {
            label: "Previous",
            subRoutes: ([
                {
                    to: "/previous/eindhoven",
                    label: "Eindhoven (2024)"
                },
                {
                    to: "/previous/bordeaux",
                    label: "Bordeaux (2023)"
                },
                {
                    to: "/previous/porto",
                    label: "Porto (2022)"
                }
            ])
        }
    ])
    return (
        <Group justify="center">
            {Routes.map(routeOptions => {
                if (routeOptions.subRoutes === undefined) {
                    return (
                        <Link style={{ textDecoration: "none", color: "inherit" }} key={routeOptions.to} {...routeOptions}>
                            {routeOptions.label}
                        </Link>
                    )
                }
                else {
                    return (
                        <Menu>
                            <Menu.Target>
                                <Text>{routeOptions.label}</Text>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Label>{routeOptions.label}</Menu.Label>
                                {routeOptions.subRoutes.map(subRouteOptions => {
                                    return (
                                        <Menu.Item>
                                            <Link style={{ textDecoration: "none", color: "inherit" }} key={subRouteOptions.to} {...subRouteOptions}>
                                                {subRouteOptions.label}
                                            </Link>
                                        </Menu.Item>
                                    )
                                })}
                            </Menu.Dropdown>
                        </Menu>
                    )
                }
            })}
        </Group>
    )
}