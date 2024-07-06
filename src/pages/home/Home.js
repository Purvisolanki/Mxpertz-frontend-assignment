import React from 'react'
import Layout from '../../components/layout/Layout'
import Design1Page from '../../components/hero-section/Design1Page'
import StoryCards from '../../components/story-cards/StoryCards'

const Home = () => {
  return (
    <Layout>
      <div className='bg-indigo-900'>
      <Design1Page />
      <StoryCards />
      </div>
    </Layout>
  )
}

export default Home