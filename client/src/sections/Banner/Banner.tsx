import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Logo,
  TypeOfPhotoshot,
  TypeOfPhotoshotsContainer,
} from './Banner.element';

interface bannerProps {
  Logo: { url: string };
  TiposDeEnsaio: Array<string>;
}

const Banner: React.FC = () => {
  const [banner, setBanner] = useState<bannerProps>();

  const loadBanner = async () => {
    const res = await axios.get('http://localhost:3001/api/banner');
    setBanner(res.data[0]);
  };

  useEffect(() => {
    loadBanner();
  }, []);


  return (
    <>
      <Container>
        <Logo src={banner?.Logo.url} />
        <TypeOfPhotoshotsContainer>
          {banner?.TiposDeEnsaio?.map((item, index) => (
            <TypeOfPhotoshot key={index}>{item}</TypeOfPhotoshot>
          ))}
        </TypeOfPhotoshotsContainer>
      </Container>
    </>
  );
};

export default Banner;
