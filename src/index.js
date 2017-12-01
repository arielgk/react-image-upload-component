import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/index.css';
import ImageUpload from './components/ImageUpload';
// import registerServiceWorker from './registerServiceWorker';

[...document.querySelectorAll('.image_upload')].map(item => {
    ReactDOM.render(<ImageUpload position={item.getAttribute('data-position')}
                                 imageId={item.getAttribute('data-id') ? item.getAttribute('data-id') : ''}
                                 imageUrl={item.getAttribute('data-url') ? item.getAttribute('data-url') : ''}
                                 apiUrl={item.getAttribute('data-apiurl')}/>, item);
})
// registerServiceWorker();
