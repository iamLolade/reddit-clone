import Navbar from "@/components/main-nav"

export default function Home() {
  return (
    <div className="px-4 bg-background w-screen text-text">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 main">
        Body
      </main>
    </div>
  )
}
