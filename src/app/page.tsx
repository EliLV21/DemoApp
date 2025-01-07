'use client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BoardPage } from './components/pages/board/board';
import { CarouselPage } from './components/pages/carousel/carousel';
import supabase from '@/supabaseClient';
import { NotesPage } from './components/pages/notes/notes';
import { Suspense, useEffect, useState } from 'react';
import { HomePage } from './components/pages/home/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserNameContext } from './components/shared/context';

export interface DefectValue {
  name: string;
  setName: (name: string) => string;
}

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const queryClient = new QueryClient();

  const [defectValue, setDefectValue] = useState<DefectValue>({
    name: '',
    setName: (name: string) => {
      setDefectValue(prev => ({ ...prev, name }));
      return name;
    },
  });

  useEffect(() => {
    const signIn = async () => {
      // if (typeof window !== 'undefined') {
      setIsClient(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: 'miriam.elizabeth.lv@gmail.com',
        password: 'password',
      });
      if (error) {
        console.error('Error signing in:', error.message);
      }
      // }
    };
    signIn();
  }, [isClient]);

  if (!isClient) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <UserNameContext.Provider value={defectValue}>
          <Router future={{ v7_startTransition: true }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/carousel" element={<CarouselPage />} />
                <Route path="/notes" element={<NotesPage />} />
              </Routes>
            </Suspense>
          </Router>
        </UserNameContext.Provider>
      </QueryClientProvider>
    </div>
  );
}
