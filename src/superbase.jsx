import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://bvduevbhjzmegwyyrziy.supabase.co"
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZHVldmJoanptZWd3eXlyeml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4MDAzMDksImV4cCI6MTk5NDM3NjMwOX0.x2CTRN2tCSW_HUTfh6kgR0H616nKZOEwhSx4sN7k0Ms'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)