import React from 'react';
import ReactDOM from 'react-dom/client';


const TitleComponent = () => <h1>This id Title Component..</h1>

const para = (
    <p>test para</p>
)
const para2 = (
    <p>{para}test para2<TitleComponent/></p>
    
)

const count =5;
const HeadingComponent = () => {
    return <div className='container' style={{
        backgroundColor:"pink",
        display:"flex"
    }}>
        <TitleComponent/>
        {count }
        {console.log("hi")}
    <h2 className='header'>This is Functional Component.</h2>
        {para2}
    </div>
}
const header = ReactDOM.createRoot(document.getElementById('root'));
header.render(<HeadingComponent/>);