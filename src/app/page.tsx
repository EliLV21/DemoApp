'use client';
import { HomePage } from './components/pages/home/home';
import { UserNameContext } from './components/shared/context';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BoardPage } from './components/pages/board/board';
import { CarouselPage } from './components/pages/carousel/carousel';
import supabase from '@/supabaseClient';
import { NotesPage } from './components/pages/notes/notes';

export interface DefectValue {
  name: string;
  setName: (name: string) => string;
}

export default function Home() {
  const queryClient = new QueryClient();

  const [defectValue, setDefectValue] = useState<DefectValue>({
    name: '',
    setName: (name: string) => {
      setDefectValue(prev => ({ ...prev, name }));
      return name;
    },
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      supabase.auth.signInWithPassword({
        email: 'miriam.elizabeth.lv@gmail.com',
        password: 'password',
      });
    }
  }, []);

  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <UserNameContext.Provider value={defectValue}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/board" element={<BoardPage />} />
              <Route path="/carousel" element={<CarouselPage />} />
              <Route path="/notes" element={<NotesPage />} />
            </Routes>
          </Router>
        </UserNameContext.Provider>
      </QueryClientProvider>
    </div>
  );
}
