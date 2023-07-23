import React from 'react';
import ImageGallery from 'react-image-gallery';
import galleries from '../../assets/galleries';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const Gallery = () => {
  // const images = [
  //   {
  //     original: 'https://picsum.photos/id/1018/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1018/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1015/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1015/250/150/',
  //   },
  //   {
  //     original: 'https://picsum.photos/id/1019/1000/600/',
  //     thumbnail: 'https://picsum.photos/id/1019/250/150/',
  //   },
  // ];

  console.log(galleries.home);
  console.log(galleries.home.map(el => ({ original: el })));
  const data = galleries.home.map(el => ({ original: el }));
  return <ImageGallery items={data} fullScreen={true} />;
};

export default Gallery;
