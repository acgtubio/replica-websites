import React from 'react';

type Props = {}

export default function HeroPortrait({}: Props) {
  return (
    <video autoPlay={true} loop={true} playsInline preload='auto' muted>
        <source type='video/webm' src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/abaddon.webm"/>
    </video>
  )
}