# Box 122 Insulfilm

Landing page em Next.js 16 (App Router), Tailwind CSS 4 e CSS Modules. As animações de rolagem usam CSS progressivo e respeitam o movimento reduzido. O mapa carrega sob demanda do navegador. Os botões de orçamento abrem conversas com mensagens específicas por serviço.

## Executar

Requer Node.js 22 ou superior. Abra o terminal na raiz do projeto.

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Execute `npm run build` para gerar o site estático em `out/`.

## Fotos oficiais

A ficha do Google Maps é acessível pelos links na página. Obtenha os originais autorizados com a Box 122 e salve os arquivos em `public/fotos/`. Recomenda-se WebP otimizado, com composição central e proporção 4:3. A página detecta os arquivos na compilação e troca os placeholders automaticamente.

| Arquivo | Foto |
| --- | --- |
| fachada.webp | Fachada real na Alameda Campomar, usada no hero e na galeria |
| carros-no-box.webp | Sedã branco no box |
| suv-no-box.webp | SUV vermelho no box |
| carro-frente.webp | Carro branco na entrada do box |
| placa-servicos.webp | Placa de serviços fornecida, junto à localização |
| pelicula-residencial.webp | Serviço real em vidro residencial, usado no card residencial |
| som-e-acessorios.webp | Instalação real de som ou acessórios, usada no card correspondente |

Em `lib/business.js`, acrescente avaliações verificadas a `reviews` com autor, trecho fiel e link. A seção exibe o acesso à ficha do Google enquanto a lista estiver vazia. Use `socialLinks` para inserir os perfis confirmados como objetos com `label` e `url`. O endereço, os links de navegação e o WhatsApp também ficam nesse arquivo. A abertura às 08:30 foi informada pelo contratante, que pode complementar os dias e horários após confirmar com a loja.

## GitHub, Vercel e Netlify

1. Envie os arquivos da raiz do projeto ao GitHub, inclusive `.gitignore` e o lockfile quando disponível. Mantenha `node_modules`, `.next` e `out` fora do repositório.
2. **Vercel:** importe o repositório, selecione Next.js e Node.js 22 ou superior. O `vercel.json` indica `out` como saída. A compilação usa `npm run build`.
3. **Netlify:** importe o mesmo repositório. O `netlify.toml` define Node.js 22, `npm run build` e `out` como diretório público. Para upload manual, envie o conteúdo gerado de `out`.
4. Após publicar, teste o WhatsApp no celular e confira o ponto do mapa e a rota.

O projeto não requer variáveis de ambiente. Nenhuma publicação foi realizada.

## Agendamento
O cliente escolhe o serviço, a data e o horário de preferência. O site monta uma mensagem para o WhatsApp da loja, que confirma a disponibilidade. O horário mínimo usa a abertura informada, 08:30, no fuso de Rio das Ostras.
A foto residencial é ilustrativa (American Window Film, https://americanwindowfilm.com/blog/how-can-i-get-more-privacy-without-curtains). A foto de som é um recorte da exposição de equipamentos na fachada real.
