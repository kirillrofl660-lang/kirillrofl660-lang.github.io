import { Box, Container, Heading, Text, VStack, HStack, Flex, SimpleGrid, Badge } from '@chakra-ui/react'
import { Server, Globe, Component, Image, BarChart3, ShieldCheck, Check } from 'lucide-react'
import { Reveal } from './motion'

const resources = [
  { icon: Server, title: 'Хостинг и серверы', desc: 'Быстрый и защищённый хостинг с резервным копированием.' },
  { icon: Globe, title: 'Домены и почта', desc: 'Регистрация домена и корпоративная почта на вашем имени.' },
  { icon: Component, title: 'Библиотека компонентов', desc: 'Готовые блоки и UI-кит для быстрого старта проекта.' },
  { icon: Image, title: 'Медиа и иллюстрации', desc: 'Подборки изображений, иконок и анимаций под бренд.' },
  { icon: BarChart3, title: 'Аналитика', desc: 'Подключим метрики, цели и дашборды для роста.' },
  { icon: ShieldCheck, title: 'SSL и безопасность', desc: 'Сертификаты, защита от атак и мониторинг 24/7.' },
]

const included = [
  'Доступ к панели управления проектом',
  'Готовые шаблоны и дизайн-система',
  'Документация и видео-инструкции',
  'Техническая поддержка в чате',
]

export function Resources() {
  return (
    <Box as="section" id="resources" py={{ base: 16, md: 28 }} bg="sand.100">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 10, lg: 16 }} alignItems="center">
          <Reveal direction="right">
            <VStack align="flex-start" gap={6}>
              <Badge px={3} py={1} borderRadius="full" bg="bronze.100" color="bronze.700" fontWeight={600}>
                Ресурсы для запуска
              </Badge>
              <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="-0.02em" color="graphite.700">
                Всё необходимое — в одном месте
              </Heading>
              <Text fontSize="lg" color="graphite.500">
                Мы не просто делаем сайт, а даём готовую инфраструктуру для его жизни и роста.
                Вам не нужно искать подрядчиков по отдельности.
              </Text>
              <VStack align="flex-start" gap={3} w="full">
                {included.map((it) => (
                  <HStack key={it} gap={3}>
                    <Flex
                      w={6}
                      h={6}
                      align="center"
                      justify="center"
                      borderRadius="full"
                      bg="bronze.500"
                      color="sand.50"
                      flexShrink={0}
                    >
                      <Check size={14} />
                    </Flex>
                    <Text color="graphite.600" fontWeight={500}>
                      {it}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Reveal>

          <SimpleGrid columns={{ base: 1, sm: 2 }} gap={5}>
            {resources.map((r, i) => {
              const Icon = r.icon
              return (
                <Reveal key={r.title} delay={i * 80} direction="left">
                  <VStack
                    align="flex-start"
                    gap={3}
                    h="full"
                    p={6}
                    borderRadius="2xl"
                    bg="white"
                    border="1px solid"
                    borderColor="sand.200"
                    transition="all 0.3s ease"
                    _hover={{ transform: 'translateY(-4px)', boxShadow: '0 24px 50px -30px rgba(97,55,8,0.45)' }}
                  >
                    <Flex
                      w={11}
                      h={11}
                      align="center"
                      justify="center"
                      borderRadius="lg"
                      bg="sand.100"
                      color="bronze.600"
                    >
                      <Icon size={22} />
                    </Flex>
                    <Heading fontSize="md" color="graphite.700">
                      {r.title}
                    </Heading>
                    <Text fontSize="sm" color="graphite.500" lineHeight={1.55}>
                      {r.desc}
                    </Text>
                  </VStack>
                </Reveal>
              )
            })}
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
