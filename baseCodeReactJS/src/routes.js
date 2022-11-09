import {BrowserRouter , Routes , Route} from 'react-router-dom'
import * as pages from './pages'

const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path ="/" element ={<pages.ItemPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routess