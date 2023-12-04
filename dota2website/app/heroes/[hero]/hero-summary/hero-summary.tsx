import React from 'react';
import styles from './hero-summary.module.css';

type Props = {};

function HeroSummary({}: Props) {
  return (
    <div className={`white ${styles.hero_summary}`}>
      <h1 className={styles.hero_name}>Placeholder name</h1>
      <h2>Placeholder text</h2>
      <p className={styles.hero_description}>Some description</p>

    </div>
  )
}

export default HeroSummary