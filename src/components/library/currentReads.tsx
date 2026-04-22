import React from "react";
import { BookOpen } from "lucide-react";

type BookStatus = "reading" | "finished" | "paused";

type Book = {
  title: string;
  author: string;
  status: BookStatus;
  note: string;
  finishedOn?: string;
};

// TODO: replace with real entries
const books: Book[] = [
  {
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    status: "reading",
    note: "Rereading before customer interviews. The anti-patterns are painfully familiar.",
  },
  {
    title: "Working in Public",
    author: "Nadia Eghbal",
    status: "finished",
    finishedOn: "2026-02",
    note: "Changed how I think about open source as production infrastructure vs. community.",
  },
  {
    title: "Tiny Experiments",
    author: "Anne-Laure Le Cunff",
    status: "paused",
    note: "Good framework, drifted off somewhere around chapter four.",
  },
];

const statusLabel: Record<BookStatus, string> = {
  reading: "Reading",
  finished: "Finished",
  paused: "Paused",
};

const statusAccent: Record<BookStatus, string> = {
  reading: "text-emerald-500",
  finished: "text-muted-foreground",
  paused: "text-amber-500",
};

const CurrentReads = () => {
  return (
    <section className="w-full flex items-center flex-col">
      <div className="max-w-3xl w-full border-x border-border">
        <h2 className="border-b border-border text-3xl font-semibold px-4 text-foreground flex items-center gap-3">
          <BookOpen size={22} className="text-muted-foreground" />
          Current Reads
        </h2>
        <div className="p-4 sm:p-6 space-y-4">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded-xl border border-border p-4 space-y-1.5 bg-muted/20"
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-semibold text-foreground text-[15px]">
                  {book.title}
                </h3>
                <span
                  className={`text-[11px] font-mono uppercase tracking-wide ${statusAccent[book.status]}`}
                >
                  {statusLabel[book.status]}
                  {book.finishedOn ? ` · ${book.finishedOn}` : ""}
                </span>
              </div>
              <p className="text-sm font-mono text-muted-foreground">
                {book.author}
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed font-mono">
                {book.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentReads;
