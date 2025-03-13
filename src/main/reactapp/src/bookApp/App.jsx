import { BrowserRouter , Route , Routes } from 'react-router-dom'; // 'npm i react-router-dom' 설치 필요
/* 라우터로 연결할 컴포넌트 import 가져온다. */
import Home from './Home.jsx';
import SideBar from './SideBar.jsx';

export default function App(props) {
    return (<>        
        <BrowserRouter> { /* 모든 라우터를 감싼다 */}
            <div id="wrap">                
                <SideBar></SideBar>
                <Routes> { /* 모든 라우터를 감싼다. */}
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/book-create" element={<Home />} />
                    <Route path="/book-list" element={<Home />} />
                    <Route path="/book-view" element={<Home />} />
                    <Route path="/book-update" element={<Home />} /> 
                    <Route path="/book-delete" element={<Home />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    </>)
}