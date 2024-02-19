import { supabaseClient } from "@/utils/supabase/client";

const getUserId = async () => {
  const supabase = supabaseClient();
  const user: any = await supabase.auth.getUser();
  return user.id;
};
export default getUserId;

/**
 {
  user: {
    id: 'a80a0293-3ec7-4b72-a969-a39fb69bf7b6',
    aud: 'authenticated',
    role: 'authenticated',
    email: 'achuth.hadnoor123@gmail.com',
    email_confirmed_at: '2024-02-13T14:21:25.218235Z',
    phone: '',
    confirmed_at: '2024-02-13T14:21:25.218235Z',
    last_sign_in_at: '2024-02-13T14:21:25.778193Z',
    app_metadata: { provider: 'google', providers: [Array] },
    user_metadata: {
      avatar_url: 'https://lh3.googleusercontent.com/a/ACg8ocILW60jkxcKr57aXvIa-02HmLWqLNrZE0CbkPzh3QzVQ7Po=s96-c',
      email: 'achuth.hadnoor123@gmail.com',
      email_verified: true,
      full_name: 'Achuth hadnoor',
      iss: 'https://accounts.google.com',
      name: 'Achuth hadnoor',
      phone_verified: false,
      picture: 'https://lh3.googleusercontent.com/a/ACg8ocILW60jkxcKr57aXvIa-02HmLWqLNrZE0CbkPzh3QzVQ7Po=s96-c',
      provider_id: '112712760224600574907',
      sub: '112712760224600574907'
    },
    identities: [ [Object] ],
    created_at: '2024-02-13T14:21:25.208986Z',
    updated_at: '2024-02-13T15:30:39.515638Z'
  }
}
 */
