import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from './HOC'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => { 
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_sgvzj5m', 
      'template_4kb5qxj', 
      {
        from_name:form.name, 
        to_name:'Caden', 
        from_email:form.email,
        to_email:'wilcox4357@gmail.com',
        message:form.message
      }, 
      '4HGxdMqX8EG21LH63'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you I will get back to you soon!')
        setForm({
          name: '',
          email: '',
          message: ''
        })
      })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          alert('Something went wrong, please try again later')
          setForm({
            name: '',
            email: '',
            message: ''
        })
      })
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 rounded-2xl p-8'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder='Your name'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder='Your email'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
          </label>
          <textarea
            rows='7'
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder='What would you like to say?'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
          />
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')