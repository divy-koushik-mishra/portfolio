import React from "react";
import { BookOpen } from "lucide-react";

type BookStatus = "reading" | "finished" | "paused";

type Book = {
  title: string;
  author: string;
  status: BookStatus;
  note: string;
};

const books: Book[] = [
  {
    title: "BuildIt",
    author: "Albinder Dhindsa",
    status: "reading",
    note: "Getting an 'Indian version of Hard Thing About Hard Things' vibe from this. Reading to understand the pure chaos behind the scale.",
  },
  {
    title: "12 Years",
    author: "Chetan Bhagat",
    status: "reading",
    note: "Sometimes the brain needs to clear its cache and step away from system architectures. A nostalgic, guilty-pleasure read to reset the system.",
  },
  {
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    status: "finished",
    note: "The definitive guide to wartime building. Required reading for anyone who thinks startups are just ping-pong tables and easy funding rounds.",
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    status: "paused",
    note: "A much-needed break from startup frameworks. A good reminder that the universe is mostly absurd anyway. Will return to it.",
  },
];

const statusMeta: Record<
  BookStatus,
  { label: string; dot: string; text: string }
> = {
  reading: {
    label: "READING",
    dot: "bg-emerald-500",
    text: "text-emerald-500",
  },
  finished: {
    label: "FINISHED",
    dot: "bg-muted-foreground",
    text: "text-muted-foreground",
  },
  paused: {
    label: "PAUSED",
    dot: "bg-amber-500",
    text: "text-amber-500",
  },
};

const CurrentReads = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <div className="border-b border-border px-4 py-3 flex items-baseline justify-between">
          <h2 className="text-3xl font-semibold text-foreground flex items-center gap-3">
            <BookOpen size={22} className="text-muted-foreground" />
            Books
          </h2>
          <span className="font-mono text-xs text-muted-foreground">
            {books.length.toString().padStart(2, "0")} entries
          </span>
        </div>
        <ul className="divide-y divide-border">
          {books.map((book) => {
            const meta = statusMeta[book.status];
            return (
              <li
                key={book.title}
                className="px-4 py-4 sm:px-6 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-2 font-mono text-[11px] tracking-wide mb-1.5">
                  <span
                    className={`inline-block size-1.5 rounded-full ${meta.dot}`}
                    aria-hidden="true"
                  />
                  <span className={meta.text}>{meta.label}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <h3 className="font-semibold text-foreground text-[15px] leading-snug">
                    {book.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {book.author}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-foreground/80 leading-relaxed font-mono">
                  {book.note}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default CurrentReads;
