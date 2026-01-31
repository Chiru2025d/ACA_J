"use client";
import React from 'react'
import Image from "next/image";
import "./contactFloating.css";

import { usePathname } from 'next/navigation';

const ContactFloating = ({
  email = "office@acajuris.com",
  phone = "+919663812090",
  right = 28,
  bottom = 120,
  emailBottom = 180,
  phoneBottom = 120,
}) => {
  const pathname = usePathname();

  // Don't render floating controls on the home page (hero will show local anchors)
  if (pathname === "/") return null;

  const containerStyle = {
    position: 'fixed',
    right: `${right}px`,
    bottom: `${bottom}px`,
  };

  return (
    <div className="hero-contact-floating" style={containerStyle}>
      <div className="contact-text-block">

        <div className="contact-row">
          <a
            href={`mailto:${email}`}
            className="contact-icon-bubble contact-email"
            aria-label="Email"
          >
            <Image src="/images/email.svg" alt="Email" width={20} height={20} />
          </a>

          <a
            href={`tel:${phone}`}
            className="contact-icon-bubble contact-phone"
            aria-label="Phone"
          >
            <Image src="/images/phone.svg" alt="Phone" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactFloating
