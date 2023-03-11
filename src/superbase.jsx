import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://uqaecciafxzyxmeysbkq.supabase.co"
const supabaseAnonKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxYWVjY2lhZnh6eXhtZXlzYmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1MjA4OTQsImV4cCI6MTk5NDA5Njg5NH0.bdfAhVhc1AGQdBlcsmVWjKTCwNaqkRwyStRsX8JMgEI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)