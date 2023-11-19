import GenerateExcuse from "./components/GenerateExcuse";

export default function Home() {
  return (
    <div className="bg-base-200 px-10 py-10 flex flex-col min-h-screen">
      <h1 className="text-4xl font-bold text-center">Welcome to ExcuseDrawer</h1>
      <p className="text-lg mt-2 text-center">You badly need an excuse? Generate one right now!</p>
      <GenerateExcuse />
    </div>
  )
}
