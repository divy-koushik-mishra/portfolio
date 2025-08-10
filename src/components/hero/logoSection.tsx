import Image from "next/image";
import React from "react";
import { ContextMenu } from "../ui/context-menu";
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@radix-ui/react-context-menu";

const LogoSection = () => {
  return (
    <section className="max-w-3xl border-x border-border w-full aspect-2/1 sm:aspect-3/1 bg-bg-secondary bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-foreground)]/5">
      <ContextMenu>
        <ContextMenuTrigger className="w-full h-full flex items-center justify-center">
          <Image
            src={"/dk-pixelated.svg"}
            height={64}
            width={128}
            alt="'hero-logo"
          />
        </ContextMenuTrigger>
        <ContextMenuContent className="w-52 ring-border bg-card text-card-foreground rounded-2xl px-2 shadow-pop backdrop-blur-md ring shadow-[0_6px_24px_rgba(0,0,0,.25)] dark:shadow-[0_6px_24px_rgba(255,255,255,.1)]">
          <ContextMenuItem inert className=" ">
            Back
            {/* <ContextMenuShortcut className="">⌘[</ContextMenuShortcut> */}
          </ContextMenuItem>
          <ContextMenuItem inert className="w-full">
            Back
            {/* <ContextMenuShortcut>⌘[</ContextMenuShortcut> */}
          </ContextMenuItem>
          <ContextMenuItem inert className="w-full">
            Back
            {/* <ContextMenuShortcut>⌘[</ContextMenuShortcut> */}
          </ContextMenuItem>
          <ContextMenuItem inert className="w-full">
            Back
            {/* <ContextMenuShortcut>⌘[</ContextMenuShortcut> */}
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </section>
  );
};

export default LogoSection;
