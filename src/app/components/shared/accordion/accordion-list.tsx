import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import supabase from '@/supabaseClient';
import { NotesAccordion } from '@/types/types';
import { useEffect, useState } from 'react';
import { NotesModal } from './modal-accordion';

export const AccordionList = () => {
  const [data, setData] = useState<NotesAccordion[]>([]);
  const [showForm, setShowForm] = useState(false);

  const dataAccordion = async () => {
    const { data } = await supabase.from('accordion-list').select('*');
    if (data) {
      setData(data);
      console.log(data);
    }
  };

  useEffect(() => {
    dataAccordion();
  }, []);

  return (
    <>
      <NotesModal setShowForm={setShowForm} showForm={showForm} />
      <Accordion type="single" collapsible className="w-full">
        {data.map(item => {
          return (
            <AccordionItem key={item.id} value={item.title}>
              <AccordionTrigger className="font-bold">{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
