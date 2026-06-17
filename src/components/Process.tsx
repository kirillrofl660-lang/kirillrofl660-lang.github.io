import { Box, Container, Heading, Text, VStack, HStack, Flex, Badge, SimpleGrid } from '@chakra-ui/react'
import { MessageSquare, Search, PenTool, Code2, Rocket, HeartHandshake } from 'lucide-react'
import { Reveal } from './motion'

const steps = [
  { icon: MessageSquare, title: 'Заявка', desc: 'Обсуждаем задачу, цели и бюджет. Бесплатная консультация в течение дня.' },
  { icon: Search, title: 'Анализ и бриф', desc: 'Изучаем нишу и конкурентов, фиксируем требования и структуру проекта.' },
  { icon: PenTool, title: 'Дизайн', desc: 'Прототип и визуальная концепция. Согласуем каждый экран до разработки.' },
  { icon: Code2, title: 'Разработка', desc: 'Верстаем и программируем, подключаем CMS и интеграции. Прозрачные демо.' },
  { icon: Rocket, title: 'Запуск', desc: 'Тестируем, переносим на хостинг и публикуем. Настраиваем аналитику.' },
  { icon: HeartHandshake, title: 'Поддержка', desc: 'Сопровождаем проект, развиваем и улучшаем по метрикам.' },
]

export function Process() {
  return (
    <Box as="section" id="process" py={{ base: 16, md: 28 }} bg="graphite.700" color="sand.50">
      <Container maxW="6xl">
        <Reveal>
          <VStack gap={4} textAlign="center" mb={{ base: 10, md: 16 }}>
            <Badge px={3} py={1} borderRadius="full" bg="whiteAlpha.200" color="sand.300" fontWeight={600}>
              Как мы работаем
            </Badge>
            <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="-0.02em" color="sand.50">
              Прозрачный процесс из 6 шагов
            </Heading>
            <Text fontSize="lg" color="sand.300" maxW="2xl">
              Вы всегда знаете, на каком этапе проект и что будет дальше.
            </Text>
          </VStack>
        </Reveal>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <Reveal key={s.title} delay={i * 80}>
                <VStack
                  align="flex-start"
                  gap={4}
                  h="full"
                  p={7}
                  borderRadius="2xl"
                  bg="whiteAlpha.50"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  transition="all 0.3s ease"
                  _hover={{ borderColor: 'bronze.400', bg: 'whiteAlpha.100' }}
                >
                  <HStack justify="space-between" w="full">
                    <Flex
                      w={12}
                      h={12}
                      align="center"
                      justify="center"
                      borderRadius="xl"
                      bg="bronze.500"
                      color="sand.50"
                    >
                      <Icon size={22} />
                    </Flex>
                    <Text fontFamily="heading" fontSize="3xl" fontWeight={700} color="whiteAlpha.300">
                      0{i + 1}
                    </Text>
                  </HStack>
                  <Heading fontSize="xl" color="sand.50">
                    {s.title}
                  </Heading>
                  <Text color="sand.300" lineHeight={1.6}>
                    {s.desc}
                  </Text>
                </VStack>
              </Reveal>
            )
          })}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
