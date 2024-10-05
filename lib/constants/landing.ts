import CloudFlare from '@/assets/svgs/cloudflare.svg'
import Discord from '@/assets/svgs/discord.svg'
import Netlify from '@/assets/svgs/netlify.svg'
import Nuxt from '@/assets/svgs/nuxt.svg'
import OpenAI from '@/assets/svgs/openai.svg'
import StabilityAI from '@/assets/svgs/stability-ai.svg'
import Supabase from '@/assets/svgs/supabase.svg'
import Vercel from '@/assets/svgs/vercel.svg'
import WorkOS from '@/assets/svgs/workos.svg'
import Zapier from '@/assets/svgs/zapier.svg'

export const reviews = [
  {
    name: 'Matt',
    username: '@Matt',
    position: 'Software Engineer',
    body: "I've never seen anything like this before. It's stunning.",
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jane',
    username: '@Jane',
    position: 'Product Manager',
    body: 'I create a stunning website in a matter of hours. I love it.',
    img: 'https://images.unsplash.com/photo-1582610285985-a42d9193f2fd?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jonas',
    username: '@Jonas',
    position: 'Frontend Developer',
    body: "It save my time. I'm speechless. This is amazing.",
    img: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jude',
    username: '@jude',
    position: 'Backend Developer',
    body: "It's a beast, absolutly loving it, exactly what I was looking for.",
    img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Emma',
    username: '@Emma',
    position: 'Data Scientist',
    body: 'Stunning UI has been an absolute game changer.',
    img: 'https://images.unsplash.com/photo-1573496799515-eebbb63814f2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jamie',
    username: '@Jamie',
    position: 'Backend Developer',
    body: 'I Gracefully exited. Thanks for the stunning components.',
    img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

export const logos = [
  { name: 'CloudFlare', src: CloudFlare },
  { name: 'Discord', src: Discord },
  { name: 'Netlify', src: Netlify },
  { name: 'Nuxt', src: Nuxt },
  { name: 'OpenAI', src: OpenAI },
  { name: 'StabilityAI', src: StabilityAI },
  { name: 'Supabase', src: Supabase },
  { name: 'Vercel', src: Vercel },
  { name: 'WorkOS', src: WorkOS },
  { name: 'Zapier', src: Zapier }
]

export interface FAQItem {
  question: string
  answer: string
  value: string
}

export const FAQList: FAQItem[] = [
  {
    question: 'Why copy/paste and not packaged as a dependency?',
    answer: `The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.

Start with some sensible defaults, then customize the components to your needs.

One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.`,
    value: 'item-1'
  },
  {
    question: 'Do you plan to publish it as an npm package?',
    answer: 'No. I have no plans to publish it as an npm package.',
    value: 'item-2'
  },
  {
    question: 'Which frameworks are supported?',
    answer: 'You can use any framework that supports Vue, Nuxt etc.',
    value: 'item-3'
  },
  {
    question: 'Can I use these components in my project?',
    answer: `Yes. Free to use components for personal and commercial projects. No attribution required.
      But hey, let me know if you do. I'd love to see what you build.`,
    value: 'item-4'
  }
]

interface PlanProps {
  title: string
  popular: boolean
  price: number
  description: string
  buttonText: string
  benefitList: string[]
}

export const YEARLY_DISCOUNT = 0.8

export const plans: PlanProps[] = [
  {
    title: 'Free',
    popular: false,
    price: 0,
    description: 'Perfect for individuals.',
    buttonText: 'Get started for free',
    benefitList: [
      '1 team member',
      '1000 tasks and projects',
      '1GB storage',
      'Integrations',
      'Basic support'
    ]
  },
  {
    title: 'Premium',
    popular: true,
    price: 49,
    description: 'Ideal for small teams.',
    buttonText: 'Get starterd',
    benefitList: [
      'Up to 5 team member',
      'Unlimited tasks and projects',
      '8GB storage',
      'Integrations',
      'Priority support',
      'Advanced analytics',
      'Export capabilities'
    ]
  },
  {
    title: 'Enterprise',
    popular: false,
    price: 149,
    description: 'Designed for large organizations.',
    buttonText: 'Contact US',
    benefitList: [
      'Unlimited team members',
      'Unlimited tasks and projects',
      '50GB storage',
      'Integrations',
      'Priority support',
      'Advanced analytics',
      'Export capabilities',
      'API access',
      'Advanced security features'
    ]
  }
]
