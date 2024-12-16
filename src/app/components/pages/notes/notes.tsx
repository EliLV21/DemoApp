import { AccordionList } from '../../shared/accordion/accordion-list';
import { NavBar } from '../../shared/nav/nav';

export const NotesPage = () => {
  return (
    <div className="container p-8">
      <NavBar />
      <AccordionList />
    </div>
  );
};
