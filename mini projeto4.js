// Mini projeto 4
//Radar eletrônico
//velocidade limite 70km/h
//perde 1 ponto a cada 5km/h a mais de velocidade
//tem carteira suspença se perde mais de 12 pontos.

verificarVelocidade(50)

function verificarVelocidade(velocidade) {
    if (velocidade <= 70)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - 70) / 5));
        if (pontos >= 12)
            console.log('carteira suspença');
        else
            console.log('menos', pontos, 'ponto(os)');
    }
}
