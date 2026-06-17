import { Box, Container, Heading, Text, SimpleGrid, VStack, Flex, HStack, Badge } from '@chakra-ui/react'
import { LayoutTemplate, ShoppingCart, Building2, AppWindow, Paintbrush, LifeBuoy } from 'lucide-react'
import { Reveal } from './motion'

const services = [
  {
    icon: LayoutTemplate,
    title: 'Лендинги',
    desc: 'Продающие одностраничники с анимациями, которые конвертируют посетителей в заявки.',
    tags: ['1-2 недели', 'от 60 000 ₽'],
  },
  {
    icon: Building2,
    title: 'Корпоративные сайты',
    desc: 'Многостраничные сайты с CMS, каталогами и блогом. Удобное управление контентом.',
    tags: ['3-5 недель', 'от 150 000 ₽'],
  },
  {
    icon: ShoppingCart,
    title: 'Интернет-магазины',
    desc: 'Каталог, корзина, оплата и интеграции с 1С/CRM. Готовы к продажам с первого дня.',
    tags: ['4-8 недель', 'от 250 000 ₽'],
  },
  {
    icon: AppWindow,
    title: 'Веб-приложения',
    desc: 'Сложные SPA и сервисы на React: личные кабинеты, дашборды, маркетплейсы.',
    tags: ['от 6 недель', 'от 350 000 ₽'],
  },
  {
    icon: Paintbrush,
    title: 'Дизайн и UI/UX',
    desc: 'Прототипы, дизайн-система и фирменный стиль. Современно, удобно, узнаваемо.',
    tags: ['1-3 недели', 'от 80 000 ₽'],
  },
  {
    icon: LifeBuoy,
    title: 'Поддержка и развитие',
    desc: 'Сопровождение, доработки, мониторинг и обновления. Сайт всегда онлайн.',
    tags: ['ежемесячно', 'от 20 000 ₽'],
  },
]

export function Services() {
  return (
    <Box as="section" id="services" py={{ base: 16, md: 28 }} bg="sand.50">
      <Container maxW="6xl">
        <Reveal>
          <VStack gap={4} textAlign="center" mb={{ base: 10, md: 16 }}>
            <Badge px={3} py={1} borderRadius="full" bg="sand.200" color="taupe.600" fontWeight={600}>
              Что мы делаем
            </Badge>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="-0.02em" color="graphite.700">
              Услуги под любую задачу
            </Heading>
            <Text fontSize="lg" color="graphite.500" maxW="2xl">
              Берём проект целиком — от стратегии и дизайна до разработки и запуска.
            </Text>
          </VStack>
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 90}>
                <VStack
                  align="flex-start"
                  gap={5}
                  h="full"
                  p={8}
                  borderRadius="2xl"
                  bg="white"
                  border="1px solid"
                  borderColor="sand.200"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: 'translateY(-6px)',
                    borderColor: 'bronze.300',
                    boxShadow: '0 28px 60px -32px rgba(97,55,8,0.5)',
                  }}
                >
                  <Flex
                    w={14}
                    h={14}
                    align="center"
                    justify="center"
                    borderRadius="xl"
                    bg="bronze.50"
                    color="bronze.500"
                  >
                    <Icon size={26} />
                  </Flex>
                  <VStack align="flex-start" gap={2}>
                    <Heading fontSize="xl" color="graphite.700">
                      {s.title}
                    </Heading>
                    <Text color="graphite.500" lineHeight={1.6}>
                      {s.desc}
                    </Text>
                  </VStack>
                  <HStack gap={2} pt={1} wrap="wrap">
                    {s.tags.map((t) => (
                      <Badge
                        key={t}
                        px={3}
                        py={1}
                        borderRadius="full"
                        bg="sand.100"
                        color="taupe.700"
                        fontWeight={500}
                      >
                        {t}
                      </Badge>
                    ))}
                  </HStack>
                </VStack>
              </Reveal>
            )
          })}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
