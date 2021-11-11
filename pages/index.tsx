import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { firebaseConfig } from '../firebase';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import Navbar from '../components/navbar';

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
  console.log('Analytics', analytics);
}

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TURBO CHAV | VROUM, La vitesse</title>
        <meta
          name="description"
          content="Livraison de sapes | La rue, la vrai ! | Fast and clean delivery"
        />
        {/* <link rel="icon" href={logo.src} /> */}
      </Head>
      <Navbar />
    </>
  );
};

export default Home;
