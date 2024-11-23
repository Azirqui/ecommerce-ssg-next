import Link from "next/link";

const MainHeader = () => {
    return (
        <header className="flex items-center justify-center gap-12 py-6 bg-slate-400 font-extrabold text-[20px]">
            <div className="flex items-center gap-16">
                <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/markdown">Products with markdown</Link>
            </div>
        </header>
    )
}

export default MainHeader;