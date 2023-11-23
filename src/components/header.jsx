import Image from "next/image";

export default function Header() {
  return (
    <header className="max-w-5xl flex justify-between items-center px-5 py-5 justify-self-center mx-auto w-full border-b border-lime-400 mb-10">
      <a href="/" className="flex items-center gap-2">
        <div className="flex justify-center items-center bg-lime-400 rounded-full w-10 h-10">
          <Image
            src="/logo-1.webp"
            alt="logo"
            width={34}
            height={34}
            className="rounded-full"
          />
        </div>

        <h2 className="text-2xl font-bold">Noob Hacker</h2>
      </a>

      <ul className="flex gap-x-8">
        <li>
          <a href="/" className="text-sm uppercase font-bold">
            Blog
          </a>
        </li>

        <li>
          <a href="/about" className="text-sm uppercase font-bold">
            About
          </a>
        </li>
      </ul>
    </header>
  );
}
