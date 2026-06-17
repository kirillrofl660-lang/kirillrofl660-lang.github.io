import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Badge, Button, Flex } from '@chakra-ui/react'
import { Check } from 'lucide-react'
import { Reveal } from './motion'

const plans = [
  {
    name: 'Старт',
    price: 'от 60 000 ₽',
    desc: 'Лендинг для запуска продукта или услуги.',
    features: ['Дизайн под бренд', 'Адаптивная вёрстка', 'Форма заявки + CRM', 'Базовая аналитика', 'Запуск за 1-2 недели'],
    highlighted: false,
  },
  {
    name: 'Бизнес',
    price: 'от 150 000 ₽',
    desc: 'Корпоративный сайт с управлением контентом.',
    features: ['До 10 страниц', 'CMS и блог', 'SEO-оптимизация', 'Интеграции с CRM/1С', 'Хостинг и домен в подарок', 'Поддержка 1 месяц'],
    highlighted: true,
  },
  {
    name: 'Премиум',
    price: 'индивидуально',
    desc: 'Магазин или веб-приложение под ключ.',
    features: ['Сложная логика и интеграции', 'Личные кабинеты', 'Оплаты и каталог', 'Нагрузочное тестирование', 'Выделенная команда', 'Поддержка 3 месяца'],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <Box as="section" id="pricing" py={{ base: 16, md: 28 }} bg="sand.100">
      <Container maxW="6xl">
        <Reveal>
          <VStack gap={4} textAlign="center" mb={{ base: 10, md: 16 }}>
            <Badge px={3} py={1} borderRadius="full" bg="bronze.100" color="bronze.700" fontWeight={600}>
              Тарифы
            </Badge>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="-0.02em" color="graphite.700">
              Прозрачные цены
            </Heading>
            <Text fontSize="lg" color="graphite.500" maxW="2xl">
              Финальная стоимость зависит от задач. Назовём точную цифру после брифа.
            </Text>
          </VStack>
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6} alignItems="stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100}>
              <VStack
                align="flex-start"
                gap={6}
                h="full"
                p={8}
                borderRadius="3xl"
                bg={p.highlighted ? 'graphite.700' : 'white'}
                color={p.highlighted ? 'sand.50' : 'graphite.700'}
                border="1px solid"
                borderColor={p.highlighted ? 'graphite.700' : 'sand.200'}
                position="relative"
                transition="all 0.3s ease"
                transform={p.highlighted ? { md: 'scale(1.04)' } : undefined}
                _hover={{ transform: p.highlighted ? { md: 'scale(1.06)' } : 'translateY(-6px)' }}
                boxShadow={p.highlighted ? '0 40px 80px -40px rgba(54,50,51,0.8)' : 'none'}
              >
                {p.highlighted && (
                  <Badge
                    position="absolute"
                    top={5}
                    right={5}
                    px={3}
                    py={1}
                    borderRadius="full"
                    bg="bronze.500"
                    color="sand.50"
                    fontWeight={600}
                  >
                    Популярный
                  </Badge>
                )}
                <VStack align="flex-start" gap={1}>
                  <Text fontWeight={600} color={p.highlighted ? 'sand.300' : 'taupe.500'}>
                    {p.name}
                  </Text>
                  <Heading fontSize="3xl" color={p.highlighted ? 'sand.50' : 'graphite.700'}>
                    {p.price}
                  </Heading>
                  <Text fontSize="sm" color={p.highlighted ? 'sand.300' : 'graphite.500'}>
                    {p.desc}
                  </Text>
                </VStack>

                <VStack align="flex-start" gap={3} flex={1}>
                  {p.features.map((f) => (
                    <HStack key={f} gap={3} align="flex-start">
                      <Flex
                        w={5}
                        h={5}
                        mt="2px"
                        align="center"
                        justify="center"
                        borderRadius="full"
                        bg={p.highlighted ? 'bronze.500' : 'bronze.100'}
                        color={p.highlighted ? 'sand.50' : 'bronze.600'}
                        flexShrink={0}
                      >
                        <Check size={12} />
                      </Flex>
                      <Text fontSize="sm" color={p.highlighted ? 'sand.200' : 'graphite.600'}>
                        {f}
                      </Text>
                    </HStack>
                  ))}
                </VStack>

                <Button
                  w="full"
                  size="lg"
                  borderRadius="full"
                  colorPalette="brand"
                  variant={p.highlighted ? 'solid' : 'outline'}
                  borderColor={p.highlighted ? undefined : 'sand.400'}
                  color={p.highlighted ? undefined : 'graphite.700'}
                  asChild
                >
                  <a href="#order">Обсудить проект</a>
                </Button>
              </VStack>
            </Reveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
