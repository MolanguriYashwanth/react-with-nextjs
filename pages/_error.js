import React from "react";
import Link from 'next/link';
const errorPage = ()=>{
    return (
        <div>
            <h1>This is Error Page</h1>
            <p>Go to<Link href="/"><a>Error</a></Link></p>
        </div>
    )
}

export default errorPage;