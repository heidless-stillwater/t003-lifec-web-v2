'use server';

/**
 * @fileOverview An AI agent for generating contextually relevant pro tips for coaching clients.
 *
 * - generateProTip - A function that generates a pro tip based on a given context.
 * - GenerateProTipInput - The input type for the generateProTip function.
 * - GenerateProTipOutput - The return type for the generateProTip function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProTipInputSchema = z.object({
  context: z.string().describe('The context for generating the pro tip.'),
});
export type GenerateProTipInput = z.infer<typeof GenerateProTipInputSchema>;

const GenerateProTipOutputSchema = z.object({
  proTip: z.string().describe('The generated pro tip.'),
});
export type GenerateProTipOutput = z.infer<typeof GenerateProTipOutputSchema>;

export async function generateProTip(input: GenerateProTipInput): Promise<GenerateProTipOutput> {
  return generateProTipFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProTipPrompt',
  input: {schema: GenerateProTipInputSchema},
  output: {schema: GenerateProTipOutputSchema},
  prompt: `You are a life coach providing helpful and actionable pro tips to clients.

  Based on the following context, generate a single, concise pro tip:

  Context: {{{context}}}

  Pro Tip:`,
});

const generateProTipFlow = ai.defineFlow(
  {
    name: 'generateProTipFlow',
    inputSchema: GenerateProTipInputSchema,
    outputSchema: GenerateProTipOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
