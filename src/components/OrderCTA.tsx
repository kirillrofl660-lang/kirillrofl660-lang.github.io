import { useState, type FormEvent } from 'react'
import { Box, Container, Heading, Text, VStack, HStack, SimpleGrid, Input, Textarea, Button, Flex, Stack } from '@chakra-ui/react'
import { Send, Mail, Phone, Clock, CheckCircle2 } from 'lucide-react'
import { Reveal } from './motion'

const contacts = [
  { icon: Mail, label: 'Почта', value: 'hello@dynasty.studio' },
  { icon: Phone, label: 'Телефон', value: '+7 (900) 000-00-00' },
  { icon: Clock, label: 'Ответим', value: 'в течение 1 рабочего дня' },
]

const budgets = ['до 100 000 ₽', '100–300 тыс ₽', '300 тыс – 1 млн ₽', 'более 1 млн ₽']

export function OrderCTA() {
  const [sent, setSent] = useState(false)
  const [budget, setBudget] = useState(budgets[1])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <Box as="section" id="order" py={{ base: 16, md: 28 }} bg="graphite.700" color="sand.50">
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 16 }} alignItems="center">
          <Reveal direction="right">
            <VStack align="flex-start" gap={6}>
              <Heading fontSize={{ base: '3xl', md: '5xl' }} letterSpacing="-0.02em" lineHeight={1.1}>
                Расскажите о проекте — <Box as="span" color="bronze.400">мы посчитаем</Box>
              </Heading>
              <Text fontSize="lg" color="sand.300">
                Оставьте заявку, и мы свяжемся с вами, чтобы обсудить задачу, сроки и бюджет.
                Консультация — бесплатно.
              </Text>
              <VStack align="flex-start" gap={4} pt={2}>
                {contacts.map((c) => {
                  const Icon = c.icon
                  return (
                    <HStack key={c.label} gap={4}>
                      <Flex
                        w={11}
                        h={11}
                        align="center"
                        justify="center"
                        borderRadius="xl"
                        bg="whiteAlpha.100"
                        color="bronze.400"
                      >
                        <Icon size={20} />
                      </Flex>
                      <VStack align="flex-start" gap={0}>
                        <Text fontSize="sm" color="sand.400">
                          {c.label}
                        </Text>
                        <Text fontWeight={600}>{c.value}</Text>
                      </VStack>
                    </HStack>
                  )
                })}
              </VStack>
            </VStack>
          </Reveal>

          <Reveal direction="left">
            <Box p={{ base: 6, md: 8 }} borderRadius="3xl" bg="sand.50" color="graphite.700">
              {sent ? (
                <VStack gap={4} py={10} textAlign="center">
                  <Flex w={16} h={16} align="center" justify="center" borderRadius="full" bg="bronze.50" color="bronze.500">
                    <CheckCircle2 size={36} />
                  </Flex>
                  <Heading fontSize="2xl">Заявка отправлена!</Heading>
                  <Text color="graphite.500">
                    Спасибо! Мы свяжемся с вами в ближайшее время.
                  </Text>
                  <Button mt={2} variant="outline" borderColor="sand.400" borderRadius="full" onClick={() => setSent(false)}>
                    Отправить ещё одну
                  </Button>
                </VStack>
              ) : (
                <form onSubmit={handleSubmit}>
                  <VStack gap={5} align="stretch">
                    <Heading fontSize="2xl">Оставить заявку</Heading>

                    <Box>
                      <Text fontSize="sm" fontWeight={600} mb={2} color="graphite.600">
                        Как вас зовут
                      </Text>
                      <Input
                        required
                        placeholder="Иван Иванов"
                        bg="white"
                        borderColor="sand.300"
                        borderRadius="xl"
                        size="lg"
                        _focus={{ borderColor: 'bronze.500', boxShadow: '0 0 0 1px var(--chakra-colors-bronze-500)' }}
                      />
                    </Box>

                    <Box>
                      <Text fontSize="sm" fontWeight={600} mb={2} color="graphite.600">
                        Телефон или e-mail
                      </Text>
                      <Input
                        required
                        placeholder="+7 ... или mail@example.com"
                        bg="white"
                        borderColor="sand.300"
                        borderRadius="xl"
                        size="lg"
                        _focus={{ borderColor: 'bronze.500', boxShadow: '0 0 0 1px var(--chakra-colors-bronze-500)' }}
                      />
                    </Box>

                    <Box>
                      <Text fontSize="sm" fontWeight={600} mb={2} color="graphite.600">
                        Бюджет проекта
                      </Text>
                      <Stack direction="row" wrap="wrap" gap={2}>
                        {budgets.map((b) => (
                          <Button
                            key={b}
                            type="button"
                            size="sm"
                            borderRadius="full"
                            variant={budget === b ? 'solid' : 'outline'}
                            colorPalette="brand"
                            borderColor="sand.300"
                            color={budget === b ? undefined : 'graphite.600'}
                            onClick={() => setBudget(b)}
                          >
                            {b}
                          </Button>
                        ))}
                      </Stack>
                    </Box>

                    <Box>
                      <Text fontSize="sm" fontWeight={600} mb={2} color="graphite.600">
                        О проекте
                      </Text>
                      <Textarea
                        placeholder="Коротко опишите задачу, сроки и пожелания"
                        rows={4}
                        bg="white"
                        borderColor="sand.300"
                        borderRadius="xl"
                        _focus={{ borderColor: 'bronze.500', boxShadow: '0 0 0 1px var(--chakra-colors-bronze-500)' }}
                      />
                    </Box>

                    <Button type="submit" colorPalette="brand" size="xl" borderRadius="full" w="full">
                      Отправить заявку <Send size={18} />
                    </Button>
                    <Text fontSize="xs" color="graphite.400" textAlign="center">
                      Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                    </Text>
                  </VStack>
                </form>
              )}
            </Box>
          </Reveal>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
