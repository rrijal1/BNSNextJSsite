"use client";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types/allTypes";
import { motion } from "framer-motion";
import { itemVariants } from "./AnimatedSection";

export default function StoryCard({ post }: { post: Post }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col"
    >
      <Link href={`/stories/${post.slug}`} className="flex flex-col h-full">
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
          <div className="relative w-full h-48 bg-gray-200">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-full object-contain"
              width={400}
              height={200}
            />
          </div>
          <div className="p-4 flex flex-col flex-grow">
            {/* Correct class for nested brand.blue */}
            <h2 className="text-xl font-semibold mb-2 text-footerBlue">
              {post.title}
            </h2>
            <p className="text-footerBlue">
              {post.author ? `By ${post.author}` : `Story of ${post.people}`}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
