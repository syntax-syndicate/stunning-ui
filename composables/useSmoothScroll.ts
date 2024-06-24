import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Lenis from 'lenis'

const useSmoothScroll = () => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis()

  lenis.on('scroll', (e: any) => {
    // console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}

export { useSmoothScroll }
