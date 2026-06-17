import { animated, useInView, useSpring, easings } from '@react-spring/web'
import { useEffect, useState, type CSSProperties, type ReactElement, type ReactNode, type Ref } from 'react'

// react-spring v9 types не полностью совместимы с @types/react 19
// (animated.div теряет children/ref в JSX), поэтому оборачиваем в типобезопасный компонент.
type AnimatedDivProps = {
  style?: CSSProperties | Record<string, unknown>
  className?: string
  children?: ReactNode
  ref?: Ref<HTMLDivElement>
}
const AnimatedDiv = animated.div as unknown as (props: AnimatedDivProps) => ReactElement

type Dir = 'up' | 'down' | 'left' | 'right'

const offset: Record<Dir, string> = {
  up: 'translate3d(0,40px,0)',
  down: 'translate3d(0,-40px,0)',
  left: 'translate3d(40px,0,0)',
  right: 'translate3d(-40px,0,0)',
}

interface RevealProps {
  children: ReactNode
  direction?: Dir
  delay?: number
  className?: string
}

export function Reveal({ children, direction = 'up', delay = 0, className }: RevealProps) {
  const [ref, springs] = useInView(
    () => ({
      from: { opacity: 0, transform: offset[direction] },
      to: { opacity: 1, transform: 'translate3d(0,0,0)' },
      delay,
      config: { tension: 180, friction: 26 },
    }),
    { rootMargin: '0% 0% -12% 0%', once: true },
  )

  return (
    <AnimatedDiv ref={ref} style={springs} className={className}>
      {children}
    </AnimatedDiv>
  )
}

export function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setShown(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  const styles = useSpring({
    opacity: shown ? 1 : 0,
    transform: shown ? 'translateY(0px)' : 'translateY(24px)',
    config: { duration: 700, easing: easings.easeOutCubic },
  })
  return <AnimatedDiv style={styles}>{children}</AnimatedDiv>
}

interface FloatProps {
  children: ReactNode
  amplitude?: number
  duration?: number
}

export function Float({ children, amplitude = 14, duration = 4000 }: FloatProps) {
  const [flip, setFlip] = useState(false)
  const styles = useSpring({
    loop: true,
    from: { transform: `translateY(${-amplitude}px)` },
    to: { transform: `translateY(${amplitude}px)` },
    config: { duration: duration / 2, easing: easings.easeInOutSine },
    reverse: flip,
    onRest: () => setFlip((p) => !p),
  })
  return <AnimatedDiv style={styles}>{children}</AnimatedDiv>
}

export function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run, duration])
  return value
}

export const AnimatedBox = AnimatedDiv
