"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/utils/cn";


import localFont  from "next/font/local";
const myFont = localFont({
  src: "./mainfont.ttf",
  display: 'swap',
})





export function BackgroundBoxesDemo() {
	return (
		<div className="h-[50rem] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
			<div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

			<Boxes />
			<h1
				className={cn(
					"md:text-9xl text-xl text-white relative z-20 font-extrabold   italic",
				)}
				style={myFont.style}>
				Saas is hard
			</h1>
			<p
				className="text-center mt-2 text-neutral-300 relative z-20"
				style={myFont.style}>
				But making it look good does not have to be :)
			</p>
		</div>
	);
}
