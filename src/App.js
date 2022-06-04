import { Helmet } from 'react-helmet';
import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import Home from './page/Home/Home';
import MindMap from './page/Mindmap/MindMap';

const App = () => {
  return (
    <RecoilRoot>
      <Helmet>
        <title>TTingmap 생각을 그리세요</title>
        {/* Primary Meta Tags */}
        <meta name='title' content='TTingmap 생각을 그리세요' />
        <meta
          name='description'
          content='TTingmap은 마인드맵 제작  사이트로, 마인드맵을 제작해 저장할 수 있고 이미지로 내보낼 수 있는 사이트입니다'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ttingmap.vercel.app/' />
        <meta property='og:title' content='TTingmap 생각을 그리세요' />
        <meta
          property='og:description'
          content='TTingmap은 마인드맵 제작  사이트로, 마인드맵을 제작해 저장할 수 있고 이미지로 내보낼 수 있는 사이트입니다'
        />
        <meta
          property='og:image'
          content='https://ttingmap.vercel.app/img/ogImg.png'
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ttingmap.vercel.app/' />
        <meta property='twitter:title' content='TTingmap 생각을 그리세요' />
        <meta
          property='twitter:description'
          content='TTingmap은 마인드맵 제작  사이트로, 마인드맵을 제작해 저장할 수 있고 이미지로 내보낼 수 있는 사이트입니다'
        />
        <meta
          property='twitter:image'
          content='https://ttingmap.vercel.app/img/ogImg.png'
        />
      </Helmet>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mindmap' element={<MindMap />} />
      </Routes>
    </RecoilRoot>
  );
};

export default App;
