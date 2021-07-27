import { useSelector } from 'react-redux'

function _translate(obj) {
    const lang = useSelector(state => state.languageReducer)
    console.log(obj)
    if(lang === 'it')
        return obj.it
    else if(lang === 'en')
        return obj.en
}

export function getTranslated(text) {
    return _translate(text)
}