import { findHeroIdByName } from '@/services/HeroService';
import React from 'react'

type Props = {
    params: {
        hero: string;
    }
}

export default async function Hero({ params }: Props) {
  const heroId = await findHeroIdByName(params.hero);

  return (
    <div>{params.hero}</div>
  )
}