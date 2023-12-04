import { Hero } from "@/services/HeroService"
import heroCardStyle from "./hero-card.module.css"
import Link from "next/link";

type Props = {
  heroData: Hero
}

export default function HeroCard({ heroData }: Props) {
  return (
    <Link className={`${ heroCardStyle.hero_card }`} href={ `/heroes/${heroData.name_english_loc.toLowerCase().split(" ").join("")}` }>
      <div className={`${ heroCardStyle.hero_name }`}>
        { heroData.name_english_loc }
      </div>
      <div className={`${ heroCardStyle.card_mask }`}>
      </div>
    </Link>
  )
}