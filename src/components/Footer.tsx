import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer md:justify-between gap-8 md:gap-0">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="TrendLama"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md tracking-wider font-medium text-gray-400">
            ELBURGON MART
          </p>
        </Link>
        <p className="text-sm text-gray-400">&copy; 2025 ELBURGON MART.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/Terms">Terms of Service</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className="flex flex-col text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrivals</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
      </div>
      <div className="flex flex-col text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affiliate Program</Link>
      </div>
    </div>
  );
};

export default Footer;
