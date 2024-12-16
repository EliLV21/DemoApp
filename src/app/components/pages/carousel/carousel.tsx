import { NavBar } from '../../shared/nav/nav';

const ExampleCarouselImage = ({ text }: { text: string }) => <div>{text}</div>;

export const CarouselPage = () => {
  // const data = [
  //   {
  //     id: 1,
  //     name: 'First slide',
  //     image: 'https://www.ilovepdf.com/img/ilovepdf/social/es/imagepdf.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Second slide',
  //     image: 'https://www.ilovepdf.com/img/ilovepdf/social/es/imagepdf.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Third slide',
  //     image: 'https://www.ilovepdf.com/img/ilovepdf/social/es/imagepdf.png',
  //   },
  // ];
  return (
    <div className="container p-8">
      <NavBar />
      <h1>Carousel Page</h1>
    </div>
  );
};
