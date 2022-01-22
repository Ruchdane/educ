import React, { useEffect } from 'react'
import { Input,Button } from 'antd';
// import { Routes, Route, useParams } from "react-router-dom";

const { TextArea } = Input;


const onChange = e => {
    console.log('Change:', e.target.value);
  };


function PosterSujet() {
    // const [ListMessage,setListMessage] = {};
    useEffect(()=>{
        const params = new URLSearchParams(window.location.search)
            if (params.get("id") !== undefined)
                console.log(params.get("id"));
    },[])

    return <>
        <div className="container p-5">
            <div className="mx-auto">
                Sujet
                <br />
                <br />
                <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} rows="10"/>
                <div className="d-sm-flex justify-content-between mt-2">
                    <Button className="mb-2" style={{backgroundColor:'gray'}} >Joindre un document</Button>
                    <Button className="mb-2">Joindre un audio</Button>
                </div>
                <Button className="mt-5">Publier</Button>
            </div>
        </div>
    </>
}

export default PosterSujet
