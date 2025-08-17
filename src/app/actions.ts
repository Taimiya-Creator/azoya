"use server";

import { generateWebsiteCode, type GenerateWebsiteCodeOutput } from "@/ai/flows/generate-website-code";

export async function handleGenerateWebsite(prompt: string): Promise<{ success: boolean; data?: GenerateWebsiteCodeOutput; error?: string }> {
  if (!prompt) {
    return { success: false, error: "Prompt cannot be empty." };
  }

  try {
    const result = await generateWebsiteCode({ prompt });
    return { success: true, data: result };
  } catch (error) {
    console.error("Error generating website:", error);
    // This could be a more specific error message based on the error type
    return { success: false, error: "An unexpected error occurred while generating the website. Please try again later." };
  }
}
