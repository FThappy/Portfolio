import { Particles } from '@/components/Particles';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { checkValidGmail } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Username must be at least 2 characters.'
    }),
    email: z
      .string()
      .min(1, {
        message: 'Không được để trống'
      })
      .max(250, {
        message: 'Ít hơn 250 ký tự'
      })
      .refine(val => checkValidGmail(val), {
        message: 'Định dạng email không phù hợp'
      }),
    message: z.string().min(2, {
      message: 'Username must be at least 2 characters.'
    })
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email : '',
      message : ''
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      await emailjs.send(
        'service_0rldynj',
        'template_nx16bti',
        {
          from_name: values.name,
          to_name: 'Thangchu',
          from_email: values.email,
          to_email: 'chuthang766@gmail.com',
          message: values.message
        },
        'BJ99hjmylxCC2JiHs'
      );
      setIsLoading(false);
      form.reset({ name: '', email: '', message: '' });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  return (
    <section id='contact' className='relative flex items-center c-space section-spacing'>
      <Particles className='absolute inset-0 -z-50' quantity={100} ease={80} color={'#ffffff'} refresh />
      <div className='flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-purple-primary'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-heading'>Let's Talk</h2>
          <p className='font-normal text-neutral-400'>
            Whether you're loking to build a new website, improve your existing platform, or bring a unique project to
            life, I'm here to help
          </p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John'
                      {...field}
                      className='rounded-[8px] w-full min-h-10 px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-white/20'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='John@gmail.com'
                      {...field}
                      className='rounded-[8px] w-full min-h-10 px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Share your throughts'
                      {...field}
                      rows={4}
                      className='rounded-[8px] un-scroll resize-none w-full min-h-[160px] max-h-[160px] px-3 py-2 text-sm bg-white/10 transition duration-200 placeholder-neutral-500 border border-white/10 mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
