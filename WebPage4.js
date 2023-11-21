import React from 'react';
import './wp2style.css';




const WebPage4 = () => {

    const icons = [
        { src: 'https://tse1.mm.bing.net/th?id=OIP.g3VY31FS0AlTt581JUmSeQAAAA&pid=Api&P=0&h=220', alt: 'Icon 1', size: '64px' },
        { src: 'https://tse2.mm.bing.net/th?id=OIP.WimIzdXlzLTYkL3ewiIf4AHaDt&pid=Api&P=0&h=220', alt: 'Icon 2', size: '64px' },
        { src: 'https://tse1.mm.bing.net/th?id=OIP.goYHa_TwAu6QMmE1M5MhGQHaIL&pid=Api&P=0&h=220', alt: 'Icon 3', size: '64px' },
        { src: 'https://tse4.mm.bing.net/th?id=OIP.iz0l2PLYQDTZgy32ELt1UAHaEa&pid=Api&P=0&h=220', alt: 'icon 4', size: '64px' },
        { src: 'https://tse1.mm.bing.net/th?id=OIP.jmJQsPc8V4zqsM5rHYsu7QHaEK&pid=Api&P=0&h=220', alt: 'Icon 1', size: '64px' },
        { src: 'https://tse1.mm.bing.net/th?id=OIP.douAQqLQCydHXDqsPfOcpwHaEK&pid=Api&P=0&h=220', alt: 'Icon 2', size: '64px' },
        { src: 'https://tse4.mm.bing.net/th?id=OIP.G4EVGwfy88KHwS18yKTTMAHaHa&pid=Api&P=0&h=220', alt: 'icon 4', size: '64px' },

    ];


    return (
        <div>

            <div className="icon-gallery-container" >
                {icons.map((icon, index) => (
                    <img 
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        className="icon-image"
                        style={{ width: '169px', height: 'auto' }}
                    />

                ))}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b69" fill-opacity="1" d="M0,192L60,176C120,160,240,128,360,128C480,128,600,160,720,144C840,128,960,64,1080,58.7C1200,53,1320,107,1380,133.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>

    );

};

export default WebPage4;
