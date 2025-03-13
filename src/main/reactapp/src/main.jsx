import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Wrap from './bookApp/Wrap'

const root = createRoot(document.querySelector('#root'))
root.render(<BrowserRouter><Wrap/></BrowserRouter>);