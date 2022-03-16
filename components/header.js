import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex-row flex justify-start items-center text-sm text-pink">
            <h2 className="mt-[20px] mr-[20px] font-Raleway text-lg font-bold tracking-tighter leading-tight md:pr-8 text-black">
                <Link href="/">
                    <a className="hover:underline">jspaude.ca</a>
                </Link>
            </h2>
            <div className="mt-[20px] h-full flex-col flex justify-end items-start">
                <h6>Full Stack</h6>
                <h6>Web Development</h6>
            </div>
        </div>
    );
}
