import { SideBar, Header, CardHolder, Barchart, PieChartHolder, ProductList } from './components'
function App() {

  return (
    <div className='w-full h-full  flex bg-[#f5f6f8]'>
      <SideBar />
      <div className='flex-1 md:ml-[22%] lg:ml-[19%] xl:ml-[14%] px-[3rem] md:z-[100] xl:space-y-10 2xl:space-y-5'>
        <Header />
        <CardHolder />
        <div className='mt-12 flex flex-col lg:flex-row justify-between w-full'>
          <Barchart />
          <PieChartHolder />
        </div>
        <ProductList />
      </div>
    </div>
  )
}

export default App
