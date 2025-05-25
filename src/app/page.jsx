import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <>
   <h1>Hello world</h1>
   <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/services">Services</Link></li>
    <li><Link href="/products">Products</Link></li>
    <li><Link href="/contact">Contact us</Link></li>
    <li><Link href="/about/branches">Branches</Link></li>
    <li><Link href="/products/vegis">Vegis page</Link></li>
   </ul>

   <Link href="https://nextjs.org/" target="_blank">NextJS Site</Link>
    </>
  )
}
