import { useRouter } from "next/router"
import { useEffect } from "react"

function Page() {

  const {
    push,
  } = useRouter()

  useEffect(() => {
    push('/item')
  })

  return null
}

export default Page