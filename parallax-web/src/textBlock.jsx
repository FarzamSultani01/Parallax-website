import './App.css';

function TextBlock() {
    return (
        <div id="textblock">
            <div id="textblock-container">
                <h1 id="textblock-title">What is Parallax?</h1>
                <p id="textblock-content">
                Parallax<br/><br/>
                A parallax website is a type of web design where the background and foreground elements move at different speeds as you scroll — creating a sense of depth and motion, almost like a 3D effect.<br/><br/>
                This technique is often used to make websites more visually engaging and interactive. It can be applied to various elements, such as images, text, and even videos, to create a dynamic and immersive user experience.<br/><br/>
                Parallax scrolling can be achieved using CSS, JavaScript, or a combination of both. It is commonly used in storytelling websites, portfolios, and landing pages to captivate visitors and guide them through the content in a visually appealing way.
                </p>
            </div>
            <footer id='textblock-footer'>Farzam Sultani</footer>
        </div>
    );
}

export default TextBlock;