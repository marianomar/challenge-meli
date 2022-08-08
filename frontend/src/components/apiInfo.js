import React, {useState} from "react";
import Form from './components/Form';

const apiInfo = () =>{
    let url = "http://localhost:3001/termino="

    const[infoApi, setInfoApi] = useState([])
    const[formInfo, setFormInfo] = useState("")

    const getFormText = async(text) =>{
        setFormInfo(text);

        url = url + text

        await fetch(url).then((response) =>{
            if(!response.ok) throw{response}
            return response.json()
        }).then((frecuenciaData) =>{
            console.log(frecuenciaData)
            setFormInfo(frecuenciaData)
        }).catch(error=>{
            console.log(error)
        })


    }

    return <React.Fragment>
        <Form 

        newData = {getFormText}
        
        />
    </React.Fragment>
}