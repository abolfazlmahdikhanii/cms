import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tfqvcxqiufqbgkqiovtd.supabase.co"
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmcXZjeHFpdWZxYmdrcWlvdnRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY3MjUzNzksImV4cCI6MTk5MjMwMTM3OX0.QNUgXJD_BtEJiis-28eSnqUcE2H5mtKoGO8pg2A8KUs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)