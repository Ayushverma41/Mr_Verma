"use client";

import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type MediaPreviewDialogProps = {
  title: string;
  src: string;
  children: ReactNode;
};

const imageExtensions = /\.(avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i;

export default function MediaPreviewDialog({
  title,
  src,
  children,
}: MediaPreviewDialogProps) {
  const isImage = imageExtensions.test(src);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex h-[90vh] w-[95vw] max-w-6xl flex-col gap-3 overflow-hidden border-slate-700 bg-slate-950 p-4 text-slate-100">
        <DialogHeader className="pr-10">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="sr-only">
            Preview of {title}
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-auto rounded-lg border border-slate-800 bg-slate-900">
          {isImage ? (
            <div className="flex min-h-full items-center justify-center p-3">
              {/* A plain img supports both local files and linked image URLs. */}
              <img
                src={src}
                alt={title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ) : (
            <iframe
              src={src}
              title={title}
              className="h-full min-h-[70vh] w-full bg-white"
            />
          )}
        </div>

        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200"
        >
          Open in new tab
          <ExternalLink className="h-4 w-4" />
        </a>
      </DialogContent>
    </Dialog>
  );
}
