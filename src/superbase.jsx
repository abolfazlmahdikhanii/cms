import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://shcalthhdsybfpctkmpm.supabase.co"
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNoY2FsdGhoZHN5YmZwY3RrbXBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk2NTc1OTAsImV4cCI6MTk5NTIzMzU5MH0.EEHusL3aJfp5jBk4Vx_LII1_nFgBypwt9t5_3jf6k98'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)