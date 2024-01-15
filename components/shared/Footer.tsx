import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="flex-center wrapper flex-between flex-container flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logofoot"
            height={38}
            width={128}
            className=""
          />
        </Link>

        <p>2023 Evently. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer