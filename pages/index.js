import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export async function getStaticProps(){
  const resp=await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json")
  return{
    props:{
      pokemon:await resp.json()
    }
  }
}
export default function Home({pokemon}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <div className={styles.grid}>
        {pokemon.map((pokemon)=>(
      <div className={styles.card} key={pokemon.id}>
<Link href={`/pokemon/${pokemon.id}`}>
  
    <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
    alt={pokemon.name}
  />
  <h3>{pokemon.name}</h3>
</Link>
</div>
))}
      </div>
    </div>
  )
}
