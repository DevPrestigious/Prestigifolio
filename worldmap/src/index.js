import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import Map from './map';
import SimpleBottomNavigation from './bottombar';
import './style/index.css';


ReactDOM.render(
<>
   <NavBar/>
   <Map apiKey="AIzaSyA0Va_5LOT4k2OsNR93lKWbIT2f6EzdY9U"/>
   <SimpleBottomNavigation/>
</>,
 document.getElementById('root'));

