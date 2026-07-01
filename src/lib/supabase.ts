import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabaseConfigError =
  !supabaseUrl || !supabaseAnonKey
    ? 'Missing VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY. Check your .env file (or your Bolt/Vercel project\'s environment variables) and restart the dev server.'
    : null;

if (supabaseConfigError) {
  // Log loudly, but do NOT throw here -- throwing at module scope would crash
  // the entire app (every page imports this file indirectly), turning a config
  // problem into a blank white screen with no clue why.
  console.error(`[Supabase] ${supabaseConfigError}`);
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder-anon-key'
);
