import Link from "next/link"
import { useRouter } from "next/router"


const Wrapper = ({ children }: {
	children: React.ReactNode
}) => {

  return (
    <div>
      <div className="min-h-screen min-w-full font-mono bg-zinc-900 text-slate-200">
        <Header />
        <div className="min-h-screen w-8/12 m-auto">
          <div className="pt-2 pb-6">
          	{ routes() }
          </div>
          { children }
        </div>
      </div>
    </div>
  )
}

const Header = () => {
	// const { switchTheme } = useTheme()
	return (
		<div className="flex justify-center p-2 bg-gray-700 relative">
	    <div>
	    	Take note that this is experimental version <span className="underline">0.1</span>
	    </div>
	    {/*<div className="absolute top-2 right-4 cursor-pointer select-none" onClick={switchTheme}>
	    	 🌓🌑🌕🌘🌖
	    </div>*/}
	  </div>
	)
}

const routes = () => {

	const { route: routePath } = useRouter()

	const routes = [
    ["Home", "/"],
    ["Some route", "/some"]
  ]

	return routes.map(([name, route]) =>
    <div className={
    	"p-2 pr-4 inline" + ( routePath === route ? " underline" : "" )
    } key={name}><Link href={route}>{ name }</Link></div>
  )
}

export default Wrapper