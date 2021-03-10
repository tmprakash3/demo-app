import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Lists from './lists/index';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to NextJs <span className="ssg">SSG</span> Example</h1>
    </div>
  )
}
