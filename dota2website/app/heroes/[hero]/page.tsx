import { findHeroIdByName } from '@/services/HeroService';
import HeroDetails from './hero-details';
import React from 'react'

type Props = {
    params: {
        hero: string;
    }
}

export default async function Hero({ params }: Props) {
  const heroId = await findHeroIdByName(params.hero);

  return (
    <HeroDetails />
  )
}