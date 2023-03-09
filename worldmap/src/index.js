import React from 'react';
import ReactDOM from 'react-dom';
import ColorSchemesExample from './navbar';
import Map from './map';
import SimpleBottomNavigation from './bottombar';


ReactDOM.render(<ColorSchemesExample></ColorSchemesExample>, document.getElementById('nav'));

ReactDOM.render(<Map apiKey="AIzaSyA0Va_5LOT4k2OsNR93lKWbIT2f6EzdY9U" />, document.getElementById('root'));

ReactDOM.render(<SimpleBottomNavigation></SimpleBottomNavigation>, document.getElementById('bottom'));