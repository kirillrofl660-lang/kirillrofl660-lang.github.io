import { Box, Container, Flex, HStack, VStack, Text, Link, SimpleGrid } from '@chakra-ui/react'
import { Boxes } from 'lucide-react'

const cols = [
  {
    title: 'Услуги',
    links: ['Лендинги', 'Корпоративные сайты', 'Интернет-магазины', 'Веб-приложения'],
  },
  {
    title: 'Студия',
    links: ['О нас', 'Кейсы', 'Процесс', 'Тарифы'],
  },
  {
    title: 'Контакты',
    links: ['hello@dynasty.studio', '+7 (900) 000-00-00', 'Telegram', 'VK'],
  },
]

export function Footer() {
  return (
    <Box as="footer" bg="graphite.800" color="sand.300" py={{ base: 12, md: 16 }}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={10} mb={12}>
          <VStack align="flex-start" gap={4}>
            <HStack gap={2}>
              <Flex w={9} h={9} align="center" justify="center" borderRadius="xl" bg="bronze.500" color="sand.50">
                <Boxes size={20} />
              </Flex>
              <Text fontFamily="heading" fontWeight={700} fontSize="lg" color="sand.50">
                Династия
              </Text>
            </HStack>
            <Text fontSize="sm" maxW="260px">
              Студия создания сайтов под ключ. Дизайн, разработка, ресурсы и поддержка в одной команде.
            </Text>
          </VStack>

          {cols.map((c) => (
            <VStack key={c.title} align="flex-start" gap={3}>
              <Text fontWeight={600} color="sand.100">
                {c.title}
              </Text>
              {c.links.map((l) => (
                <Link
                  key={l}
                  href="#"
                  fontSize="sm"
                  color="sand.300"
                  _hover={{ color: 'bronze.400', textDecoration: 'none' }}
                >
                  {l}
                </Link>
              ))}
            </VStack>
          ))}
        </SimpleGrid>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          gap={3}
          pt={8}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Text fontSize="sm">© {new Date().getFullYear()} Студия «Династия». Все права защищены.</Text>
          <HStack gap={6}>
            <Link href="#" fontSize="sm" color="sand.300" _hover={{ color: 'bronze.400', textDecoration: 'none' }}>
              Политика конфиденциальности
            </Link>
            <Link href="#" fontSize="sm" color="sand.300" _hover={{ color: 'bronze.400', textDecoration: 'none' }}>
              Договор оферты
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
