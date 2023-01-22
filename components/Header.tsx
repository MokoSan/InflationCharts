import Image from "next/image"
import Link from "next/link"
import { ChartBarIcon } from "@heroicons/react/outline"

function Header() {
  return (
    <header className="flex items-center shadow-md justify-between sticky">
        {/* Left */}
        <div className="flex items-center">
          <ChartBarIcon className="h-4 ml-4"/>
          <h1 className="ml-2 font-bold"> Inflation Charts </h1>
        </div>

        {/* Right */}
        <div className="mx-3">

          <Link href="https://twitter.com/MokoSharma">
            <Image className="rounded-full m-2" 
                    src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                    alt=""
                    width={40}
                    height={40} />
          </Link>
        </div>

    </header>
  )
}

export default Header