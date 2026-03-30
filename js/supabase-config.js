import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ygjcmbihlaensweosszj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnamNtYmlobGFlbnN3ZW9zc3pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5NjE1OTcsImV4cCI6MjA4MTUzNzU5N30.mLvwmZJoEXcWcqmbZGC0mNa12wPx9fonl7tv6NvZcTg';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
