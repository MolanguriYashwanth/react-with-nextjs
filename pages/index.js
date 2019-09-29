import React from "react";
import Link from 'next/link';
import Router from "next/router";
import fetch from 'isomorphic-unfetch'
const indexPage = ({ stars })=>{
    return (
        <div>
            <h1>This is Main Page</h1>
            <p>Go to<Link href="/auth"><a>Auth</a></Link></p>
            <button onClick={()=>Router.push('/auth')}>Go to Auth</button>
            <div>Next stars: {stars}</div>
        </div>
    )
}
indexPage.getInitialProps = async ({ req }) => {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    return { stars: json.stargazers_count }
  }

export default indexPage;