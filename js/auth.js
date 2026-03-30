import { supabase } from './supabase-config.js';

/**
 * Sign in with email + password.
 * Returns { data, error }
 */
export async function signInWithEmail(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  return { data, error };
}

/**
 * Sign up with email + password.
 * Returns { data, error }
 */
export async function signUpWithEmail(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
}

/**
 * Trigger GitHub OAuth redirect.
 */
export async function signInWithGitHub() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: window.location.origin + '/dashboard.html',
    },
  });
  if (error) console.error('GitHub OAuth error:', error.message);
}

/**
 * Sign out the current user.
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error('Sign out error:', error.message);
  else window.location.href = './sign-in.html';
}

/**
 * Get the current session.
 * Returns the session object or null.
 */
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

/**
 * Guard function — call at top of protected pages.
 * Redirects to sign-in if no active session.
 */
export async function requireAuth() {
  const session = await getSession();
  if (!session) {
    window.location.href = './sign-in.html';
  }
  return session;
}
