'use client'
import Link from "next/link";
import { Suspense, useState } from "react";


export default function UserName() {
    const [user, setUserName] = useState("");
    
    return (
        <div>
            <input type="text" value={user} onChange={(e) => setUserName(e.target.value)} />
            <Link href={user}>
                generate
            </Link>
        </div>
    )
}