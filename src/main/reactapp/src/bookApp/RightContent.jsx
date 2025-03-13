import { Routes, Route } from 'react-router-dom'

import BookList from './BookList'
import BookCreate from './BookCreate'
import BookUpdate from './BookUpdate'
import BookDelete from './BookDelete'
import ReviewCreate from './ReviewCreate'

export default function RightContent(props) {
    return (<>
        <Routes>
            <Route path="/" element={<BookList />}></Route>
            <Route path="/book-create" element={<BookCreate />}></Route>
            <Route path="/book-update" element={<BookUpdate />}></Route>
            <Route path="/book-delete" element={<BookDelete />}></Route>
            <Route path="/review-create" element={<ReviewCreate />}></Route>
        </Routes>
    </>)
}