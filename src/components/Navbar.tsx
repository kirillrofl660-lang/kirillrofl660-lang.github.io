import { useEffect, useState } from 'react'
import { Box, Container, Flex, HStack, Link, Button, Text } from '@chakra-ui/react'
import { Boxes, Menu, X } from 'lucide-react'

const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'Ресурсы', href: '#resources' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Тарифы', href: '#pricing' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={100}
      transition="all 0.3s ease"
      bg={scrolled ? 'rgba(250,247,243,0.82)' : 'transparent'}
      backdropFilter={scrolled ? 'blur(14px)' : 'none'}
      borderBottom={scrolled ? '1px solid' : '1px solid transparent'}
      borderColor="sand.200"
    >
      <Container maxW="6xl" py={{ base: 3, md: 4 }}>
        <Flex align="center" justify="space-between">
          <HStack gap={2}>
            <Flex
              w={9}
              h={9}
              align="center"
              justify="center"
              borderRadius="xl"
              bg="bronze.500"
              color="sand.50"
            >
              <Boxes size={20} />
            </Flex>
            <Text fontFamily="heading" fontWeight={700} fontSize="lg" color="graphite.700">
              Династия
            </Text>
          </HStack>

          <HStack gap={7} display={{ base: 'none', md: 'flex' }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                fontSize="sm"
                fontWeight={500}
                color="graphite.600"
                _hover={{ color: 'bronze.600', textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            ))}
          </HStack>

          <HStack gap={2}>
            <Button
              colorPalette="brand"
              size="sm"
              borderRadius="full"
              px={5}
              display={{ base: 'none', sm: 'inline-flex' }}
              asChild
            >
              <a href="#order">Оставить заявку</a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              display={{ base: 'inline-flex', md: 'none' }}
              onClick={() => setOpen((p) => !p)}
              aria-label="Меню"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </HStack>
        </Flex>

        {open && (
          <Flex
            direction="column"
            gap={1}
            mt={3}
            pb={2}
            display={{ base: 'flex', md: 'none' }}
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                py={2}
                fontWeight={500}
                color="graphite.600"
                onClick={() => setOpen(false)}
                _hover={{ color: 'bronze.600', textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            ))}
            <Button colorPalette="brand" mt={2} borderRadius="full" asChild>
              <a href="#order" onClick={() => setOpen(false)}>
                Оставить заявку
              </a>
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  )
}
