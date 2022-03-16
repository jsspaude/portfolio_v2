import Link from 'next/link';

export default function Intro() {
    return (
        <section className="flex-col md:flex-row flex">
            <h2 className="font-Raleway text-base text-pink">Welcome</h2>
            <p>I'm Jess, a full stack web developer.</p>
            <p>Thank you for visting!</p>
            <p>I hope you enjoy my work.</p>
            <Link href="#main">
                <a className="hover:underline">Scroll to view more.</a>
            </Link>
        </section>
    );
}
