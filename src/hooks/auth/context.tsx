import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const useAuth = async () => {
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();
  const user = await supabase.auth.getUser()

  useEffect(() => {
    setLoading(false);
  }, [user]);

  const signIn = async (email: string, password: string) => {
    try {
      const { data: { user, session }, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return { user, session };
    } catch (error: any) {
      console.error('Error signing in:', error?.message);
      throw error;
    }
  };

  const signUp = async (email: any, password: any) => {
    try {
      const { data: { user, session, }, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      return { user, session };
    } catch (error: any) {
      console.error('Error signing up:', error.message);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error: any) {
      console.error('Error signing out:', error?.message);
      throw error;
    }
  };

  return {
    user,
    loading,
    signIn,
    signUp,
    signOut,
  };
};

export default useAuth;
