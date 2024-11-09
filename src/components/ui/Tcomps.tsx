"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Link as NextuiLink } from "@nextui-org/react";

// Turl関数はロケールを含むURLを生成します
export function Turl(url: string) {
  const lang = useLocale();
  return `/${lang}${url}`;
}

// TLinkPropsインターフェースはTLinkコンポーネントのプロパティを定義します
interface TLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  to?: string;
  href?: string;
  target?: string;
  i18n_link?: boolean;
  i18n_text?: boolean;
  i18n_path?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  isNextuiLink?: boolean;
}

// TLinkコンポーネントは国際化対応のリンクを生成します
const TLink = React.forwardRef<HTMLAnchorElement, TLinkProps>(
  (
    {
      children,
      className,
      to,
      href,
      target,
      i18n_link = false,
      i18n_text = false,
      i18n_path = "",
      onClick,
      isNextuiLink = false,
      ...props
    },
    ref
  ) => {
    const t = useTranslations();
    const lang = useLocale();

    const hrefUrl = to ? (i18n_link ? `/${lang}${to}` : `${to}`) : href || "";
    const setTarget = target || (to ? "_self" : "_blank");

    if (isNextuiLink) {
      return (
        <NextuiLink
          href={hrefUrl}
          target={setTarget}
          onClick={onClick}
          className={className}
          aria-label="link"
          ref={ref}
        >
          {i18n_text
            ? t(`${i18n_path}${i18n_path ? "." : ""}${children}`)
            : children}
        </NextuiLink>
      );
    }

    return (
      <Link
        href={hrefUrl}
        target={setTarget}
        onClick={onClick}
        className={className}
        aria-label="link"
        ref={ref}
        {...props}
      >
        {i18n_text
          ? t(`${i18n_path}${i18n_path ? "." : ""}${children}`)
          : children}
      </Link>
    );
  }
);

TLink.displayName = "TLink";

export { TLink };
