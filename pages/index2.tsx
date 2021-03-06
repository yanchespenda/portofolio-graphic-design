import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

import WorkContainer from '../components/WorkContainer'
import Profile2 from '../components/Profile2'

const listWork = [
  {
    src: '/images/project/project-1.png',
    title: 'Work 1',
    description: 'Description Work 1',
    slug: 'project-1'
  },
  {
    src: '/images/project/project-2.png',
    title: 'Work 2',
    description: 'Description Work 2',
    slug: 'project-2'
  },
  {
    src: '/images/project/project-3.png',
    title: 'Work 3',
    description: 'Description Work 3',
    slug: 'project-3'
  },
  {
    src: '/images/project/project-4.png',
    title: 'Work 4',
    description: 'Description Work 4',
    slug: 'project-4'
  },
  {
    src: '/images/project/project-5.png',
    title: 'Work 5',
    description: 'Description Work 5',
    slug: 'project-5'
  },
  {
    src: '/images/project/project-6.png',
    title: 'Work 6',
    description: 'Description Work 6',
    slug: 'project-6'
  },
]

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="xl:container mt-8">

        <Profile2 />

        {/* List Work */}
        <WorkContainer list={listWork} />
        {/* End List Work */}

      </main>

    </div>
  )
}

export default Home
