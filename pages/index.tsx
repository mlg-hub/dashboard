/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header/header'
import MainOne from '../components/main-one/main_one'
import Image from 'next/image'
import layout from '../styles/Layout.module.css'
import Feature, { IFyatuFeature } from '../components/main-one/feature'
import { faShieldHalved, faGaugeHigh, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import DashBoard from '../components/main-one/dashboard'


const layoutStyle = {
  marginLeft: '12%',
  marginRight: '12%',
}
export const feactureList: IFyatuFeature[] = [{
  index: 1,
  icon: faShieldHalved,
  title: 'Sécurité',
  description: "Tout est conservé sous un cryptage de niveau militaire de bout en bout pour protéger vos fonds lors de l'achat en ligne, de la recharge ou de transfert d'argent à vos partenaires."
}, {
  index: 2,
  icon: faGaugeHigh,
  title: 'Rapidité',
  description: "Conçu pour être une solution rapide et instantanée aux besoins les plus urgents, Fyatu fourni les services d'achat, de recharge et de transfert d'argent quasi instantanés."
}, {
  index: 3,
  icon: faHandshakeAngle,
  title: 'Fiabilité',
  description: "Nous savons à quel point l'argent est difficile à gagner, Fyatu agit en toute transparence, crédibilité et loyauté envers ses clients. Aucun centime du client ne peut se perdre."
}];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fyatu.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className='mb-16'>
          <div style={layoutStyle}>
            <Header />
            <section>
              <MainOne />
            </section>
          </div>
        </div>
      </div>

      <div className={"bg-fyatu-blue-light flex items-center flex-col py-28"}>
        <h1 className='font-semibold text-3xl pb-8'>Approuvé par plus de 185,000 clients satisfaits.</h1>
        <p className='mb-16'>Essayez nos services aujourd'hui et devenez accro à jamais.</p>
        <div className='flex gap-14'>
          {
            feactureList.map(x => {
              return (<Feature isV2={true} key={x.index} icon={x.icon} description={x.description} title={x.title} />)
            })
          }
        </div>
      </div>
      <div className="white py-28" style={layoutStyle}>
        <DashBoard />
      </div>

      <div>dididi</div>

    </div>

  )
}

export default Home
