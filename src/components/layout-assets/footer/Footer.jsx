import './footer.css'

export default function Footer(){
    return(
        <div>
            <footer>
                <address>
                    <a href="mailto:sokoln12@gmail.com" target="_blank">Contact</a> &bull; <a href="https://www.github.com/nsok1007" target="_blank">GitHub</a>
                </address>
                <p className="copyright"> © 2026 Designed by <a href="https://nsokdesigns.com" target="_blank" rel="noopener noreferrer"> Nik Sokol </a> | All rights reserved.</p>
            </footer>   
        </div>
    );
};