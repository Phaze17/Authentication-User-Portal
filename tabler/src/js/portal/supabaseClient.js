import { createClient } from '@supabase/supabase-js';

// TODO: Replace with your actual Supabase project URL and anon key
const SUPABASE_URL = 'https://epnabsezeqretfieogvd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwbmFic2V6ZXFyZXRmaWVvZ3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ1NTA2MTQsImV4cCI6MjA3MDEyNjYxNH0.c5Ubr5C4JEzwuvZg1oGW-Pmzpcn1qKBeXt2i_y8B5wo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
