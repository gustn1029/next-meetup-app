import Link from "next/link";
import MainNavigationBar from "./MainNavigationBar";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full py-4 px-12 bg-slate-900">
            <Link href={'/'} className="uppercase text-white font-semibold">next meetup</Link>
            <nav>
                <MainNavigationBar />
            </nav>
        </header>
    )
}