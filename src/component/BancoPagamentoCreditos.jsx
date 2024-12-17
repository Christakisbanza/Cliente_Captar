import React from 'react'

import './BancoPagamentoCreditos.css'

function BancoPagamentoCreditos() {
    return (
        <div id='bancoPagamentoCreditos'>
            <div className='bancoPagamentoCreditos-control'>
                <h1>BANCO 24H</h1>
                <p id='banco-p'>Os cartões B2B são interligados a rede Banco 24H, permitindo-lhe que sejam efetuados saques em toda a rede de caixas eletrônicos no Brasil</p>
            </div>
            <div className='bancoPagamentoCreditos-control'>
                <h1>FOLHA DE PAGAMENTO </h1>
                <p>Pagamentos de forma prática e instantânea, através do upload de um arquivo CSV processamos e distribuímos pagamentos ( entre contas ) para colaboradores em minutos, ideal para Bancos com foco em contas PJ e/ou estratégias para volumetrias. INCLUI Abertura de conta em lote</p>
            </div>
            <div className='bancoPagamentoCreditos-control'>
                <h1>PRODUTOS DE CRÉDITOS </h1>
                <p>Ofereça crédito para pessoas físicas e jurídicas sem ser uma instituição financeira, conquiste receitas definindo as regras de negócios, taxa de juros, administrativa ou de consulta
                Com Capital Próprio</p>
            </div>
        </div>
    )
}

export default BancoPagamentoCreditos