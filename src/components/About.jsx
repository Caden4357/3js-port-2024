import React from 'react'
import  {Tilt}  from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from './HOC'
const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div 
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div 
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a skilled JavaScript developer with experinece in JavaScript, Python And Java, and expertise in frameworks like React, NodeJs, Django, Spring Boot As well as leading cloud services like AWS and IBM Cloud. I'm a quick learner and love collaborating with others to deviler fast, effecient and state of the art software solutions to clients. I currently work as a Software engineering instructor for Coding Dojo. I am looking to take on new challenges in the world of tech and ready to embrace whatever may come my way 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service) => (
            <ServiceCard
              key={service.title}
              index={service.index}
              {...service}
            />
          ))
        }

      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')