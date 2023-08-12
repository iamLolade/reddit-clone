import Leftbar from "@/components/left-bar"
import Navbar from "@/components/main-nav"

export default function Home() {
  return (
    <div className="px-4 bg-background w-screen text-text">
      <Navbar />
      <main className="flex px-16 main">
        <Leftbar />
        Body
      </main>
    </div>
  )
}
