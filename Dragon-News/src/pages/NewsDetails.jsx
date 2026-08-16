import React from 'react'
import Header from '../Components/Header'
import RightAside from '../Components/HomeLayout/RightAside'
import NewsDetailsCard from '../Components/NewsDetailsCard'

const NewsDetails = () => {
  return (
    <>
    <header>
        <Header></Header>
    </header>
    <main className='container mx-auto grid grid-cols-12 '>
        <section className='col-span-9'>
            <NewsDetailsCard></NewsDetailsCard>
        </section>

        <aside className='col-span-3'>
            <RightAside></RightAside>
        </aside>
    </main>
    </>
  )
}

export default NewsDetails