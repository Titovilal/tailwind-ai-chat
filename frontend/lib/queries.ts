import { createClient } from '@supabase/supabase-js';

import dotenv from "dotenv";
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
);

export async function createUserMessage(userMessage: UserMessage): Promise<number> {
    const { data, error } = await supabase
    .from('usermessage').insert([userMessage])
    .select('id')
    .single();

  if (error) {
    console.error('Error inserting user message:', error);
    throw new Error('Error inserting user message');
  }

  return data.id;
}


export async function createAIMessage(aiMessage: AIMessageResponse): Promise<number> {
    const { data, error } = await supabase
    .from('aimessage').insert([aiMessage])
    .select('id')
    .single();

  if (error) {
    console.error('Error inserting user message:', error);
    throw new Error('Error inserting user message');
  }

  return data.id;
}

export async function createQA(qa: QAResponse): Promise<number> {
    const { data, error } = await supabase
    .from('qa').insert([qa])
    .select('id')
    .single();

  if (error) {
    console.error('Error inserting user message:', error);
    throw new Error('Error inserting user message');
  }

  return data.id;
}

export default{ createUserMessage, createAIMessage, createQA };