import downloadlogo from '../assets/imgs/download.svg'
import { useScrollPosition } from "../helper/hooks/use_scroll_position"
import {useState} from 'react'
import { setLang } from '../helper/redux/slice'
import { useDispatch, useSelector } from 'react-redux'

const DELTA_SCROLL = 15

export default function Header() {
    const lang = useSelector(state => state.languageReducer)
    const dispatch = useDispatch()
    const [sticky, setSticky] = useState(true)

    useScrollPosition(
      ({ prevPos, currPos }) => {
        if(currPos.y > prevPos.y)
            setSticky(true)
        else if(currPos.y + DELTA_SCROLL < prevPos.y) 
            setSticky(false)
      },
      [sticky]
    )

    const setLanguage = (lang) => {
        dispatch(setLang(lang))
    }

    return (
      <header style={{
        display: 'flex',
        transform: sticky ? "translateY(0)" : "translateY(-100%)"}}>
        <div style={{
          position: 'absolute',
          right: '2%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <a id="curriculumLink" className="social-icon-external" href='/portfolio/AmadoriTommasoCV.pdf'>
            <img id="downloadIcon" alt="" src={downloadlogo}/>
            <div style={{
              fontFamily: 'CoolveticaRg',
              color: '#707070',
              fontSize: '16px'
            }}>
              Curriculum
            </div>
          </a>
          <div style={{marginLeft: '20px'}} className="flex-row vertical-center">
            <div
              className="lang-icon"
              onClick={() => {setLanguage('it')}}
                style={{
                  cursor: 'pointer',
                  fontFamily: 'CoolveticaRg',
                  fontSize: '16px',
                  color: lang === 'it' ? '#707070' : '#70707077',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >IT</div>
              <div style={{margin: '0px 5px'}}/>
              <div onClick={() => {setLanguage('en')}}
              className="lang-icon"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  fontFamily: 'CoolveticaRg',
                  fontSize: '16px',
                  color: lang === 'en' ? '#707070' : '#70707077'
                }}
              >EN</div>
          </div>
        </div>
      </header>    
    )
}