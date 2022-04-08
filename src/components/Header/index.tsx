import { Flex, Image } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex justify={'center'} alignItems={'center'} py={'6'}>
            <Image src='/imgs/logo.jpg' alt="Logo" />
        </Flex>
    )
}