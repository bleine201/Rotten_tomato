import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import MainCarousel from '../components/MainCarousel';
import { Card } from 'react-bootstrap';
import Filter from '../components/Filter';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';



export default function Home({ movies }: InferGetStaticPropsType<typeof getStaticProps>) {
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
          <a href={`/movie/${movie.id}`}><Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${movie.image}`}/></a>
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

export const getStaticProps: GetStaticProps = async (context) => {
  
    const res = await fetch('http://localhost:3000/api/movies');
    const movies = await res.json();

    return {
      props: {
        movies,
      },
    }
}