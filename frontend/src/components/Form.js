import React, {useState} from "react";

const Form = ({newData}) =>  {
    const [info, setInfo] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(info)

    }
    return(
        <div className="container">

            <form onSubmit={onSubmit}>
                <div className="input-group mb3 mx-auto">
                    <div className="mx-auto">
                    <input type="text" className="form-control" placeholder="buscar frecuencia" onChange={(e) => setInfo(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar termino</button>
                    </div>
                    <br/>
                    <div className="mx-auto">
                    <input type="text" className="form-control" placeholder="buscar frecuencia" onChange={(e) => setInfo(e.target.value)}/>
                    <button className="btn btn-primary input-group-text" type="submit">Buscar texto y termino</button>
                    </div>
                    
                </div>
            </form>

        </div>
    )

    
}


export default Form;


