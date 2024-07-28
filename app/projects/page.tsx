"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import React from "react";
import Github from "../components/Github";
export default function CardHoverEffectDemo() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <div className="max-w-6xl mx-auto px-8">
        <Github />
      </div>
    </div>
  );
}
const projects = [
  {
    title: "FLITWICK",
    description:
      "A project management tool that uses boards, lists, and cards to organize tasks and collaborate with team members",
    link: "",
  },
  {
    title: "CHATON",
    description:
      "A a real-time chat application to facilitate seamless communication between users",
    link: "https://github.com/iynes/Chaton",
  },
  {
    title: "NPL-CLOCKS",
    description:
      "A User Interface for displaying the real time syncronization status of Network Time Displays at National Physical Laboratory",
    link: "https://github.com/iynes/npl_clocks",
  },
  {
    title: "SIGNLANGUAGE DETECTION USING CNNs",
    description:
      "Developed a sign language detection system to facilitate communication for individuals with hearing impairments.",
    link: "https://github.com/iynes/SignLanguageDetection",
  },
  {
    title: "PDF CHATBOT",
    description:
      "PDF Chatbot is a project aimed at assisting users in extracting information from PDF files using a chatbot interface.",
    link: "hhttps://github.com/iynes/LLMate",
  },
  {
    title: "INVENTRA(In Progress)",
    description: "A instagram like social media platform for sharing ideas   ",
    link: "",
  },
];
