import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const EditarGenero = ({match}) => {

    const id = match.params.id
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios
            .get('/api/genres/' + id)
            .then(res => {
                setName(res.data.name)
            })
    }, [id])

    const onChange = e => {
        setName(e.target.value)
    }

    const save = () =>{
        axios
            .put('/api/genres/' + id, {
                name
            })
            .then(res => {
                setSuccess(true)
            })
    }

    if (success){
        return <Redirect to='/generos' />
    }

    return (
        <div className='container' >
            <h1>Editar Gênero</h1>
            <form>
                <div className="form-group">
                    <label htmlFor='name' >Nome</label>
                    <input type="text" value={name} onChange={onChange} className="form-control" id="name" aria-describedby="nomeGenero" placeholder="Nome do Gênero" />
                </div>
                <button type="button" className="btn btn-primary" onClick={save} >Salvar</button>
            </form>
        </div>
    )
}

export default EditarGenero