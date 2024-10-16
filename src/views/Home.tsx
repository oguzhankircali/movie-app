// Components
import Trending from '@/components/HomeSection/Trending'
import Popular from '@/components/HomeSection/Popular'
import UpcomingMovie from '@/components/HomeSection/UpcomingMovie'

const Home = () => {
  return (
    <>

{/* <div className='relative'>
          <img
            src={`https://img.freepik.com/premium-photo/white-calendar-blue-background_539854-1893.jpg`}
            className='w-full h-[296px] object-cover bg-center'
          />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t dark:from-background from-background-light dark:via-background/90 via-background-light/20 dark:via-20% via-50% dark:to-background/10 to-background-light/5 to-70%' />
        </div> */}




      <div className='space-y-16'>
        <Popular />
        <Trending tenantCode="OSYM" slotName='ÖSYM Sınav Takvimleri' />
        <Trending tenantCode="TFF" slotName='Süper Lig Takvimleri' />
        <Trending tenantCode="TUIK" slotName='İstatistik ve Rapor Takvimleri' />
        <UpcomingMovie />
      </div>
    </>
  )
}

export default Home
