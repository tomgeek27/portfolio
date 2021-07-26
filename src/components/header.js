import downloadlogo from '../assets/imgs/download.svg'
import { useScrollPosition } from "./hooks/use_scroll_position"
import {useState} from 'react'

export default function Header() {

    const [sticky, setSticky] = useState(true)

    useScrollPosition(
      ({ prevPos, currPos }) => {
        const isShow = currPos.y > prevPos.y
        if (isShow !== sticky) setSticky(isShow)
      },
      [sticky]
    )


    return (
        <header style={{
            backgroundColor: 'white', 
            position: 'fixed', 
            width: '100%', 
            height: '57px', 
            alignItems: 'center', 
            display: 'flex', 
            transform: sticky ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 200ms ",
            top: 0,
            zIndex: 10}}
          >
            <div style={{
              position: 'absolute',
              right: '3.5%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
              <a
              className="social-icon-external" 
              style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '10px 10px',
                alignItems: 'center'
              }} href='/cv.jpg' download>
                <img alt="" src={downloadlogo} style={{height: '16px', width: '16px', marginRight: '10px'}}/>
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