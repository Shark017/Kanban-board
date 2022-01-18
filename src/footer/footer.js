import React from "react";
import './footer.css';

function Footer() {
    return <>
        <footer className="footer">
            <span className="footer-text active-tasks">Active tasks: 0 </span>
            <span className="footer-text finished-tasks">Finished tasks: 0 </span>
            <span className="footer-text board-tasks">Kanban board by NAME, YEAR </span>
        </footer>
    </>
}

export default Footer;