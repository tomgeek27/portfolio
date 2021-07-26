import downloadlogo from '../assets/imgs/download.svg'
import { useScrollPosition } from "./hooks/use_scroll_position"
import {useState} from 'react'

export default function Header() {

    const [sticky, setSticky] = useState(true)

    useScrollPosition(
      ({ prevPos, currPos }) => {
        if(currPos.y > prevPos.y)
            setSticky(true)
        else if(currPos.y + 15 < prevPos.y) 
            setSticky(false)
      },
      [sticky]
    )

    return (
        <header style={{
            display: 'flex',
            transform: sticky ? "translateY(0)" : "translateY(-100%)"}}>
            <div style={{
              position: 'absolute',
              right: '3.5%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <a id="curriculumLink" className="social-icon-external" href='/cv.jpg' download>
                <img id="downloadIcon" alt="" src={downloadlogo} />
                <div style={{
                  fontFamily: 'CoolveticaRg',
                  color: '#707070',
                  fontSize: '16px'
                }}>
                  Curriculum
                </div>
              </a>
              <div style={{marginLeft: '20px', display: 'flex', flexDirection: 'row'}}>
                <button onClick={() => {}}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                    cursor: 'pointer',
                    outline: 'inherit',
                    fontFamily: 'CoolveticaRg',
                    fontSize: '16px',
                    color: '#707070'
                  }}
                >IT</button>
                <div 
                className="noselect"
                style={{
                  margin: '0px 10px',
                  fontFamily: 'CoolveticaRg',
                  fontSize: '16px',
                  color: '#707070'
                }}>
                  |
                </div>
                <button onClick={() => {}}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    font: 'inherit',
                    cursor: 'pointer',
                    outline: 'inherit',
                    fontFamily: 'CoolveticaRg',
                    fontSize: '16px',
                    color: '#707070'
                  }}
                >EN</button>
              </div>
            </div>
          </header>    
    )
}