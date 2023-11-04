import heroListStyles from "./page.module.css";

type Props = {};

export default function Heroes({}: Props) {
  return (
    <main className={ `${ heroListStyles.content } text-align-center white` }>
        <h1 className="title_text">CHOOSE YOUR HERO</h1>
        <div className={`${heroListStyles.subheader} ${heroListStyles.subheader_responsive}`}>
          <p className="w-100">From magical tacticians to fierce brutes and cunning rogues, Dota 2&apos;s hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.</p>
        </div>
    </main>
  )
}