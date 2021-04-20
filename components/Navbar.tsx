import React, { FunctionComponent, useEffect } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
import {useTheme} from 'next-themes'
import {FiMoon, FiSun} from 'react-icons/fi'
import { FaMoon } from 'react-icons/fa';
interface Items {
    active: string,
    setActive: Function,
    name: string,
    route: string
}
const NavItem:FunctionComponent<Items> = ({
    active,
    setActive,
    name,
    route
}) =>{
    return(
       active !== name ?(
        <Link href={route} key={name}>
            <a className="hover:text-blue-400">
                <span onClick={()=>setActive(name)}>{name}</span>
            </a>    
        </Link>
       ): (<></>)
    )
}


const DarkButton = ({theme, toggleTheme}) =>{
    return(
        <button onClick={toggleTheme}>
            {
                theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                ): (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                )
            }
        </button>
    )
}

 

const Navbar = () => {
    const {theme, setTheme} = useTheme()
    const {pathname} = useRouter();
    const [active, setActive] = React.useState<string>();
    const toggleTheme = () =>{
        theme === 'light' ? setTheme('dark'): setTheme('light');
    }  
    useEffect(
        ()=>{
            console.log(theme)
            if(pathname ==="/") setActive('About')
            else if (pathname==="/Portfolio") setActive('Portfolio')
            else if(pathname==="/Resume ") setActive('Resume')
        },[theme])

    useEffect(()=>{
        console.log('theme:', theme);
    },[theme])
    return (
        <div className="flex items-center  justify-between my-6">
            <span className="font-bold text-green-500 text-xl mx-6 pt-2 pr-2 border-b-4 text-green border-green-500">
                {active}
            </span>
            <div className="text-gray-600 dark:text-white space-x-3 text-xl mx-2 p-2">
                <NavItem 
                    active={active} 
                    setActive={setActive} 
                    name="About"
                    route="/"/>
                <NavItem 
                    active={active} 
                    setActive={setActive} 
                    name="Portfolio"
                    route="/Portfolio"/>
                <NavItem 
                    active={active} 
                    setActive={setActive} 
                    name="Resume"
                    route="/Resume"/>
                    <DarkButton theme={theme} toggleTheme={toggleTheme}/>
            </div>
        </div>
    )
}

export default Navbar
