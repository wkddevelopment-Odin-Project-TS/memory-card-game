import styles from '../styles/Home.module.css';
import type { NextPage } from 'next'
import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useState } from 'react';

import Monster_1 from '../public/graphics/pics/monster_group/monster_1.svg';
import Monster_2 from '../public/graphics/pics/monster_group/monster_2.svg';
import Monster_3 from '../public/graphics/pics/monster_group/monster_3.svg';
import Monster_4 from '../public/graphics/pics/monster_group/monster_4.svg';
import Monster_5 from '../public/graphics/pics/monster_group/monster_5.svg';
import Monster_6 from '../public/graphics/pics/monster_group/monster_6.svg';
import Monster_7 from '../public/graphics/pics/monster_group/monster_7.svg';
import Monster_8 from '../public/graphics/pics/monster_group/monster_8.svg';
import Monster_9 from '../public/graphics/pics/monster_group/monster_9.svg';
import Monster_10 from '../public/graphics/pics/monster_group/monster_10.svg';
import Monster_11 from '../public/graphics/pics/monster_group/monster_11.svg';
import Monster_12 from '../public/graphics/pics/monster_group/monster_12.svg';

const Home: NextPage = () => {
  
  const { t, lang } = useTranslation('common');
  const app_title = t('app_title');
  const home_title_h1 = t('home_title_h1');
  const home_title_p = t('home_title_p');
  const home_scoreboard_actual_h2= t('home_scoreboard_actual_h2');
  const home_scoreboard_best_h2 = t('home_scoreboard_best_h2');
  const home_monster_alt = t('home_monster_alt');

  const [actualScore, setActualScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function resetCounter(){
          // reset 'clicked' attribute 
          const all_cards = document.querySelectorAll('#monster_card_id');
          for (let index = 0; index < all_cards.length; index++) {
            const card = all_cards[index];
            card.setAttribute('data-clicked', 'no');
          };
          setActualScore(0);
  };

  const onCardClick = (e:any) => {
    e.preventDefault();

    // Toggle card clicked attribute
    e.target.getAttribute('data-clicked') === 'no'
    ? e.target.setAttribute('data-clicked', 'yes')
    : e.target.setAttribute('data-clicked', 'no');
    
    // Count actualScore or set actualScore to 0, validate for best score,      
    if(e.target.getAttribute('data-clicked') == 'yes'){
      setActualScore(actualScore + 1);
    } else {

      if(actualScore > bestScore){
        setBestScore(actualScore);
        setActualScore(0);
      } else {
        setActualScore(0);
      };

      resetCounter();

    };

    // Mix cards after click


  };

  // Game Won
  if(actualScore === 12){
    setBestScore(12)
    resetCounter()
  };
  

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

        {/* Scoreboard */}
        <section className={styles.scoreboard_section}>
          <div>
            <h2 className={styles.scoreboard_actual}>{home_scoreboard_actual_h2}</h2>
            <p>{actualScore}</p>
          </div>
          <div>
          <h2 className={styles.scoreboard_best}>{home_scoreboard_best_h2}</h2>
          <p>{bestScore}</p>
          </div>
        </section>

        {/* Gameboard */}
        <section className={styles.gameboard_section}>
          
          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_1} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Sally</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_2} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Norber</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_3} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Jasiah</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_4} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Karsyn</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_5} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Jarvis</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_6} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Kylan</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_7} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Dayana</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_8} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Todd</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_9} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Myla</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_10} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Pace</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_11} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Raquel</h3>
          </div>

          <div className={styles.monster_card} id='monster_card_id' data-clicked='no' onClick={onCardClick}>
            <Image src={Monster_12} alt={home_monster_alt} className={styles.monster_image}></Image>
            <h3>Genevieve </h3>
          </div>
        </section>


      </>
  ) 

};

export default Home