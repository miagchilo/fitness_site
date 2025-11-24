import { createClient } from '@supabase/supabase-js';

// ==============================================================================
// SUPABASE CONFIGURATION
// ==============================================================================

// Your provided keys (Hardcoded Fallback)
const FALLBACK_URL = 'https://zexmcojdkxhweouxcedm.supabase.co';
const FALLBACK_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpleG1jb2pka3hod2VvdXhjZWRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5OTc5ODEsImV4cCI6MjA3OTU3Mzk4MX0.hrGMvL_fTEc6K0Cvgq6vpprOF29cTGsvK7eURghOQvU';

// 1. Try to get keys from Vercel Environment Variables (Standard Practice)
// 2. If missing, fall back to the hardcoded keys provided

// Helper to safely access env variables without crashing if import.meta.env is undefined
const getEnv = (key: string) => {
  try {
    const meta = import.meta as any;
    return (meta && meta.env && meta.env[key]) ? meta.env[key] : undefined;
  } catch (e) {
    return undefined;
  }
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL') || FALLBACK_URL;
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY') || FALLBACK_KEY;

// ==============================================================================

const hasKeys = supabaseUrl && supabaseAnonKey;

export const supabase = hasKeys
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;