import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

export default function TechStackSection() {
  const techStacks = {
    Frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5',
      'CSS3',
    ],
    Backend: [
      'Node.js',
      'Python',
      'FastAPI',
      'Express.js',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Redis',
      'Prisma'
    ],
    'Tools & Platforms': [
      'Git',
      'Docker',
      'AWS',
      'Vercel',
      'Netlify',
      'Firebase',
      'Figma',
    ],
    Mobile: ['React Native', 'Expo', 'iOS', 'Android']
  }

  return (
    <section className='mx-auto max-w-6xl px-4 py-16'>
      <div className='space-y-12'>
        <div className='space-y-4 text-center'>
          <h2 className='text-3xl font-bold md:text-4xl'>Tech Stack</h2>
          <p className='mx-auto max-w-2xl text-muted-foreground'>
            Technologies and tools I use to build scalable, high-performance
            applications
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2'>
          {Object.entries(techStacks).map(([category, technologies]) => (
            <Card key={category} className='border-0 shadow-none'>
              <CardContent className='p-6'>
                <h3 className='mb-4 text-xl font-semibold'>{category}</h3>
                <div className='flex flex-wrap gap-2'>
                  {technologies.map(tech => (
                    <Badge
                      key={tech}
                      variant='secondary'
                      className='border-0 bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200'
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
