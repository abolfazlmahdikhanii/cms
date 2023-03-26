import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ydvgwyanjxqhlluftkwh.supabase.co"
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkdmd3eWFuanhxaGxsdWZ0a3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3NTY4MTYsImV4cCI6MTk5NTMzMjgxNn0.8M66O_otT-c1bWNoHU45uH0kKxJNHBuC1pbY-c672Bg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)