import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import MainCarousel from '../components/MainCarousel';
import { Card } from 'react-bootstrap';
import Filter from '../components/Filter';
import { GetStaticProps } from 'next';



export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <Layout>
        <main>
          
          <MainCarousel />
        </main>
        <nav className='filter'>
          <Filter />
        </nav>
          <article className={styles.mov}>
          {movies.map((movie) => (
        <Card style={{ width: '20rem' }}>
          <a href="/1"><Card.Img variant="top" src={movie.image} /></a>
          <Card.Body>
            <Card.Title>{movie.title}<span>{movie.rating}</span></Card.Title>
            <Card.Text>{movie.summary}</Card.Text>
          </Card.Body>
      </Card>
      ))}
        </article>
        
        
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  
    const res = await fetch('http://localhost:3000/api/allMovies');
    const movies = await res.json();

    return {
      props: {
        movies,
      },
    }
}