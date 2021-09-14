
export default function Footer() {

  const currentYear = new Date().getFullYear().toString()

  return (
    <footer className="flex mt-8">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center h-16">
          <span>©{ currentYear } by lorem ipsum.</span>
        </div>
      </div>
    </footer>
  )
}