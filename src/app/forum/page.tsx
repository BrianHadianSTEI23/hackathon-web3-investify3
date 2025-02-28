"use client";

import Image from "next/image";
import { useState } from "react";
import { Navbar } from "../../component/Navbar";
import { navItems } from "../../../data/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreHorizontal, ThumbsUp, MessageCircle } from "lucide-react";
import { comments } from "../../../data/data";

export default function Forum() {
  return (
    <div className="flex justify-center">
      <Navbar navItems={navItems} />
      <div className="h-[200vh] flex items-center justify-center text-2xl"></div>

    <div className="w-full p-15 mt-10 ml-6 mr-6 flex flex-col gap-5">
      {comments.map((comment) => (
        <Card
          key={comment.id}
          className="w-full p-4 shadow-md rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg"
        >
          {/* Header */}
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <Image
                //src={comment.user.avatar}
                src="/logo.png"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold">{comment.user.name}</p>
                <p className="text-xs text-gray-500">{comment.date}</p>
              </div>
            </div>

          </div>

          {/* Comment Content */}
          <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm">{comment.content}</p>
                {comment.image && (
                <div className="flex justify-center">
                  <Image
                    src="/logo.png"
                    alt="Comment Image"
                    width={200}
                    height={300}
                    className="rounded-lg object-cover"
                  />
                </div>
              )}
            </CardContent>

          {/* Footer: Likes, Comments, and Dropdown */}
          <div className="flex justify-around items-center text-sm text-gray-600 border-t pt-3">
              <button className="flex items-center gap-1 hover:text-blue-500 transition">
                <ThumbsUp size={16} />
                {comment.likes} likes
              </button>
              <button className="flex items-center gap-1 hover:text-blue-500 transition">
                <MessageCircle size={16} />
                {comment.comments} comments
              </button>
              <DropdownMenu />
            </div>
        </Card>
      ))}
    </div>
    </div>
  );
}

/* Dropdown Component */
function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>
        <MoreHorizontal size={20} className="cursor-pointer hover:text-gray-600 transition" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg p-2 text-sm">
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
            Laporkan
          </button>
        </div>
      )}
    </div>
  );
}
