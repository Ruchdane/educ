import React from 'react'
import { Input,Button } from 'antd';

const { TextArea } = Input;


const onChange = e => {
    console.log('Change:', e.target.value);
  };


function PosterSujet() {
    return <>
        <div className="container p-5">
            <div className="mx-auto">
                <Input placeholder="input with clear icon" allowClear onChange={onChange} />
                <br />
                <br />
                <TextArea placeholder="textarea with clear icon" allowClear onChange={onChange} rows="10"/>
                <div className="d-flex justify-content-between mt-2">
                    <Button style={{backgroundColor:'gray'}} >Joindre un document</Button>
                    <Button>Joindre un audio</Button>
                </div>
                <Button className="mt-5">Publier</Button>
            </div>
        </div>
    </>
}

export default PosterSujet
