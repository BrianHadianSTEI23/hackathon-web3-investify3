"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Navbar } from "../../component/Navbar";
import { navItems } from "../../../data/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MoreHorizontal, ThumbsUp, MessageCircle } from "lucide-react";
import { comments } from "../../../data/data";

interface CommentProps {
  likes?: number;
  comments?: number;
}

export default function Forum() {
  return (
    <div className="flex justify-center">
      <Navbar navItems={navItems} />
      <div className="h-[200vh] flex items-center justify-center text-2xl"></div>

    <div className="w-full p-15 mt-10 ml-6 mr-6 flex flex-col gap-3">
      {comments.map((comment) => (
        <Card
          key={comment.id}
          className="w-full p-4 shadow-md rounded-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-lg"
        >
          {/* Header */}
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
              {/* <div>
                <DropdownMenu />
              </div> */}
            </div>

          {/* Comment Content */}
          <CardContent className="space-y-3 -mt-2">
              <p className="text-gray-700 text-sm">{comment.content}</p>
                {comment.image && (
                <div className="flex justify-center mt-2">
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
              <LikeButton likes={comment.likes} />
              <CommentButton comments={comment.comments} />
              <DropdownMenu />
            </div>
        </Card>
      ))}
    </div>
    </div>
  );
}

function LikeButton({ likes = 0 }: CommentProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <button
      className={`flex items-center gap-1 transition ${liked ? "text-[#967BBB]" : "hover:text-[#967BBB]"}`}
      onClick={handleLike}
    >
      <ThumbsUp size={16} fill={liked ? "#967BBB" : "none"} />
      {likeCount} likes
    </button>
  );
}


function CommentButton({ comments = 0 }: CommentProps) {
  const [commented, setCommented] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState<string[]>([]);

  const handleCommentSubmit = () => {
    if (commentText.trim()) {
      setCommentList([...commentList, commentText]);
      setCommentText("");
    }
  };

  return (
    <div className="w-3/4">
      <button
        className={`flex items-center gap-1 transition ${
          commented ? "text-[#967BBB]" : "hover:text-[#967BBB]"
        }`}
        onClick={() => setCommented(!commented)}
      >
        <MessageCircle size={16} fill={commented ? "#967BBB" : "none"} />
        {commentList.length + comments} comments
      </button>

      {/* Kotak Komentar */}
      {commented && (
        <div className="mt-2 flex flex-col gap-2">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Tulis komentar..."
            className="w-full p-2 border border-gray-300 rounded-lg resize-none"
            rows={3}
          />
          <button
            onClick={handleCommentSubmit}
            className="self-end px-4 py-2 bg-[#967BBB] text-white rounded-lg transition hover:bg-[#8157BB]"
          >
            Kirim
          </button>

          {/* Daftar Komentar */}
          <div className="mt-2">
            {commentList.map((comment, index) => (
              <div
                key={index}
                className="p-2 bg-gray-100 rounded-lg my-1 text-sm"
              >
                {comment}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


function DropdownMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="focus:outline-none"
      >
        <MoreHorizontal
          size={20}
          className={`cursor-pointer transition ${
            open ? "text-[#967BBB]" : "hover:text-gray-600"
          }`}
        />
      </button>

      {open && (
        <div className="absolute top-0 left-0  translate-x-[-50%] translate-y-[-125%] s-0 mt-2 w-32 bg-white shadow-lg rounded-lg p-2 text-sm z-50" style={{ minWidth: "50px" }}>
          <button className="w-full text-left p-2 hover:bg-gray-100 rounded">
            Laporkan
          </button>
        </div>
      )}
    </div>
  );
}