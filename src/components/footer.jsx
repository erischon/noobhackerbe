import { PiHeartBold } from "react-icons/pi";

import { legalPaths, socialData, blogData } from "@/data/blogData";

export default function Footer() {
  return (
    <footer className="max-w-5xl flex flex-col mx-auto w-full border-t border-lime-400 mt-20">
      <div className="flex flex-row md:flex-row justify-between px-5 py-5 justify-self-center">
        <ul className="flex gap-x-5 text-gray-400">
          {legalPaths.map((path, key) => (
            <li key={key} className="hover:text-gray-300 font-semibold">
              <a href={path.path}>{path.title}</a>
            </li>
          ))}
        </ul>

        <ul className="flex gap-x-5 text-gray-200">
          {socialData.map((social, key) => (
            <li key={key}>
              <div className="w-6 h-6">
                <a
                  href={social.url}
                  target="_blank"
                  className="text-gray-400 hover:text-lime-400 text-2xl"
                >
                  {social.icon}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-y-2 md:flex-row md:justify-between px-5 py-5 text-xs">
        <p className="flex gap-2">
          <span>Copyright 2023-{new Date().getFullYear()}</span>
          <a
            href={blogData.madeByLink}
            target="_blank"
            className="font-bold text-lime-400"
          >
            {blogData.madeBy}
          </a>
        </p>

        <p className="flex gap-2">
          <span>Made with</span>
          <PiHeartBold name="ph:heart-bold" className="w-5 h-5 text-red-500" />
          <span>at {blogData.madeAt}</span>
        </p>

        <p className="flex gap-2">
          <span>Powered by</span>
          <span className="font-bold">{blogData.poweredBy}</span>
        </p>
      </div>
    </footer>
  );
}
