import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://oaalsqqqibzxzrozeqab.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hYWxzcXFxaWJ6eHpyb3plcWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzNTk1NzAsImV4cCI6MjAzNjkzNTU3MH0.DfeqVk5LaQ8dKCM_0SfPUXLGabwMswc-3DDCGke8UkI'
    )