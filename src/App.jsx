import { SideBar, Header, CardHolder } from './components'
function App() {

  return (
    <div className='w-screen h-screen flex bg-[#f5f6f8]'>
      <SideBar />
      <div className='flex-1 md:ml-[25%] lg:ml-[20%] xl:ml-[15%] px-12'>
        <Header />
        <CardHolder />
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
