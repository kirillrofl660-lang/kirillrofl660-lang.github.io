import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Badge, Flex } from '@chakra-ui/react'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './motion'

const cases = [
  {
    title: 'Aurum Coffee',
    category: 'Интернет-магазин',
    result: '+180% к онлайн-продажам',
    gradient: 'linear-gradient(135deg, #7B515F, #23131E)',
  },
  {
    title: 'Nordic Estate',
    category: 'Корпоративный сайт',
    result: '×3 заявок с сайта',
    gradient: 'linear-gradient(135deg, #C17C75, #23131E)',
  },
  {
    title: 'Pulse Fitness',
    category: 'Лендинг + CRM',
    result: 'Конверсия 9,4%',
    gradient: 'linear-gradient(135deg, #FC9A64, #23131E)',
  },
  {
    title: 'Verde Market',
    category: 'Веб-приложение',
    result: '40k активных пользователей',
    gradient: 'linear-gradient(135deg, #7B515F, #C17C75)',
  },
]

export function Cases() {
  return (
    <Box as="section" id="cases" py={{ base: 16, md: 28 }} bg="sand.50">
      <Container maxW="6xl">
        <Reveal>
          <VStack gap={4} textAlign="center" mb={{ base: 10, md: 16 }}>
            <Badge px={3} py={1} borderRadius="full" bg="sand.200" color="taupe.600" fontWeight={600}>
              Кейсы
            </Badge>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="-0.02em" color="graphite.700">
              Результаты, которыми гордимся
            </Heading>
            <Text fontSize="lg" color="graphite.500" maxW="2xl">
              Несколько проектов, где сайт стал точкой роста для бизнеса.
            </Text>
          </VStack>
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <Box
                role="group"
                position="relative"
                h={{ base: '260px', md: '320px' }}
                borderRadius="3xl"
                overflow="hidden"
                cursor="pointer"
                style={{ background: c.gradient }}
                transition="all 0.4s ease"
                _hover={{ transform: 'translateY(-6px)', boxShadow: '0 40px 80px -40px rgba(54,50,51,0.7)' }}
              >
                <Box
                  position="absolute"
                  inset={0}
                  bg="blackAlpha.300"
                  opacity={0}
                  transition="opacity 0.4s ease"
                  _groupHover={{ opacity: 1 }}
                />
                <Flex direction="column" justify="space-between" h="full" p={8} position="relative" color="sand.50">
                  <HStack justify="space-between" align="flex-start">
                    <Badge
                      px={3}
                      py={1}
                      borderRadius="full"
                      bg="whiteAlpha.300"
                      color="sand.50"
                      backdropFilter="blur(6px)"
                      fontWeight={600}
                    >
                      {c.category}
                    </Badge>
                    <Flex
                      w={10}
                      h={10}
                      align="center"
                      justify="center"
                      borderRadius="full"
                      bg="whiteAlpha.300"
                      backdropFilter="blur(6px)"
                      transition="all 0.3s ease"
                      _groupHover={{ bg: 'sand.50', color: 'graphite.700' }}
                    >
                      <ArrowUpRight size={20} />
                    </Flex>
                  </HStack>
                  <VStack align="flex-start" gap={1}>
                    <Heading fontSize={{ base: '2xl', md: '3xl' }}>{c.title}</Heading>
                    <Text fontWeight={600} color="sand.200">
                      {c.result}
                    </Text>
                  </VStack>
                </Flex>
              </Box>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
