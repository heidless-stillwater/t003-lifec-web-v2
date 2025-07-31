'use server';

import { generateProTip, GenerateProTipInput } from '@/ai/flows/generate-pro-tip';

export async function getProTipAction(input: GenerateProTipInput) {
  try {
    const result = await generateProTip(input);
    return { success: true, proTip: result.proTip };
  } catch (error) {
    console.error('Error generating pro tip:', error);
    return { success: false, error: 'Failed to generate a pro tip. Please try again later.' };
  }
}
