import Image from "next/image";
import React from "react";
import TextChangingUpwards from "./textChangingUpwards";

const VerifiedIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] absolute -right-2 bottom-2 "
    data-state="closed"
    data-slot="tooltip-trigger"
  >
    <path
      fill="#009CF5"
      d="M24 12a4.454 4.454 0 0 0-2.564-3.91 4.437 0 0 0-.948-4.578 4.436 0 0 0-4.577-.948A4.44 0 0 0 12 0a4.423 0 0 0-3.9 2.564 4.434 0 0 0-2.43-.178 4.425 0 0 0-2.158 1.126 4.42 0 0 0-1.12 2.156 4.42 0 0 0 .183 2.421A4.456 4.456 0 0 0 0 12a4.465 4.465 0 0 0 2.576 3.91 4.433 0 0 0 .936 4.577 4.459 0 0 0 4.577.95A4.454 4.454 0 0 0 12 24a4.439 4.439 0 0 0 3.91-2.563 4.26 4.26 0 0 0 5.526-5.526A4.453 4.453 0 0 0 24 12Zm-13.709 4.917-4.38-4.378 1.652-1.663 2.646 2.646L15.83 7.4l1.72 1.591-7.258 7.926Z"
    ></path>
  </svg>
);

const professionalTitles = ["Delivering end to end software", "Maths enthuciast", "Studing AI/ML"]

const ProfileCardSection = () => {
  return (
    <section className="max-w-3xl border-x border-border w-full flex">
      {/* image part */}
      <div className="border-r border-border p-1">
        <Image
          src={"/divy-koushik.webp"}
          width={160}
          height={160}
          alt="profile-img"
          className="rounded-full ring-1 ring-offset-2 ring-border"
        />
      </div>
      {/* text part */}
      <div className="flex flex-col flex-1">
        <div className="w-full flex grow items-end bg-[repeating-linear-gradient(315deg,var(--color-muted)_0,var(--color-muted)_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]">
          <div className="line-clamp-1 font-mono text-xs text-muted-foreground select-none max-sm:hidden px-1">
            text-3xl <span className="inline dark:hidden">text-foreground</span>
            <span className="hidden dark:inline">text-foreground</span> font-medium
          </div>
        </div>
        <div className=" border-y border-b border-border w-full">
          <div className="text-3xl font-semibold px-4 py-1 flex items-center relative w-fit text-card-foreground">
            Divy Koushik Mishra <VerifiedIcon />{" "}
          </div>
        </div>
        <div className=" px-4 py-1">
            <TextChangingUpwards texts={professionalTitles} />
        </div>
      </div>
    </section>
  );
};

export default ProfileCardSection;
