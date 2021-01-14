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

        {movies.map((movie) => (
          <article className={styles.mov}>
        <Card style={{ width: '20rem' }}>
          <a href="/1"><Card.Img variant="top" src="https://via.placeholder.com/1830x2024" /></a>
          <Card.Body>
            <Card.Title>{movie.title}<span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
        </article>
        ))}
        
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