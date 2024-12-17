import React from 'react'

import './DoacaoEscrowCobranca.css'

function DoacaoEscrowCobranca() {
    return (
        <div id='doacaoEscrowCobranca'>
            <div className='doacaoEscrowCobranca-control'>
                <h1>DOAÇÃO</h1>
                <p>Credencie instituições de caridade, para viabilizar com que seus usuários possam realizar doações de forma fácil e transparente
                </p>
            </div>
            <div className='doacaoEscrowCobranca-control'>
                <h1>CONTA ESCROW</h1>
                <p>Conta com trava no CNPJ cedente administrado pelo gestor da carteira. Ideal para operações de antecipação de recebíveis
                </p>
            </div>
            <div className='doacaoEscrowCobranca-control'>
                <h1>AUTOMAÇÃO DE COBRANÇA </h1>
                <p id='cobranca'>Automatize a emissão de boletos de cobrança da sua empresa e ofereça está conveniência para sua base
                Com a nossa solução o usuário PJ tem suas cobranças emitidas a partir das suas notas fiscais geradas, sem a nescessidade do envio de arquivo CNAB ou inserindo dados manualmente para emissão do boleto
                </p>
            </div>
        </div>
    )
}

export default DoacaoEscrowCobranca