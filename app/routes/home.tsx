import React from "react";
import Left from "~/components/left";
// import type { Route } from "./+types/home";

export function meta() {
  return [
    { title: "Home | Yogi Sugalih" },
    { name: "description", content: "Hi, let me introduce myself. My name is Mohammad Yogi Sugalih, I am currently 23 years old, and I live in **Jakarta Barat**. My hobby is creating projects using JavaScript code. I enjoy exploring new technologies and building innovative solutions to solve real-world problems. Living in Jakarta Barat has given me access to a vibrant tech community, which has inspired me to grow and improve my skills. I am passionate about web development and always eager to learn more." },
  ];
}

export default function Home() {
  return (
    <Left />
  )
}
