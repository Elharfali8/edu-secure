import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const FacebookIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v4h3v7h4v-7h3l1-4h-4v-2a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2h-3" />
    </svg>
  )

  const InstagramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width={20} height={20} x={2} y={2} rx={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
    </svg>
  )

  const WhatsappIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8A8.94 8.94 0 0 1 3 12a9 9 0 1 1 9 9 8.94 8.94 0 0 1-5.2-1.65L3 21z" />
      <path d="M8 10c.2 1.5 2.5 4 4 4 .5 0 1-.5 1.5-1l1.5 1c-.5 1-1 1.5-2 1.5-2.5 0-6-3.5-6-6 0-1 .5-1.5 1.5-2l1 1.5c-.5.5-1 1-1.5 1z" />
    </svg>
  )

  const socialMedia = [
    {
      name: 'facebook',
      path: '#',
      icon: FacebookIcon,
    },
    {
      name: 'instagram',
      path: '#',
      icon: InstagramIcon,
    },
    {
      name: 'whatsapp',
      path: '#',
      icon: WhatsappIcon,
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-blue-950 text-white">
  <div className="relative mx-auto flex min-h-[250px] max-w-5xl flex-col items-center justify-center px-6 py-8 text-center">

    {/* Logo */}
    <Image
      src="/images/logo.png"
      alt="EduSecure"
      width={48}
      height={48}
      className="mb-2 rounded-lg"
    />

    {/* Brand */}
    <h2 className="text-xl font-bold">
      EduSecure
    </h2>

    {/* Description */}
    <p className="mt-1 max-w-md text-xs text-blue-100/60">
      Secure student pickup management for modern private schools.
    </p>

    {/* Social media */}
    <div className="mt-4 flex items-center justify-center gap-2">
      {socialMedia.map(({ name, icon: Icon, path }) => (
        <Link
          key={name}
          href={path}
          aria-label={name}
          className="
            flex h-9 w-9 items-center justify-center
            rounded-full
            border border-white/10
            bg-white/5
            text-blue-100
            transition-all duration-200
            hover:bg-white/10
            hover:text-white
          "
        >
          <Icon />
        </Link>
      ))}
    </div>

    {/* Divider */}
    <div className="my-5 h-px w-full max-w-xl bg-white/10" />

    {/* Copyright */}
    <p className="text-[11px] text-blue-100/40">
      © EduSecure. {new Date().getFullYear()} All rights reserved.
    </p>

  </div>
</footer>
  )
}

export default Footer