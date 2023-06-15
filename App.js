import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1",{id:"heading",xyz:"newattr"},"Hello World from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const headerText = React.createElement('h1',{},'This is header');
const header = ReactDOM.createRoot(document.getElementById('header'));
header.render(headerText);