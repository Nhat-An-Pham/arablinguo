import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import languageList from './Language.json';

export default function Translator() {
    const [inputFormat, setInputFormat] = useState('en');
    const [outputFormat, setOutputFormat] = useState('hi');
    const [translatedText, setTranslatedText] = useState('Translation');
    const [inputText, setInputText] = useState('');

    const handleReverseLanguage = () => {
        const value = inputFormat;
        setInputFormat(outputFormat);
        setOutputFormat(value);
        setInputText('');
        setTranslatedText('Translation');
    }

    // const handleRemoveInputText = () => {
    //     setInputText('');
    //     setTranslatedText('Translation');
    // }

    //translate by useEffect
    useEffect(() => {
        handleTranslate();
    }, [inputFormat, inputText]);

    const handleTranslate = async () => {
        // if (!inputText || !inputFormat || !outputFormat) return;
        // document.querySelector('.fa.fa-spinner.fa-spin').style.display = "block";
        // document.querySelector('.translate').style.display = 'none';
        if (inputText) {
            const url =
                `https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${outputFormat}&api-version=3.0&profanityAction=NoAction&textType=plain`;
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    // 'X-RapidAPI-Key': {"YOUR_API_KEY"},
                    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
                },
                body: JSON.stringify([
                    {
                        Text: inputText
                    }
                ])
            };
            try {
                const response = await fetch(url, options);
                const result = await response.text();
                const responseObject = JSON.parse(result);
                const translation = responseObject[0].translations[0].text;
                setTranslatedText(translation);
            } catch (error) {
                console.log(error);
                alert("Please Try Again! Some Error Occurred at your side");
            }
        }
    }
    return (
        <div className="translator-container">
            <div className="translator-row translator-row-1">
                <select value={inputFormat}
                    onChange={(e) => setInputFormat(e.target.value)}>
                    {Object.keys(languageList).map((key, index) => {
                        const language = languageList[key];
                        return (
                            <option key={index} value={key}>{language.name}</option>
                        );
                    })}
                </select>
                <svg className='reversesvg'
                    onClick={handleReverseLanguage}
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path d=
                        "M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z">
                    </path>
                </svg>
                <select value={outputFormat} onChange={(e) => {
                    setOutputFormat(e.target.value);
                    setTranslatedText('Translation');
                }}>
                    {Object.keys(languageList).map((key, index) => {
                        const language = languageList[key];
                        return (
                            <option key={index + 118} value={key}>{language.name}</option>
                        );
                    })}
                </select>
            </div>
            <div className="translator-row translator-row-2">
                <div className="inputText">
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={8}
                        placeholder="Enter Text"
                        defaultValue="Default Value"
                        value={inputText}
                        style={{ backgroundColor: "white", width: "100%", borderRadius: "10px", border: "none" }}
                        onChange={(e) => setInputText(e.target.value)}
                        disabled
                    />
                </div>
                <div className="outputText">
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        disabled
                        rows={8}
                        placeholder={translatedText}
                        defaultValue="Default Value"
                        value={translatedText}
                        style={{ backgroundColor: "white", width: "100%", borderRadius: "10px", border: "none" }}
                    />
                </div>
            </div>
            {/* <div className="translator-row translator-row-3">
                <button className='btn'
                    onClick={handleTranslate}>
                    <i className="fa fa-spinner fa-spin"></i>
                    <span className='translate'>Translate</span>
                </button>
            </div> */}
        </div>
    )
}
