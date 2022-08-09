import React, {useState} from "react";
import '../App.css';
const Form = () =>  {
    const[apiRes, setApiRes] = useState("")
    const [info, setInfo] = useState("");
    
    
    //obtiene el termino a buscar
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info)
        getApiInfo(info)

    }
    
    // obtiene y pasa la info de la api
    const getApiInfo = async(text) =>{
        
        let urlTerm = "http://localhost:3001/termino="
        let UrlTextTerm = "http://localhost:3001/text_name=:TEXTNAME&termino=:term" 
        
        urlTerm = urlTerm + text
        

        //fetch
        await fetch(urlTerm).then((apiData) =>{
            if(!apiData.ok) throw{apiData}
                console.log(apiData)
                return apiData.json()
            }).then((frecuenciaData) =>{
                //dato de la API almacenado

                setApiRes(frecuenciaData)
                console.log(frecuenciaData)
                
            }).catch(error=>{
                console.log(error)
            })
    
        
        

    }
    return(
        
        <div className="container">

            <form onSubmit={onSubmit}>
                <div className="input-group mb3 mx-auto">
                    <div className="mx-auto">
                    <input type="text" className="form-control" placeholder="buscar frecuencia" onChange={(e) => setInfo(e.target.value)}/>
                    <button id="term" className="btn btn-primary input-group-text" type="submit">Buscar termino</button>
                    <br/>
                    <br/>
                    <div >
                        <p className="text-center" id="frecuencia"  >{apiRes}</p>
                    </div>
                    <br/>
                    </div>
                    <div className="mx-auto">
                    <input disabled id="textName" type="text" className="form-control" placeholder="buscar frecuencia" onChange={(e) => setInfo(e.target.value)}/>
                    <button disabled className="btn btn-primary input-group-text" type="submit">Buscar texto y termino</button>
                    </div>
                    <br />
                    <br />
                    
                   
                    
                </div>
            </form>

        </div>
    )

    
}


export default Form;


