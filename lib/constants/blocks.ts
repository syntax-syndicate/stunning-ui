// block preview image
import BlockBanner from '@/assets/images/blocks_banner.webp'
import BlockNavigation from '@/assets/images/blocks_navigation.webp'
import BlockCallout from '@/assets/images/blocks_callout.webp'
import BlockHero from '@/assets/images/blocks_hero.webp'
import BlockFeatures from '@/assets/images/blocks_features.webp'
import BlockHeadline from '@/assets/images/blocks_headline.webp'
import BlockLogoCloud from '@/assets/images/blocks_logo-cloud.webp'
import BlockTestimonials from '@/assets/images/blocks_testimonials.webp'
import BlockFAQ from '@/assets/images/blocks_faq.webp'
import BlockCTA from '@/assets/images/blocks_cta.webp'
import BlockPricing from '@/assets/images/blocks_pricing.webp'
import BlockFooter from '@/assets/images/blocks_footer.webp'
import TemplateMinimal from '@/assets/images/template_minimal.webp'

export const blockList = [
  {
    category: 'Landing Page',
    desc: '',
    components: [
      {
        name: 'Banner',
        desc: 'A landing page banner captures attention with key info and a call to action to engage visitors.',
        path: '/blocks/banner',
        status: 'finished',
        image: BlockBanner
      },
      {
        name: 'Navigation',
        desc: 'A menu or set of links that assists visitors in navigating the website to locate information.',
        path: '/blocks/navigation',
        status: 'finished',
        image: BlockNavigation
      },
      {
        name: 'Callout',
        desc: 'A highlighted area designed to draw attention to key information or features, using distinct styling or graphics to stand out.',
        path: '/blocks/callout',
        status: 'finished',
        image: BlockCallout
      },
      {
        name: 'Hero',
        desc: 'The main section of a webpage at the top, featuring a large image or video, a headline, and a call to action.',
        path: '/blocks/hero',
        status: 'finished',
        image: BlockHero
      },
      {
        name: 'Features',
        desc: 'A section highlighting the key benefits, characteristics, or functionalities of a product or service.',
        path: '/blocks/features',
        status: 'finished',
        image: BlockFeatures
      },
      {
        name: 'Headline',
        desc: 'A prominent top area with a bold headline that captures the visitor’s attention by communicating the main message or value proposition.',
        path: '/blocks/headline',
        status: 'finished',
        image: BlockHeadline
      },
      {
        name: 'Logo Cloud',
        desc: 'Logos from companies or partners are displayed to build credibility and show affiliations or endorsements.',
        path: '/blocks/logo-cloud',
        status: 'finished',
        image: BlockLogoCloud
      },
      {
        name: 'Testimonials',
        desc: 'A section using customer quotes or reviews to build trust and highlight positive experiences.',
        path: '/blocks/testimonials',
        status: 'finished',
        image: BlockTestimonials
      },
      {
        name: 'FAQ',
        desc: 'The FAQ section on a landing page answers common questions to quickly provide important information and resolve visitor queries.',
        path: '/blocks/faq',
        status: 'finished',
        image: BlockFAQ
      },
      {
        name: 'CTA',
        desc: 'A button or link prompting actions like "Sign Up," "Learn More," or "Buy Now."',
        path: '/blocks/call-to-action',
        status: 'finished',
        image: BlockCTA
      },
      {
        name: 'Pricing',
        desc: 'A section that outlines the cost of products or services, often including different tiers or plans.',
        path: '/blocks/pricing',
        status: 'finished',
        image: BlockPricing
      },
      {
        name: 'Footer',
        desc: 'The bottom section of a webpage typically contains navigation links, contact info, legal notices.',
        path: '/blocks/footer',
        status: 'finished',
        image: BlockFooter
      },
      {
        name: 'Minimal Template',
        desc: 'Simple, minimal SaaS website',
        path: '/templates/minimal',
        status: 'finished',
        image: TemplateMinimal
      }
    ]
  }
]
