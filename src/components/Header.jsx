import Link from "next/link";

export default function Header(){
    return <div className="p-7 flex justify-between align-center text-white">
        <Link href="..">TODO APP</Link>
        <Link href="/new">New TODO</Link>
    </div>
}