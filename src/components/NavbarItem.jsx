"use client"
import Link from "next/link";
import {useSearchParams} from "next/navigation";

export default function NavbarItem({ title, param }) {
    const searchParam = useSearchParams();
    const genre = searchParam.get("genre");
  return (
    <div className={`m-4 hover:text-amber-600 font-semibold p-2 ${
        genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-large"}`}>
      <Link href={`/?genre=${param}`} >{title}
      </Link>
    </div>
  );
}
