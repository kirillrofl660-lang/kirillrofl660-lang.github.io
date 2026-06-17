import { Box, Container, Flex, Heading, Text, Button, HStack, VStack, Stack, Badge } from '@chakra-ui/react'
import { ArrowRight, Sparkles, Code2, Palette, Rocket, Star } from 'lucide-react'
import { useInView } from '@react-spring/web'
import { FadeIn, Float, useCountUp, AnimatedBox } from './motion'

const stats = [
  { value: 120, suffix: '+', label: 'запущенных проектов' },
  { value: 7, suffix: ' лет', label: 'на рынке' },
  { value: 98, suffix: '%', label: 'клиентов остаются' },
]

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [ref, inView] = useInView({ once: true })
  const n = useCountUp(value, !!inView)
  return (
    <VStack ref={ref as any} gap={0} align="flex-start">
      <Heading fontSize={{ base: '2xl', md: '3xl' }} color="graphite.700">
        {n}
        {suffix}
      </Heading>
      <Text fontSize="sm" color="graphite.500">
        {label}
      </Text>
    </VStack>
  )
}

const floaties = [
  { icon: Code2, top: '18%', left: '6%', delay: 0 },
  { icon: Palette, top: '64%', left: '10%', delay: 300 },
  { icon: Rocket, top: '24%', right: '8%', delay: 150 },
  { icon: Star, top: '70%', right: '12%', delay: 450 },
]

export function Hero() {
  return (
    <Box
      as="section"
      position="relative"
      overflow="hidden"
      pt={{ base: 28, md: 40 }}
      pb={{ base: 16, md: 24 }}
      bgGradient="to-b"
      gradientFrom="sand.50"
      gradientTo="sand.100"
    >
      {/* мягкие световые пятна */}
      <Box
        position="absolute"
        top="-120px"
        left="50%"
        transform="translateX(-50%)"
        w="720px"
        h="720px"
        borderRadius="full"
        bg="bronze.200"
        opacity={0.35}
        filter="blur(120px)"
        pointerEvents="none"
      />

      {floaties.map((f, i) => {
        const Icon = f.icon
        return (
          <Box
            key={i}
            position="absolute"
            top={f.top}
            left={f.left}
            right={f.right}
            display={{ base: 'none', lg: 'block' }}
            pointerEvents="none"
          >
            <Float amplitude={12} duration={4200 + i * 400}>
              <Flex
                w={14}
                h={14}
                align="center"
                justify="center"
                borderRadius="2xl"
                bg="rgba(250,247,243,0.7)"
                backdropFilter="blur(8px)"
                border="1px solid"
                borderColor="sand.300"
                color="bronze.500"
                boxShadow="0 18px 40px -20px rgba(54,50,51,0.45)"
              >
                <Icon size={26} />
              </Flex>
            </Float>
          </Box>
        )
      })}

      <Container maxW="4xl" position="relative">
        <VStack gap={7} textAlign="center">
          <FadeIn>
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              bg="bronze.50"
              color="bronze.700"
              border="1px solid"
              borderColor="bronze.200"
              fontWeight={600}
            >
              <HStack gap={2}>
                <Sparkles size={15} />
                <Text>Студия создания сайтов под ключ</Text>
              </HStack>
            </Badge>
          </FadeIn>

          <FadeIn delay={120}>
            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={1.05}
              letterSpacing="-0.02em"
              color="graphite.700"
            >
              Сайты, которые{' '}
              <Box as="span" color="bronze.500">
                работают
              </Box>{' '}
              на ваш бизнес
            </Heading>
          </FadeIn>

          <FadeIn delay={220}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="graphite.500" maxW="2xl">
              Принимаем заказы любой сложности и даём готовые ресурсы для запуска: дизайн,
              разработку, хостинг и поддержку. От идеи до продакшена — в одной команде.
            </Text>
          </FadeIn>

          <FadeIn delay={320}>
            <Stack direction={{ base: 'column', sm: 'row' }} gap={3} pt={2}>
              <Button colorPalette="brand" size="xl" borderRadius="full" px={8} asChild>
                <a href="#order">
                  Оставить заявку <ArrowRight size={18} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                borderRadius="full"
                px={8}
                borderColor="sand.400"
                color="graphite.700"
                _hover={{ bg: 'sand.200' }}
                asChild
              >
                <a href="#cases">Смотреть кейсы</a>
              </Button>
            </Stack>
          </FadeIn>
        </VStack>

        <AnimatedBox style={{ marginTop: 56 }}>
          <Flex
            justify="center"
            gap={{ base: 8, md: 16 }}
            wrap="wrap"
            borderTop="1px solid"
            borderColor="sand.300"
            pt={8}
          >
            {stats.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </Flex>
        </AnimatedBox>
      </Container>
    </Box>
  )
}
