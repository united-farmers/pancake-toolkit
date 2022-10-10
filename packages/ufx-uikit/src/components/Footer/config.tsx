import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://www.unitedfarmers.finance/contact/",
      },
      {
        label: "Blog",
        href: "https://www.unitedfarmers.finance/news/",
      },
      {
        label: "Community",
        href: "https://t.me/official_united_farmers_xv2",
      },
      {
        label: "CAKE",
        href: "https://www.unitedfarmers.finance/the-ufx-token/",
      },
      {
        label: "—",
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://t.me/official_united_farmers_xv2",
      },
      {
        label: "Troubleshooting",
        href: "https://t.me/official_united_farmers_xv2",
      },
      {
        label: "Guides",
        href: "https://unitedfarmersfinance.gitbook.io/unitedfarmersfinance/",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/united-farmers-finance",
      },
      {
        label: "Documentation",
        href: "https://unitedfarmersfinance.gitbook.io/unitedfarmersfinance/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/UnitedFarmersX",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/official_united_farmers_xv2",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/r/unitedfarmersx/",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://www.instagram.com/united_farmers_x/",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/united-farmers-finance/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/b48fEuUNAQ",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
