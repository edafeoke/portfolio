import Intro from '@/components/intro'
import NewsletterForm from '@/components/newsletter-form'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import TechStackSection from '@/components/tech-stacks'

export default function Home() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        {/* <RecentPosts /> */}
        <RecentProjects />
        <TechStackSection />
        <NewsletterForm />
      </div>
    </section>
  )
}
