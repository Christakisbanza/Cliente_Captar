import React from 'react'

import './Form.css'

export const Form = () => {


    return (
        <div id='form-center'>
            <div id='form'>
                <h1>DOAÇÃO PARA ENTIDADES SOCIAIS</h1>
                <form id='form-container'>
                    <div className='form-control'>
                        <label htmlFor="nome">Nome: </label>
                        <input type="text" name="nome" id="nome" placeholder='Digite seu nome' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="email">Email: </label>
                        <input type="text" name="email" id="email" placeholder='Digite seu e-mail' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="entidade">Entidade: </label>
                        <input type="text" name="entidade" id="entidade" placeholder='Digite o nome da entidade doadora' />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="msg">Mensagem: </label>
                        <textarea name="msg" id="msg" placeholder='Digite a sua mensagem'></textarea>
                    </div>
                    <div id='btn-submit'>
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
