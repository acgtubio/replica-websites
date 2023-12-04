import React from 'react';
import HeroSummary from './hero-summary/hero-summary';
import HeroDetailStyles from './hero-details.module.css';
import HeroPortrait from './hero-portrait/hero-portrait';

type Props = {};

export default function HeroDetails({}: Props) {
  return (
    <section className={HeroDetailStyles.hero_details}>
        <HeroSummary />
        <HeroPortrait />
    </section>
  )
};