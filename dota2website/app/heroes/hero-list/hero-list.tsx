import { getHeroes, Hero } from "@/services/HeroService";
import HeroCard from "./hero-card/hero-card";
import heroListStyle from "./hero-list.module.css"

type Props = {}

export default async function HeroList({}: Props) {
  const heroes = await getHeroes();

  const heroComponents = heroes.map((hero) => (
    <HeroCard key={hero.id} heroData={hero}/>
  ));

  return (
    <div className={`${heroListStyle.hero_list}`}>
      { heroComponents }
    </div>
  )
}