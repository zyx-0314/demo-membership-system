import Image from "next/image";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface props {
  activeNav: string
}

export function DefaultHeaderV1({ activeNav }: props) {
  const navs = [
    {
      href: "/",
      tag: "Home",
      title: "Home",
    },
    {
      href: "/news",
      tag: "News",
      title: "News",
    },
    {
      href: "/contact",
      tag: "Contacts",
      title: "Contacts",
    },
    {
      href: "/others",
      tag: "Others",
      title: "About AITS",
    },
  ];

  const setLinkDesign = (nav: string) => {
    let design: string = `border-solid border-green-500 px-5 py-2 text-white `

    if (activeNav === nav)
      design = design + "border-b-[5px]"

    return design
  }

  return (
    <>
      <header className="bg-slate-700 flex gap-2 border-solid border-b-2 border-green-300 justify-between items-center px-16 py-4 h-[10dvh]">
        <Link href="/">
          <Image
            src={"/aits.png"}
            width={50}
            height={50}
            alt="AITS Logo"
          ></Image>
        </Link>
        <div className="right flex gap-2">
          <nav className="flex gap-2 ">
            {navs.map((data, id) => (
              <Link
                href={data.href}
                className={setLinkDesign(data.tag)}
              >
                {data.title}
              </Link>
            ))}
          </nav>
          <Link href="/login">
            <Button variant={"secondary"} className="rounded-full">
              Login
            </Button>
          </Link>
          <Button
            variant={"secondary"}
            className="rounded-full"
          >
            Exit
          </Button>
        </div>
      </header>
    </>
  );
}

