'use server';

/**
 * @fileOverview Generates website code (HTML, CSS, and JavaScript) based on a user prompt.
 *
 * - generateWebsiteCode - A function that generates website code based on the prompt.
 * - GenerateWebsiteCodeInput - The input type for the generateWebsiteCode function.
 * - GenerateWebsiteCodeOutput - The return type for the generateWebsiteCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWebsiteCodeInputSchema = z.object({
  prompt: z.string().describe('A detailed description of the website to generate.'),
});
export type GenerateWebsiteCodeInput = z.infer<typeof GenerateWebsiteCodeInputSchema>;

const GenerateWebsiteCodeOutputSchema = z.object({
  html: z.string().describe('The HTML code for the website.'),
  css: z.string().describe('The CSS code for the website.'),
  javascript: z.string().optional().describe('The JavaScript code for the website, if any.'),
});
export type GenerateWebsiteCodeOutput = z.infer<typeof GenerateWebsiteCodeOutputSchema>;

export async function generateWebsiteCode(input: GenerateWebsiteCodeInput): Promise<GenerateWebsiteCodeOutput> {
  return generateWebsiteCodeFlow(input);
}

const generateWebsiteCodePrompt = ai.definePrompt({
  name: 'generateWebsiteCodePrompt',
  input: {schema: GenerateWebsiteCodeInputSchema},
  output: {schema: GenerateWebsiteCodeOutputSchema},
  prompt: `You are an expert web developer who can generate HTML, CSS, and JavaScript code based on a user's description.

  Based on the following description, generate the HTML, CSS, and JavaScript code for the website.  Return the code snippets separately as HTML, CSS, and JavaScript. Omit any explanations and only provide code.  If Javascript isn't required, leave that field blank.

Description: {{{prompt}}}`,
});

const generateWebsiteCodeFlow = ai.defineFlow(
  {
    name: 'generateWebsiteCodeFlow',
    inputSchema: GenerateWebsiteCodeInputSchema,
    outputSchema: GenerateWebsiteCodeOutputSchema,
  },
  async input => {
    const {output} = await generateWebsiteCodePrompt(input);
    return output!;
  }
);
