"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface CodeViewerProps {
  code: string;
  language: string;
}

export default function CodeViewer({ code, language }: CodeViewerProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const onCopy = () => {
    if (hasCopied) return;
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    toast({
      title: "Copied to clipboard!",
    });
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <div className="relative group">
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={onCopy}
        aria-label="Copy code"
      >
        {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
      </Button>
      <ScrollArea className="h-[600px] w-full rounded-md border bg-secondary/50">
        <pre className="p-4">
          <code className="text-secondary-foreground font-code text-sm">{code}</code>
        </pre>
      </ScrollArea>
    </div>
  );
}
