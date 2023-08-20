import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fgjqoyaopkeqobbtjcsn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnanFveWFvcGtlcW9iYnRqY3NuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg4MzQ3NjAsImV4cCI6MjAwNDQxMDc2MH0.rcOAp6JT25E_oojkTE6LV975C4pxtF2QqkNhKCipOZg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
