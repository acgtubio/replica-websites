import { Hero } from "@/services/HeroService"
import heroCardStyle from "./hero-card.module.css"

type Props = {
  heroData: Hero
}

export default function HeroCard({ heroData }: Props) {
  return (
    <a className={`${ heroCardStyle.hero_card }`}>
      <div className={`${ heroCardStyle.hero_name }`}>
        { heroData.name_english_loc }
      </div>
      <div className={`${ heroCardStyle.card_mask }`}>
      </div>
    </a>
  )
}