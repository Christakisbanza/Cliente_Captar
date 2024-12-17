import React from 'react'

import './AppPagamentoCredito.css'

export const AppPagamentoCredito = () => {
    return (
        <div id='appPagamentoCredito'>
            <div className='appPagamentoCredito-control'>
                <h1>DENTRO DO APP
                CONTA DIGITAL</h1>
                <p id='app'>A conta digital B2B permite que usuário abram sua conta totalmente on-line, efetuem transferências entre contas TEDS para outros bancos, recarreguem saldo através de TED ou Boleto bancário</p>
            </div>
            <div className='appPagamentoCredito-control'>
                <h1>PAGAMENTO</h1>
                <p>O sistema permite que o cliente efetue pagamento de boleto bancário, efetuando a leitura do código de boleto direto no aplicativo. Entre os boletos permitidos estão contas de água, energia e compras diversas</p>
            </div>
            <div className='appPagamentoCredito-control'>
                <h1>CARTAO DE CRÉDITO </h1>
                <p>A conta digital permite que todos os usuários solicitem um cartão de crédito pré pago internacional, vinculado a bandeira. Possibilitando assim, utilizá-lo para compras ou saques em milhares de estabelecimentos em todo o mundo</p>
            </div>
        </div>
    )
}
