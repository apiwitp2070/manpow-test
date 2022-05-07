import Head from 'next/head'
import Header from '../components/Header'
import { mockup } from '../data/data'
import Card from '../components/Card'
import Dropdown from '../components/Dropdown'
import { useAppContext } from '../provider/AppProvider'

export default function Home() {
  const { value, setValue } = useAppContext();

  return (
    <div className='min-h-screen bg-orange-400'>
      <Head>
        <title>Manpow Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-gray-100'>
        <Header/>
      </div>

      <main className='max-w-4xl mx-8 lg:mx-auto'>

        <div className='mt-12 flex flex-col md:flex-row md:justify-between md:items-center'>
          <span className='grid lg:grid-cols-2 lg:space-x-8 items-center'>
            <h1 className='font-semibold text-2xl text-white'>
              สินค้าแนะนำประจำสัปดาห์
            </h1>
            <div className='mt-4 lg:mt-0 border-b'></div>
          </span>
          <div className="z-50 md:w-64 mt-8 lg:mt-0">
            <Dropdown setValue={setValue}/>
          </div>
        </div>

        <div className='mt-16 grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {value == 1 && mockup.sort((a,b) => (a.price-a.discount) - (b.price-b.discount)).map(({id, name, description, price, discount}) => (
            <Card 
              key={id}
              name={name}
              description={description}
              price={price}
              discount={discount}
            />
          ))}
          {value == 2 && mockup.sort((a,b) => (b.price-b.discount) - (a.price-a.discount)).map(({id, name, description, price, discount}) => (
            <Card 
              key={id}
              name={name}
              description={description}
              price={price}
              discount={discount}
            />
          ))}
          {value == 3 && mockup.sort((a,b)=> a.name.localeCompare(b.name)).map(({id, name, description, price, discount}) => (
            <Card 
              key={id}
              name={name}
              description={description}
              price={price}
              discount={discount}
            />
          ))}
          {value == 4 && mockup.sort((a,b)=> b.name.localeCompare(a.name)).map(({id, name, description, price, discount}) => (
            <Card 
              key={id}
              name={name}
              description={description}
              price={price}
              discount={discount}
            />
          ))}
        </div>
        
      </main>

      <footer className='pt-48'>

      </footer>
    </div>
  )
}
