"use client";

import config from "../../../richtpl.config";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { TLink } from "@/components/ui/Tcomps";
import { LogoVercelNextjs } from "@/components/ui/LogoVercelNextjs";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { SearchCommandDialog } from "../ui/command-search";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { Button } from "../ui/button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function Logo() {
    if (config.themeConfig.header?.logo?.type === "Vercel&Next.js") {
      return <LogoVercelNextjs />;
    }
    if (config.themeConfig.header?.logo?.href) {
      return (
        <Link href={config.themeConfig.header?.logo?.href} aria-label="Logo">
          {config.themeConfig.header?.logo?.content || (
            <h1 className="text-2xl font-bold">
              {config.themeConfig.header?.title}
            </h1>
          )}
        </Link>
      );
    }
    if (config.themeConfig.header?.logo?.content) {
      return config.themeConfig.header?.logo?.content;
    }
    return (
      <h1 className="text-2xl font-bold">{config.themeConfig.header?.title}</h1>
    );
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="flex justify-start items-center gap-4 h-full sm:mr-5">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </div>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {config.themeConfig.header?.items?.nav?.map((item, index) => (
          <NavbarItem key={`NavbarItem-${item}.${index}`}>
            <TLink
              target={item.target}
              href={item.href}
              to={item.to}
              i18n_link={item.i18n_link || false}
              i18n_text={item.i18n_text || false}
            >
              {item.label}
            </TLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavbarItem>
          <SearchCommandDialog minWidth={1024} />
        </NavbarItem>
        {config.themeConfig.header?.items?.project?.repository === "block" && (
          <NavbarItem>
            <Link
              href={`https://github.com/${config.organizationName}/${config.projectName}`}
              target="block"
            >
              <Button
                variant="ghost"
                className="w-10 h-10 p-0"
                aria-label="GitHub project repository"
              >
                <FaGithub className="text-[21px]" />
              </Button>
            </Link>
          </NavbarItem>
        )}
        <NavbarItem>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex md:hidden gap-4" justify="end">
        <NavbarItem>
          {config.themeConfig.SearchCommand ? (
            <SearchCommandDialog maxWidth={1024} />
          ) : (
            <>
              {config.themeConfig.header?.items?.project?.repository ===
                "block" && (
                <Link
                  href={`https://github.com/${config.organizationName}/${config.projectName}`}
                  target="block"
                >
                  <Button
                    variant="ghost"
                    className="w-10 h-10 p-2"
                    aria-label="GitHub project repository"
                  >
                    <FaGithub className="text-[21px]" />
                  </Button>
                </Link>
              )}
            </>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col justify-between pb-5">
        <section
          className="flex flex-col w-full overflow-y-auto"
          style={{ height: "calc((100vh - 4rem) - 1.5rem)" }}
          onClick={() => setIsMenuOpen(false)}
        >
          {config.themeConfig.header?.items?.nav?.map((item, index) => (
            <NavbarMenuItem key={`NavbarMenuItem-${item}.${index}`}>
              <TLink
                target={item.target}
                href={item.href}
                to={item.to}
                i18n_link={item.i18n_link || false}
                i18n_text={item.i18n_text || false}
                isNextuiLink
              >
                {item.label}
              </TLink>
            </NavbarMenuItem>
          ))}
        </section>
        <div className="flex flex-row flex-wrap gap-4">
          {config.themeConfig.header?.items?.project?.repository ===
            "block" && (
            <NavbarItem>
              <Link
                href={`https://github.com/${config.organizationName}/${config.projectName}`}
                target="block"
              >
                <Button
                  variant="ghost"
                  className="w-10 h-10 p-0"
                  aria-label="GitHub project repository"
                >
                  <FaGithub className="text-[21px]" />
                </Button>
              </Link>
            </NavbarItem>
          )}
          <NavbarItem>
            <ModeToggle />
          </NavbarItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
