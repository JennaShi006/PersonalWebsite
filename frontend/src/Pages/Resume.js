import React from 'react';

function Resume() {
    return(
        <div>
            <div className = "Resume">
                <h1>Resume Page</h1>
                <a href="/HaoranShiResume.pdf" download>
                    <button>Download Resume</button>
                </a>
            </div>
            <div>
                <iframe
                    src="/HaoranShiResume.pdf"
                    title="Resume PDF"
                    width="80%"
                    height="700px"
                    style={{border: 'none', marginTop: '20px'}}
                />
            </div>
        </div>
    )
    }
export default Resume;