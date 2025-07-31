'use client'

import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast, Toaster } from 'sonner'
import { useRef } from 'react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xdkddydd') // Replace with your actual form ID
  const formRef = useRef<HTMLFormElement>(null)
  if (state.succeeded) {
    toast.info('Thank you for your message!')
    formRef.current?.reset()
  }

  return (
    <section className='relative isolate'>
      <div className='relative'>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-16 lg:flex-auto' noValidate>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {/* Name */}
            <div>
              <Input id='name' type='text' name='name' placeholder='Name' autoComplete='given-name' />
              <ValidationError prefix='Name' field='name' errors={state.errors} />
            </div>

            {/* Email */}
            <div>
              <Input id='email' type='email' name='email' placeholder='Email' autoComplete='email' />
              <ValidationError prefix='Email' field='email' errors={state.errors} />
            </div>

            {/* Message */}
            <div className='sm:col-span-2'>
              <Textarea id='message' name='message' rows={4} placeholder='Message' />
              <ValidationError prefix='Message' field='message' errors={state.errors} />
            </div>
          </div>

          <div className='mt-6'>
            <Button type='submit' disabled={state.submitting} className='w-full disabled:opacity-50'>
              {state.submitting ? 'Submitting...' : 'Contact Us'}
            </Button>
          </div>

          <p className='mt-4 text-xs text-muted-foreground'>
            By submitting this form, I agree to the{' '}
            <Link href='/privacy_policy' className='font-bold'>
              privacy&nbsp;policy.
            </Link>
          </p>
        </form>
      </div>
      <Toaster/>
    </section>
  )
}
