// component preview image
import ParticlesEffect from '@/assets/gifs/particles-effect.gif'
import RisingStar from '@/assets/gifs/rising-star.gif'
import MorphingGradient from '@/assets/gifs/morphing-gradient.png'
import MetetorGrid from '@/assets/gifs/metetor-grid.gif'
import TyndallEffect from '@/assets/gifs/tyndall-effect.gif'
import GodRay from '@/assets/gifs/god-ray.png'
import DotPattern from '@/assets/gifs/dot-pattern.png'
import GridPattern from '@/assets/gifs/grid-pattern.png'
import GlareLineFrame from '@/assets/gifs/glare-line-frame.gif'
import GlowyDivider from '@/assets/gifs/glowy-divider.png'
import LightBar from '@/assets/gifs/light-bar.gif'
import Confetti from '@/assets/gifs/confetti.gif'
import Marquee from '@/assets/gifs/marquee.gif'
import SkewedMarquee from '@/assets/gifs/skewed-marquee.gif'
import SpotlightCard from '@/assets/gifs/spotlight-card.gif'
import ProgressiveGradientBorder from '@/assets/gifs/progressive-gradient-border.gif'
import AnimatedGradientBorder from '@/assets/gifs/animated-gradient-border.gif'
import GlowySpotlightCards from '@/assets/gifs/glowy-spotlight-cards.gif'
import TypedText from '@/assets/gifs/typed-text.gif'
import AvatarList from '@/assets/gifs/avatar-list.gif'
import GlowyBorderButton from '@/assets/gifs/glowy-border-button.gif'
import GradientBorderButton from '@/assets/gifs/gradient-border-button.gif'
import GlassBorderButton from '@/assets/gifs/glass-border-button.gif'
import MagneticEffectButton from '@/assets/gifs/magnetic-effect-button.gif'
import ScrollReveal from '@/assets/gifs/scroll-reveal.gif'
import ShimmerText from '@/assets/gifs/shimmer-text.gif'
import TorchTextReveal from '@/assets/gifs/torch-text-reveal.gif'
import TextReveal from '@/assets/gifs/text-reveal.gif'
import BlurryTextReveal from '@/assets/gifs/blurry-text-reveal.gif'
import StickyStackBlocks from '@/assets/gifs/sticky-stack-block.gif'
import FlipCard from '@/assets/gifs/flip-card.gif'

export const componentList = [
  {
    category: 'Backgrounds',
    desc: '',
    components: [
      {
        name: 'Particles Effect',
        desc: 'This animated floating particles component can be used as a background or to set the mood.',
        image: ParticlesEffect,
        path: '/components/particles-effect',
        status: 'finished'
      },
      {
        name: 'Rising Stars',
        desc: 'A rising star shines brightly at night, serving as an excellent background, with stars filling your page.',
        image: RisingStar,
        path: '/components/rising-stars',
        status: 'finished'
      },
      {
        name: 'Morphing Gradient',
        desc: 'An elegant animation with a shifting background gradient.',
        image: MorphingGradient,
        path: '/components/morphing-gradient',
        status: 'finished'
      },
      {
        name: 'Noise Gradient',
        path: '/components/noise-gradient',
        status: 'upcoming'
      },
      {
        name: 'Meteor Grid',
        desc: "The meteor's vertical/skewed descent captures attention.",
        image: MetetorGrid,
        path: '/components/meteor-grid',
        status: 'finished'
      },
      {
        name: 'Tyndall Effect',
        desc: 'Tyndall effect is light scattering by particles, used in the hero as a background.',
        image: TyndallEffect,
        path: '/components/tyndall-effect',
        status: 'new'
      },
      {
        name: 'God Ray',
        desc: 'Aurora-like light beam effect, used in the hero as a background.',
        image: GodRay,
        path: '/components/god-ray',
        status: 'finished'
      },
      {
        name: 'Dot Pattern',
        desc: 'A background dot pattern made with SVGs, fully customizable using Tailwind CSS.',
        image: DotPattern,
        path: '/components/dot-pattern',
        status: 'finished'
      },
      {
        name: 'Grid Pattern',
        desc: 'A background grid pattern made with SVGs, fully customizable using Tailwind CSS.',
        image: GridPattern,
        path: '/components/grid-pattern',
        status: 'finished'
      }
    ]
  },
  {
    category: 'Wireframe',
    components: [
      {
        name: 'Glare Line Frame',
        desc: 'The double top border effect makes your card stand out.',
        image: GlareLineFrame,
        path: '/components/glare-line-frame',
        status: 'finished'
      },
      {
        name: 'Neon Frame',
        path: '/components/neon-frame',
        status: 'upcoming'
      },
      {
        name: 'Glowy Divider',
        desc: 'Used for dividing sections on a page',
        image: GlowyDivider,
        path: '/components/glowy-divider',
        status: 'finished'
      }
    ]
  },
  {
    category: 'Micro Interactions',
    components: [
      {
        name: 'Light Bar',
        desc: 'Replicate Monitor Light Bar Effect',
        image: LightBar,
        path: '/components/light-bar',
        status: 'finished'
      },
      {
        name: 'Confetti',
        desc: 'A celebratory animation used after successfully completing events like registration or payment.',
        image: Confetti,
        path: '/components/confetti',
        status: 'finished'
      },
      {
        name: 'Dock',
        path: '/components/dock',
        status: 'upcoming'
      },
      {
        name: 'Cursor Effect',
        path: '/components/cursor-effect',
        status: 'upcoming'
      },
      {
        name: '3D Parallax Card',
        path: '/components/3d-parallax-card',
        status: 'upcoming'
      },
      {
        name: 'Gravity Elements',
        path: '/components/gravity-elements',
        status: 'upcoming'
      }
    ]
  },
  {
    category: 'Card Animations',
    components: [
      {
        name: 'Marquee',
        desc: 'An infinite scrolling component that can be used to display text, images, or cards.',
        image: Marquee,
        path: '/components/marquee',
        status: 'finished'
      },
      {
        name: 'Skewed Marquee',
        desc: 'Infinite Marquee in 3D view, no repeated elements.',
        image: SkewedMarquee,
        path: '/components/skewed-marquee',
        status: 'finished'
      },
      {
        name: 'Spotlight Card',
        desc: 'A spotlight effect that follows the cursor and guides users` attention.',
        image: SpotlightCard,
        path: '/components/spotlight-card',
        status: 'finished'
      },
      {
        name: 'Progressive Gradient Border',
        desc: 'The glowing card effect is used to highlight feature cards on hover.',
        image: ProgressiveGradientBorder,
        path: '/components/progressive-gradient-border',
        status: 'finished'
      },
      {
        name: 'Animated Gradient Border',
        desc: 'The glowing card effect is typically used to highlight feature cards when they are hovered over.',
        image: AnimatedGradientBorder,
        path: '/components/animated-gradient-border',
        status: 'finished'
      },
      {
        name: 'Flip Card',
        desc: 'A dynamic flip card with smooth 180-degree animations along both the X and Y axes.',
        image: FlipCard,
        path: '/components/flip-card',
        status: 'new'
      }
    ]
  },
  {
    category: 'Bento Grid',
    components: [
      {
        name: 'Glowy Spotlight Cards',
        desc: 'The glowing card effect is typically used to highlight feature cards when they are hovered over.',
        image: GlowySpotlightCards,
        path: '/components/glowy-spotlight-cards',
        status: 'finished'
      },

      {
        name: 'Smart Layout',
        path: '/components/smart-layout',
        status: 'upcoming'
      }
    ]
  },
  {
    category: 'Button Animations',
    components: [
      {
        name: 'Glowy Border',
        desc: 'Glowing Light Border Button for CTA',
        image: GlowyBorderButton,
        path: '/components/glowy-border-button',
        status: 'finished'
      },
      {
        name: 'Gradient Border',
        desc: 'Gradient Color Border Button for CTA',
        image: GradientBorderButton,
        path: '/components/gradient-border-button',
        status: 'finished'
      },
      {
        name: 'Glass Border',
        desc: 'Glowy Glass Border Button with star particles effect.',
        image: GlassBorderButton,
        path: '/components/glass-border-button',
        status: 'finished'
      },
      {
        name: 'Magnetic Effect',
        desc: 'When the mouse enters the button, there will be a simulated magnetic effect.',
        image: MagneticEffectButton,
        path: '/components/magnetic-effect-button',
        status: 'finished'
      },
      {
        name: 'Neon Effect',
        path: '/components/neon-effect-button',
        status: 'upcoming'
      }
    ]
  },
  {
    category: 'List Animations',
    components: [
      {
        name: 'Avatar List',
        desc: 'A component that displays list of user`s avatar',
        image: AvatarList,
        path: '/components/avatar-list',
        status: 'finished'
      },
      {
        name: 'List Scroll Effect',
        path: '/components/list-scroll-effect',
        status: 'upcoming'
      }
    ]
  },
  {
    category: 'Scroll-driven Animations',
    components: [
      {
        name: 'Text Reveal',
        desc: 'Scroll-driven text reveal, a text appearance effect activates as you scroll through the content.',
        image: TextReveal,
        path: '/components/text-reveal',
        status: 'finished'
      },
      {
        name: 'Blurry Text Reveal',
        desc: 'Scroll-driven blurry text reveal, a text appearance effect activates as you scroll through the content.',
        image: BlurryTextReveal,
        path: '/components/blurry-text-reveal',
        status: 'finished'
      },
      {
        name: 'Sticky Stack Block',
        desc: 'Sticky stack blocks are commonly used as visually fixed elements to introduce key features on a website while scrolling.',
        image: StickyStackBlocks,
        path: '/components/sticky-stack-blocks',
        status: 'finished'
      },
      {
        name: 'Scroll Reveal',
        desc: 'Scroll-driven section reveal',
        image: ScrollReveal,
        path: '/components/scroll-reveal',
        status: 'finished'
      },
      {
        name: 'Skewed Reveal',
        path: '/components/skewed-reveal',
        status: 'upcoming'
      }
    ]
  },
  {
    category: 'Typography',
    components: [
      {
        name: 'Typed Text',
        desc: 'Typically used to display dynamic text changes in the Hero Section.',
        image: TypedText,
        path: '/components/typed-text',
        status: 'finished'
      },
      {
        name: 'Shimmer Text',
        desc: 'A light glare effect which pans across text making it appear as if it is shimmering.',
        image: ShimmerText,
        path: '/components/shimmer-text',
        status: 'finished'
      },
      {
        name: 'Torch Text Reveal',
        desc: 'Torch text reveal, a text effect to highlight the headline.',
        image: TorchTextReveal,
        path: '/components/torch-text-reveal',
        status: 'finished'
      },
      {
        name: 'Digital Filpper',
        path: '/components/digital-filpper',
        status: 'upcoming'
      },
      {
        name: 'Streaming Text',
        desc: 'Streaming text, perplexing text appearance effect.',
        path: '/components/streaming-text',
        status: 'finished'
      }
    ]
  }
]
