import React from "react";
import Link from "next/link";
import { McLaren } from "~/components/icons";

type Props = {};

export default function Nav({}: Props) {
  return (
    <nav className="flex items-center w-full h-20 px-16">
      <ul className="inline-flex items-center w-full justify-between list-none">
        <div>
          <li className="">
            <Link href="/" className="overflow-hidden">
              <McLaren className="fill-white h-full w-36" />
            </Link>
          </li>
        </div>

        <div className="flex">
          <li className="font-normal m-5 [letter-spacing:1px] cursor-pointer">
            CARS
          </li>
          <li className="font-normal m-5 [letter-spacing:1px] cursor-pointer">
            ABOUT
          </li>
        </div>
      </ul>
    </nav>
  );
}
