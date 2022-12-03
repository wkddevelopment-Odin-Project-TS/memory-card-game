import styles from '../styles/Home.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';

const Home: NextPage = () => {
  
  const { t, lang } = useTranslation('common');
  const app_title = t('app_title');
  const home_title_h1 = t('home_title_h1');
  const home_title_p = t('home_title_p');

  return (
      <>
         
        <Head>
          <title>{app_title}</title>
        </Head>

        {/* HOME Title */}
        <div className={styles.home_title_div}>
          <h1 className={styles.home_title_h1}>{home_title_h1}</h1>
          <p className={styles.home_title_p}>{home_title_p}</p>
        </div>

      </>
  ) 

};

export default Home