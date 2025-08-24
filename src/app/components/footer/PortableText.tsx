import React from "react";
import { PortableText as SanityPortableText } from "@portabletext/react";
import {
  PortableTextBlock,
  TypedObject,
  PortableTextMarkDefinition,
} from "@portabletext/types";
import {
  PortableTextReactComponents,
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";

interface PortableTextProps {
  value: PortableTextBlock[];
}

// Define the link mark type based on the documentation
interface LinkMark extends PortableTextMarkDefinition {
  href?: string;
  blank?: boolean;
}

const components: Partial<PortableTextReactComponents> = {
  block: {
    // Normal paragraph
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    // Headings
    h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1 className="text-3xl font-bold text-brandBlue mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2 className="text-2xl font-semibold text-brandBlue mb-4 mt-6">
        {children}
      </h2>
    ),
    h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h3 className="text-xl font-medium text-brandBlue mb-3 mt-5">
        {children}
      </h3>
    ),
    h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h4 className="text-lg font-medium text-gray-800 mb-2 mt-4">
        {children}
      </h4>
    ),
    // Blockquote
    blockquote: ({
      children,
    }: PortableTextComponentProps<PortableTextBlock>) => (
      <blockquote className="border-l-4 border-brandRed pl-4 my-6 italic text-gray-600 bg-gray-50 py-2">
        {children}
      </blockquote>
    ),
  },
  list: {
    // Bullet list
    bullet: ({ children }: PortableTextComponentProps<TypedObject>) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 ml-4">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }: PortableTextComponentProps<TypedObject>) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    // Bullet list item
    bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <li className="mb-1">{children}</li>
    ),
    // Numbered list item
    number: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <li className="mb-1">{children}</li>
    ),
  },
  marks: {
    // Bold text
    strong: ({
      children,
    }: PortableTextMarkComponentProps<PortableTextMarkDefinition>) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    // Italic text
    em: ({
      children,
    }: PortableTextMarkComponentProps<PortableTextMarkDefinition>) => (
      <em className="italic">{children}</em>
    ),
    // Links
    link: ({ children, value }: PortableTextMarkComponentProps<LinkMark>) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-brandBlue hover:text-brandRed underline transition-colors duration-200"
      >
        {children}
      </a>
    ),
  },
};

export default function PortableText({ value }: PortableTextProps) {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  return (
    <div className="prose prose-lg max-w-none">
      <SanityPortableText value={value} components={components} />
    </div>
  );
}
