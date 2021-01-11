import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import MainCarousel from '../components/MainCarousel';
import { Card } from 'react-bootstrap';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <main>
          <MainCarousel />
        </main>
        <article className={styles.movies}>
        <Card style={{ width: '20rem' }}>
          <a href="/1"><Card.Img variant="top" src="https://via.placeholder.com/1830x2024" /></a>
          <Card.Body>
            <Card.Title>Title Movie <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      {/* <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/1830x2024" />
          <Card.Body>
            <Card.Title>Card Title <span>4.9</span></Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
      </Card> */}
        </article>
      </Layout>
    </div>
  )
}