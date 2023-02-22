# Gerador de senhas

## rota

    localhost:${port}/generate

## forma de uso

    Método post, deve ser enviado o seguinte objeto

    {
        "size": 25,             // Tamanho da senha, valor entre 8 e 25 caracteres
        "symbols": false,       // Se a senha vai ter caracteres especiais
        "numbers": true,        // Se a senha vai ter números
        "lethersLower": true,   // Se a senha vai ter números maiúsculos
        "lethersUp": true       // se a senha vai ter números minúsculos
    }