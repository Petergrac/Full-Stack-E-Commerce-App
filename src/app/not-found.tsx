import HomeButton from "@/components/HomeButton"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 lg:gap-5 pt-10 lg:pt-20">
        <p className="font-bold text-2xl text-gray-800">404</p>
        <p className="font-bold text-2xl ">Oops, looks like you are lost.</p>
        <HomeButton />
    </div>
  )
}

export default NotFound