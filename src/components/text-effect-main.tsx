"use client";
import { TextGenerateEffect } from "@/components/ui/text-generation-effect";

const words = `   "here is for the crazy ones , the misfits , the rebels , the troublemakers , the round pegs in the square holes , the ones who see things differently . they are not fond of rules and they have no respect for the status quo . you can quote them , disagree with them , glorify or vilify them . about the only thing you can not do is ignore them . because they change things . they push the human in the forward .  " ~ steve jobs
`;

export function TextGenerateEffectDemo() {
	return <TextGenerateEffect words={words} />;
}
