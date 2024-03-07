import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import {video} from '../assets'
import { SectionWrapper } from '../components/HOC'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { Link } from 'react-router-dom'

const ProjectCard = ({ index, name, description, tags, image, source_code_link, deployed_link, video_link }) => {
  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover' >
            <div onClick={() => window.open(video_link, '_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={video} alt="github" className='w-8 h-8' />
            </div>
            <div onClick={() => window.open(source_code_link, '_blank')} className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
              <img src={github} alt="github" className='w-8 h-8' />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {
            tags.map((tag, idx) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`} >#{tag.name}</p>
            ))
          }

        </div>
        {/* {
          deployed_link && (
            <Link to={deployed_link} target='_blank' className='mt-4 text-[14px] font-bold text-secondary'>- View Deployed Project</Link>
          )
        } */}
      </Tilt>

    </motion.div>
  )
}



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] '
        >
          Following projects showcase my skills and experience in web development and software engineering. I have worked on various projects using different technologies and tools. Each project is breifly described with the technologies used and the link to the source code, as well as a live video demo. Some will also include a link to the deployed version.
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {
          projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              index={idx}
              {...project}
            />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')