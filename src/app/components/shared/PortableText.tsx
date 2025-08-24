import React from "react";
import { PortableText as SanityPortableText } from "@portabletext/react";
import {
  PortableTextBlock,
  TypedObject,
  PortableTextMarkDefinition,
} from "@portabletext/types";
import {
  PortableTextComponentProps,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import Image from "next/image";

interface PortableTextProps {
  value: PortableTextBlock[];
  variant?: "default" | "blog";
}

// Types for Sanity images
interface SanityImage extends TypedObject {
  _type: "image";
  asset: {
    url: string;
    _ref?: string;
  };
  alt?: string;
}

// Type for link mark
interface LinkMark extends PortableTextMarkDefinition {
  href?: string;
  blank?: boolean;
}

const createComponents = (variant: "default" | "blog" = "default") => ({
  types: {
    // Image support for blog posts
    image: ({ value }: PortableTextComponentProps<SanityImage>) => (
      <div className="my-8">
        <Image
          src={value.asset?.url}
          alt={value.alt || "Image from post"}
          className="w-full h-auto rounded-xl shadow-lg"
          width={800}
          height={600}
        />
      </div>
    ),
  },
  block: {
    // Normal paragraph
    normal: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <p
        className={`mb-6 leading-relaxed ${
          variant === "blog" ? "text-gray-800 text-lg" : "text-gray-700"
        }`}
      >
        {children}
      </p>
    ),
    // Headings with brand colors
    h1: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h1
        className={`font-bold text-brandBlue mb-8 mt-12 ${
          variant === "blog" ? "text-4xl md:text-5xl" : "text-3xl"
        }`}
      >
        {children}
      </h1>
    ),
    h2: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h2
        className={`font-semibold text-brandBlue mb-6 mt-10 ${
          variant === "blog" ? "text-3xl md:text-4xl" : "text-2xl"
        }`}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h3
        className={`font-medium text-brandBlue mb-4 mt-8 ${
          variant === "blog" ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {children}
      </h3>
    ),
    h4: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <h4
        className={`font-medium text-gray-800 mb-3 mt-6 ${
          variant === "blog" ? "text-xl md:text-2xl" : "text-lg"
        }`}
      >
        {children}
      </h4>
    ),
    // Enhanced blockquote
    blockquote: ({
      children,
    }: PortableTextComponentProps<PortableTextBlock>) => (
      <blockquote className="border-l-4 border-brandRed pl-6 my-8 italic text-gray-700 bg-gradient-to-r from-gray-50 to-transparent py-4 rounded-r-lg">
        <div className="text-lg">{children}</div>
      </blockquote>
    ),
  },
  list: {
    // Styled bullet lists
    bullet: ({ children }: PortableTextComponentProps<TypedObject>) => (
      <ul className="list-none mb-6 space-y-3 ml-4">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="flex items-start">
            <span className="text-brandRed mr-3 mt-1">•</span>
            <div className="text-gray-700">{child}</div>
          </li>
        ))}
      </ul>
    ),
    // Styled numbered lists
    number: ({ children }: PortableTextComponentProps<TypedObject>) => (
      <ol className="list-none mb-6 space-y-3 ml-4 counter-reset-list">
        {React.Children.map(children, (child, index) => (
          <li key={index} className="flex items-start counter-increment-list">
            <span className="bg-brandBlue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
              {index + 1}
            </span>
            <div className="text-gray-700">{child}</div>
          </li>
        ))}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <>{children}</>
    ),
    number: ({ children }: PortableTextComponentProps<PortableTextBlock>) => (
      <>{children}</>
    ),
  },
  marks: {
    // Enhanced text styling
    strong: ({
      children,
    }: PortableTextMarkComponentProps<PortableTextMarkDefinition>) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({
      children,
    }: PortableTextMarkComponentProps<PortableTextMarkDefinition>) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    // Professional links
    link: ({ children, value }: PortableTextMarkComponentProps<LinkMark>) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-brandBlue hover:text-brandRed underline decoration-2 underline-offset-2 transition-colors duration-200 font-medium"
      >
        {children}
      </a>
    ),
  },
});

export default function PortableText({
  value,
  variant = "default",
}: PortableTextProps) {
  if (!value || !Array.isArray(value)) {
    return null;
  }

  const components = createComponents(variant);

  return (
    <div
      className={`prose prose-lg max-w-none ${variant === "blog" ? "prose-xl" : ""}`}
    >
      <SanityPortableText value={value} components={components} />
    </div>
  );
}
