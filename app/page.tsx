import { Button } from "@/components/ui/button";
import { Linkedin, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex-column pt-40 pb-40 pl-60 pr-60 min-h-screen justify-center align-middle text-slate-300 bg-gradient-to-r from-slate-800 to-indigo-950 ">
      <h1 className="text-6xl font-semibold text-slate-50">Hello!</h1>
      <div className="flex-column gap-4 mt-6">
        <div className="justify-center">
          I&apos;m Ankit Choudhary, a frontend engineer at ThoughtSpot, where I
          craft delightful analytics experiences for our customers. With a keen
          eye for detail and a passion for creating seamless user interfaces, I
          thrive on bringing innovative solutions to the frontend engineering
          landscape.
        </div>

        <div className="flex justify-center mt-6">
          <p>
            Looking to connect? Whether you&apos;re a recruiter searching for
            top frontend talent or a client needing a cutting-edge solution,
            I&apos;m here to help. Let&apos;s discuss how we can achieve your
            goals together.
          </p>
        </div>
      </div>
      <div className="flex gap-6 mt-8">
        <Button variant="secondary" asChild>
          <Link href="https://www.linkedin.com/in/meetankitchoudhary">
            <Linkedin strokeWidth={1.5} className="mr-2 h-4 w-4" />
            Visit my LinkedIn Profile
          </Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="https://topmate.io/ankit_choudhary">
            <MessagesSquare strokeWidth={1.5} className="mr-2 h-4 w-4" />
            Schedule a conversation
          </Link>
        </Button>
      </div>
    </main>
  );
}
