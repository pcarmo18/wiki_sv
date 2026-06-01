// Data structures for SV Internet Wiki
const WIKI_DATA = {
    comercial: {
        title: "Setor Comercial",
        badgeClass: "wiki-article-badge--comercial",
        badgeText: "Comercial & CRM",
        articles: [
            {
                id: "comercial-video-academia",
                title: "Curso Recomendado — HubAcademia",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>A <strong>SV Internet</strong> recomenda que <strong>toda a equipe comercial e CRM</strong> conclua este curso na <strong>HubAcademia</strong> antes de operar viabilidade, cadastro e contratos no Hubsoft. O conteúdo é oficial do sistema e padroniza o atendimento de vendas.</p>

                    <div class="alert-box alert-box--success">
                        <strong>Obrigatório na trilha comercial:</strong> Acesse com login corporativo da SV. Dúvidas sobre usuário ou senha: gestor comercial ou TI interna.
                    </div>

                    <h3>Acesso ao curso</h3>
                    <p>O link abre o curso completo na plataforma. Assista às aulas na ordem indicada pela Hubsoft e marque o progresso no portal.</p>

                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">CURSO RECOMENDADO SV</span>
                            <h4 class="video-card__title">HubAcademia — Capacitação Comercial</h4>
                            <p class="video-card__desc">Curso oficial Hubsoft indicado pela SV Internet para vendedores e atendimento comercial. Clique em play para abrir na Academia (nova aba).</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://academia.hubsoft.com.br/academia/curso/44cd69ac-e4df-4843-a3cd-cb696f592dfd" target="_blank" rel="noopener noreferrer" class="btn-video" aria-label="Abrir curso na HubAcademia">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
                            </a>
                            <a href="https://academia.hubsoft.com.br/" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" aria-label="Abrir portal HubAcademia" title="Portal HubAcademia">🎓</a>
                        </div>
                    </div>

                    <h3>Depois do curso, consulte na wiki</h3>
                    <ul class="wiki-checklist">
                        <li><a onclick="window.app.navigateToWiki('comercial', 'comercial-viabilidade')">Consulta de Viabilidade Técnica</a></li>
                        <li><a onclick="window.app.navigateToWiki('comercial', 'comercial-cadastro')">Cadastro de Novos Clientes</a></li>
                        <li><a onclick="window.app.navigateToWiki('comercial', 'comercial-planos')">Venda de Planos e Combos</a></li>
                        <li><a onclick="window.app.navigateToWiki('comercial', 'comercial-contrato-digital')">Assinatura Digital de Contrato</a></li>
                    </ul>
                `
            },
            {
                id: "comercial-viabilidade",
                title: "Consulta de Viabilidade Técnica",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>Antes de fechar qualquer contrato ou prometer prazos de instalação ao cliente, é <strong>obrigatório</strong> verificar a viabilidade técnica no Hubsoft. Isso garante que a SV tem cobertura física no local, que há portas livres na CTO mais próxima e que o cabo drop cabe dentro do padrão de qualidade da SV.</p>

                    <div class="alert-box alert-box--warm">
                        <strong>Curso recomendado:</strong> Conclua antes de vender o <a href="https://academia.hubsoft.com.br/academia/curso/44cd69ac-e4df-4843-a3cd-cb696f592dfd" target="_blank" rel="noopener noreferrer" style="color: var(--sv-red); font-weight: bold; text-decoration: underline;">curso na HubAcademia (link oficial SV)</a> ou abra <a onclick="window.app.navigateToWiki('comercial', 'comercial-video-academia')">Curso Recomendado — HubAcademia</a>.
                    </div>

                    <div class="wiki-summary-grid">
                        <div class="wiki-summary-card">
                            <strong>Quando consultar</strong>
                            <p>Antes de qualquer proposta comercial, mudança de endereço ou promessa de prazo de instalação.</p>
                        </div>
                        <div class="wiki-summary-card">
                            <strong>Raio SV</strong>
                            <p>Até <strong>150 metros</strong> da CTO — acima disso, autorização do supervisor de redes.</p>
                        </div>
                        <div class="wiki-summary-card">
                            <strong>Reserva de porta</strong>
                            <p>Garante a CTO durante a negociação; evita vender sem porta disponível.</p>
                        </div>
                    </div>
                    
                    <h3>Passo a Passo no Hubsoft</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p>Acesse o menu lateral esquerdo e clique em <strong>Mapeamento > Viabilidade</strong> ou use a tecla de atalho <code>F6</code>.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p>Insira o CEP do cliente e o número da residência. Caso o CEP seja geral ou novo, utilize as coordenadas de Latitude e Longitude obtidas pelo Google Maps.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p>Clique em <strong>Pesquisar Viabilidade</strong>. O mapa mostrará a localização aproximada e as Caixas de Atendimento (CTO) em um raio de até 150 metros (limite padrão SV para garantir qualidade no cabo Drop).</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">4</span>
                            <div class="process-step__content">
                                <p>Verifique se há portas livres na CTO mais próxima. Se houver, clique em <strong>Reservar Porta</strong> para garantir a viabilidade deste cliente durante a negociação.</p>
                            </div>
                        </div>
                    </div>

                    <div class="alert-box alert-box--warm">
                        <strong>Atenção:</strong> Distâncias superiores a 150 metros da CTO exigem autorização especial do supervisor de redes, pois geram atenuação de sinal e alto custo de cabo Drop.
                    </div>

                    <h3>Checklist antes de reservar a porta</h3>
                    <ul class="wiki-checklist">
                        <li>Endereço completo com número e ponto de referência conferidos com o cliente.</li>
                        <li>Coordenadas (lat/long) quando o CEP for genérico ou área nova.</li>
                        <li>Porta livre na CTO mais próxima dentro do raio permitido.</li>
                        <li>Observação no mapa se houver obstáculo (muro alto, terreno baldio, etc.).</li>
                    </ul>

                    <h3>Materiais de apoio</h3>
                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">DOCUMENTAÇÃO + VÍDEO</span>
                            <h4 class="video-card__title">Viabilidade no Mapeamento (Wiki Hubsoft)</h4>
                            <p class="video-card__desc">Passo a passo oficial: consulta no mapa, raio de busca, lista de CTOs e vínculo de porta ao novo serviço. Vídeo em PT-BR sobre infraestrutura até a caixa (NAP/CTO).</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://www.youtube.com/watch?v=fg-BQT0WI_Q" target="_blank" rel="noopener noreferrer" class="btn-video" aria-label="Assistir vídeo sobre fibra e caixas de atendimento">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
                            </a>
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/mapeamento/projeto" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" aria-label="Abrir Wiki Hubsoft — Consultar Viabilidade" title="Wiki Hubsoft — Viabilidade">📖</a>
                        </div>
                    </div>
                `
            },
            {
                id: "comercial-cadastro",
                title: "Cadastro de Novos Clientes",
                lastUpdated: "Atualizado em 18/05/2026",
                content: `
                    <p>O cadastro de clientes deve ser feito com o máximo de precisão para evitar problemas de faturamento, cobrança e instalação técnica. A SV preza pela qualidade dos dados cadastrais.</p>
                    
                    <h3>Validação de Documentos</h3>
                    <p>Ao inserir o CPF ou CNPJ do cliente, o Hubsoft realiza uma validação de formato estrutural. Não trabalhamos com consulta automática de crédito ou restrições (Serasa/SPC), mas é <strong>indispensável</strong> checar se há débitos anteriores do mesmo titular ou endereço na nossa própria base de dados (débitos internos da SV).</p>
                    
                    <h3>Campos Obrigatórios</h3>
                    <ul>
                        <li><strong>Nome Completo / Razão Social:</strong> Sem abreviações.</li>
                        <li><strong>CPF / CNPJ:</strong> Documentos válidos e sem traços (o sistema formata automaticamente).</li>
                        <li><strong>Data de Nascimento:</strong> Fundamental para validação e segurança.</li>
                        <li><strong>Telefone / WhatsApp:</strong> Celular ativo (será usado para envio de notificações, boletos e contrato digital).</li>
                        <li><strong>Endereço Completo:</strong> CEP, Rua, Número, Bairro e Ponto de Referência (ex: "Ao lado da Padaria Silva").</li>
                    </ul>

                    <h3>Fluxo de Cadastro</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p>Clique em <strong>Clientes > Novo Cliente</strong> no painel de controle do Hubsoft.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p>Preencha os dados pessoais. Se o CPF já constar no sistema, o Hubsoft emitirá um alerta de "Cliente já cadastrado" com o histórico correspondente.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p>Insira o endereço de instalação obtido na consulta de viabilidade prévia.</p>
                            </div>
                        </div>
                    </div>

                    <h3>Erros que geram retrabalho (evite)</h3>
                    <ul>
                        <li><strong>CPF/CNPJ duplicado:</strong> o Hubsoft alerta — verifique se é reativação ou novo titular.</li>
                        <li><strong>Telefone inválido:</strong> WhatsApp e contrato digital dependem do número correto.</li>
                        <li><strong>Endereço sem número:</strong> atrasa O.S. e pode gerar viabilidade no ponto errado.</li>
                        <li><strong>Débito interno SV:</strong> consulte histórico do mesmo CPF/endereço antes de vender.</li>
                    </ul>

                    <h3>Materiais de apoio</h3>
                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">DOCUMENTAÇÃO OFICIAL</span>
                            <h4 class="video-card__title">Cadastro em 7 etapas no Hubsoft</h4>
                            <p class="video-card__desc">Wiki com fluxo completo: cadastro, endereço, plano, contrato, cobrança, pacotes e ordem de serviço.</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/cliente/adicionar" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" aria-label="Abrir Wiki Hubsoft — Adicionar Cliente" title="Wiki Hubsoft — Adicionar Cliente">📖</a>
                        </div>
                    </div>
                `
            },
            {
                id: "comercial-planos",
                title: "Venda de Planos e Combos",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>Conheça os planos e combos de ultravelocidade da SV Internet ativos no Hubsoft para poder ofertar a melhor opção aos nossos futuros assinantes.</p>
                    
                    <h3>Argumentos de venda por perfil</h3>
                    <ul>
                        <li><strong>Família / streaming:</strong> SVFIBRA PLAY — 220 Mbps, apps Deezer ou Looke + SVTV.</li>
                        <li><strong>Casa com vários dispositivos:</strong> SVFIBRA 360º — 340 Mbps, melhor para 4K e home office.</li>
                        <li><strong>Power users / gamers:</strong> SV 360º PLUS — 600 Mbps simétricos, Deezer e Looke inclusos.</li>
                    </ul>

                    <h3>Tabela de Planos SV Internet (Vigentes)</h3>
                    <div class="wiki-table-container">
                        <table class="wiki-table">
                            <thead>
                                <tr>
                                    <th>Nome do Plano</th>
                                    <th>Velocidade (Download/Upload)</th>
                                    <th>Valor Mensal</th>
                                    <th>Serviços e Benefícios Inclusos</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>SVFIBRA PLAY</strong></td>
                                    <td>220 Mbps / 110 Mbps</td>
                                    <td>R$ 110,00</td>
                                    <td>Wi-Fi Incluso + Acesso aos Aplicativos DEEZER ou LOOKE + SVTV</td>
                                </tr>
                                <tr>
                                    <td><strong>SVFIBRA 360º</strong></td>
                                    <td>340 Mbps / 170 Mbps</td>
                                    <td>R$ 150,00</td>
                                    <td>Wi-Fi Incluso + Acesso aos Aplicativos DEEZER ou LOOKE + SVTV</td>
                                </tr>
                                <tr>
                                    <td><strong>SV 360º PLUS</strong></td>
                                    <td>600 Mbps / 300 Mbps</td>
                                    <td>R$ 250,00</td>
                                    <td>Wi-Fi Incluso + Acesso aos Aplicativos DEEZER e LOOKE + SV 360º</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Entendendo o que estamos Vendendo (Mbps vs MB/s)</h3>
                    <p>É fundamental que a equipe de vendas entenda os termos técnicos para não confundir o cliente durante o atendimento:</p>
                    <ul>
                        <li><strong>Mbps (Megabits por segundo):</strong> É a unidade de medida usada para vender planos de internet. É a velocidade de tráfego de dados na rede.</li>
                        <li><strong>MB/s (Megabytes por segundo):</strong> É a unidade usada para medir o tamanho de arquivos e taxas de download em navegadores ou consoles de jogos. <strong>1 Megabyte equivale a 8 Megabits</strong>.</li>
                        <li><strong>Exemplo Prático:</strong> Se um cliente contrata o plano <strong>SVFIBRA PLAY (220 Mbps)</strong> e faz o download de um jogo, o navegador mostrará a velocidade de download em cerca de <code>27.5 MB/s</code> (220 dividido por 8). Isso é normal e correto!</li>
                    </ul>

                    <h3>Referências de Estudo:</h3>
                    <div class="alert-box alert-box--success">
                        <strong style="color: var(--white) !important;">Dica de Vendas: Diferença de Unidade de Velocidade</strong>
                        <ul style="margin: 0.5rem 0 0 1rem; padding: 0;">
                            <li><a href="https://www.techtudo.com.br/noticias/2018/07/qual-a-diferenca-entre-megabit-megabyte-e-mega-entenda-as-medidas.ghtml" target="_blank" rel="noopener noreferrer" style="color: var(--sv-red); font-weight: bold; text-decoration: underline;">TechTudo: Megabit vs Megabyte</a> — Artigo em português com a regra dos 8 bits.</li>
                            <li><a href="https://www.sabermeuip.com.br/conversor-largura-banda" target="_blank" rel="noopener noreferrer" style="color: var(--sv-red); font-weight: bold; text-decoration: underline;">Conversor Mbps → MB/s</a> — Ferramenta para simular o download real dos planos SV.</li>
                            <li><a href="https://www.youtube.com/watch?v=sKFEN2fhSHw" target="_blank" rel="noopener noreferrer" style="color: var(--sv-red); font-weight: bold; text-decoration: underline;">YouTube: Mercado de provedores no Brasil</a> — Contexto do setor (Ayub | Internet propriamente dita).</li>
                        </ul>
                    </div>

                    <h3>Como Vincular o Plano no Hubsoft</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p>Na ficha do cliente cadastrado, clique na aba <strong>Contratos > Novo Contrato</strong>.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p>Selecione a <strong>Tecnologia (Fibra Óptica)</strong>, o <strong>Plano de Acesso</strong> desejado e defina a <strong>Data de Vencimento</strong> acordada com o cliente.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p>Selecione a forma de cobrança padrão (ex: Boleto Bancário via E-mail/WhatsApp) e clique em <strong>Salvar Contrato</strong>.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: "comercial-contrato-digital",
                title: "Assinatura Digital de Contrato",
                lastUpdated: "Atualizado em 21/05/2026",
                content: `
                    <p>A SV Internet atua com contratos digitais ecológicos e seguros. O cliente não precisa assinar papéis físicos; ele assina diretamente na tela do celular ou computador.</p>
                    
                    <h3>Fluxo de Assinatura pelo Hubsoft</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p>Com o contrato salvo, acesse a aba <strong>Contratos > Ações > Enviar Assinatura Digital</strong>.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p>Escolha o canal de envio: <strong>WhatsApp</strong> ou <strong>E-mail</strong>. O Hubsoft gerará um link exclusivo com código de autenticação tokenizado.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p>Oriente o cliente a clicar no link, preencher os dados de validação (como data de nascimento ou últimos dígitos do CPF), ler o documento e assinar com o dedo na tela ou aceitar eletronicamente.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">4</span>
                            <div class="process-step__content">
                                <p>O Hubsoft atualizará automaticamente o status do contrato para <strong>Ativo / Assinado</strong> e anexará o comprovante de assinatura digital com IP, data e hora no cadastro.</p>
                            </div>
                        </div>
                    </div>

                    <div class="alert-box alert-box--success">
                        <strong>Dica comercial:</strong> O agendamento da instalação técnica só deve ser liberado após o contrato constar como assinado eletronicamente no sistema.
                    </div>

                    <h3>Script rápido para o cliente (assinatura)</h3>
                    <ol>
                        <li>Envie o link por <strong>WhatsApp</strong> (canal preferencial da SV).</li>
                        <li>Oriente a validar com data de nascimento ou dígitos do CPF.</li>
                        <li>Peça para concluir na mesma conversa — evita abandono do link.</li>
                        <li>Confirme no Hubsoft: status <strong>Ativo / Assinado</strong> antes de abrir a O.S.</li>
                    </ol>

                    <h3>Materiais de apoio</h3>
                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">DOCUMENTAÇÃO OFICIAL</span>
                            <h4 class="video-card__title">Contrato e Aceite Online</h4>
                            <p class="video-card__desc">Envio por e-mail, SMS, Central do Assinante e App do Cliente — com comprovante de autenticação.</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/cliente/consultar/servicos_cliente/contrato-aceite-online" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" aria-label="Wiki Hubsoft — Contrato Aceite Online" title="Wiki Hubsoft">📖</a>
                        </div>
                    </div>
                `
            }
        ]
    },
    tecnico: {
        title: "Setor Técnico",
        badgeClass: "wiki-article-badge--tecnico",
        badgeText: "Técnico & Operações",
        articles: [
            {
                id: "tecnico-video-academia",
                title: "Vídeo Recomendado — HubAcademia",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>A <strong>SV Internet</strong> indica que <strong>todos os técnicos de campo e suporte</strong> assistam a este vídeo da <strong>HubAcademia</strong> antes de atuar em instalações, reparos e provisionamento no Hubsoft. O conteúdo é oficial do fabricante do sistema e complementa os artigos desta wiki.</p>

                    <div class="alert-box alert-box--success">
                        <strong>Obrigatório na trilha técnica:</strong> Assista com login da SV no HubAcademia. Em caso de dúvida sobre usuário ou senha, solicite ao seu gestor ou ao setor de TI.
                    </div>

                    <h3>Acesso ao vídeo</h3>
                    <p>O link abre diretamente a aula na plataforma. Você precisará estar autenticado com as credenciais corporativas do Hubsoft.</p>

                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">VÍDEO RECOMENDADO SV</span>
                            <h4 class="video-card__title">HubAcademia — Curso para Técnicos</h4>
                            <p class="video-card__desc">Aula oficial Hubsoft indicada pela SV Internet para capacitação da equipe técnica. Clique no botão play para abrir na Academia (nova aba).</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://academia.hubsoft.com.br/academia/curso/2ce39490-95b8-4ad8-903c-fbfa0bf2d1e7/video/ad8839a1-8e8c-43da-9681-7449fead21c5" target="_blank" rel="noopener noreferrer" class="btn-video" aria-label="Abrir vídeo na HubAcademia">
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>
                            </a>
                            <a href="https://academia.hubsoft.com.br/" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" aria-label="Abrir portal HubAcademia" title="Portal HubAcademia">🎓</a>
                        </div>
                    </div>

                    <h3>Depois de assistir, estude na wiki</h3>
                    <ul class="wiki-checklist">
                        <li><a onclick="window.app.navigateToWiki('tecnico', 'tecnico-provisionamento')">Provisionamento e Autorização de ONUs</a></li>
                        <li><a onclick="window.app.navigateToWiki('tecnico', 'tecnico-sinais')">Níveis de Sinal Óptico e Padrões SV</a></li>
                        <li><a onclick="window.app.navigateToWiki('tecnico', 'tecnico-os')">Fluxo de Ordens de Serviço (O.S.)</a></li>
                    </ul>
                `
            },
            {
                id: "tecnico-provisionamento",
                title: "Provisionamento e Autorização de ONUs",
                lastUpdated: "Atualizado em 19/05/2026",
                content: `
                    <p>O provisionamento é o processo de autorizar a ONU (Optical Network Unit) na OLT para liberar o sinal de internet no cadastro correto do cliente no Hubsoft.</p>

                    <div class="alert-box alert-box--warm">
                        <strong>Vídeo recomendado:</strong> Antes de praticar, assista à aula na <a href="https://academia.hubsoft.com.br/academia/curso/2ce39490-95b8-4ad8-903c-fbfa0bf2d1e7/video/ad8839a1-8e8c-43da-9681-7449fead21c5" target="_blank" rel="noopener noreferrer" style="color: var(--sv-red); font-weight: bold; text-decoration: underline;">HubAcademia (link oficial SV)</a> ou abra o artigo <a onclick="window.app.navigateToWiki('tecnico', 'tecnico-video-academia')">Vídeo Recomendado — HubAcademia</a>.
                    </div>
                    
                    <h3>Procedimento Técnico</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p>Conecte a fibra na ONU instalada no cliente. Aguarde o LED <strong>PON</strong> piscar de forma lenta (indicando que a OLT detectou a ONU, mas ela ainda não está autorizada).</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p>Acesse o Hubsoft no celular (ou PC) no menu <strong>Equipamentos > ONUs Não Autorizadas</strong> ou busque pelo contrato do cliente e clique em <strong>Ações > Provisionar Equipamento</strong>.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p>O sistema mostrará as ONUs pendentes de autorização na respectiva porta da OLT/CTO. Identifique o equipamento pelo número de série (MAC / Serial ID) impresso na etiqueta traseira da ONU.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">4</span>
                            <div class="process-step__content">
                                <p>Selecione o <strong>Perfil de Serviço (VLAN)</strong> correspondente à SV (ex: PPPoE Dinâmico ou Estático), preencha o login e senha PPPoE gerados para o cliente e clique em <strong>Autorizar ONU</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <div class="alert-box alert-box--success">
                        <strong>Sucesso:</strong> Quando o LED PON ficar verde constante, a ONU estará autorizada e conectada.
                    </div>

                    <h3>LEDs da ONU (referência rápida)</h3>
                    <div class="wiki-table-container">
                        <table class="wiki-table">
                            <thead>
                                <tr><th>LED</th><th>Comportamento</th><th>Significado</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>PON</strong></td><td>Piscando lento</td><td>ONU detectada, aguardando autorização na OLT</td></tr>
                                <tr><td><strong>PON</strong></td><td>Verde fixo</td><td>Autorizada e sincronizada — instalação OK</td></tr>
                                <tr><td><strong>LOS</strong></td><td>Vermelho fixo</td><td>Sem luz na fibra — rompimento ou conector sujo</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Materiais de apoio</h3>
                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">DOCUMENTAÇÃO OFICIAL</span>
                            <h4 class="video-card__title">Provisionamento e OLT (FiberHome / terceiros)</h4>
                            <p class="video-card__desc">Wiki Hubsoft sobre provisionamento massivo de ONUs na OLT.</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/rede/provisionamento-massivo-onus" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" aria-label="Abrir Wiki Hubsoft — Provisionamento" title="Wiki Hubsoft — Provisionamento">📖</a>
                        </div>
                    </div>
                `
            },
            {
                id: "tecnico-sinais",
                title: "Níveis de Sinal Óptico e Padrões SV",
                lastUpdated: "Atualizado em 12/05/2026",
                content: `
                    <p>Para garantir a estabilidade da banda larga e a máxima velocidade contratada pelo cliente, a equipe técnica deve medir a potência do sinal óptico (RX) na ONU e registrar os valores no Hubsoft.</p>
                    
                    <h3>Padrões de Sinal Óptico SV Internet</h3>
                    <div class="wiki-table-container">
                        <table class="wiki-table">
                            <thead>
                                <tr>
                                    <th>Status do Sinal</th>
                                    <th>Faixa (dBm)</th>
                                    <th>Classificação</th>
                                    <th>Ação Requerida</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span class="sinal-dot sinal-dot--excelente"></span><strong>Excelente</strong></td>
                                    <td>-15.00 dBm a -22.00 dBm</td>
                                    <td>Sinal perfeito</td>
                                    <td>Nenhuma ação necessária. Instalação ideal.</td>
                                </tr>
                                <tr>
                                    <td><span class="sinal-dot sinal-dot--aceitavel"></span><strong>Aceitável</strong></td>
                                    <td>-22.10 dBm a -25.00 dBm</td>
                                    <td>Sinal estável</td>
                                    <td>Instalação liberada, mas monitorar atenuação.</td>
                                </tr>
                                <tr>
                                    <td><span class="sinal-dot sinal-dot--critico"></span><strong>Crítico / Atenuado</strong></td>
                                    <td>-25.10 dBm a -28.00 dBm</td>
                                    <td>Instabilidade iminente</td>
                                    <td><strong>Ação corretiva:</strong> Refazer conector de fusão ou rápido e verificar dobras de drop.</td>
                                </tr>
                                <tr>
                                    <td><span class="sinal-dot sinal-dot--rompido"></span><strong>Sem Sinal / LOS</strong></td>
                                    <td>> -29.00 dBm ou sem leitura</td>
                                    <td>Cabo partido / Sem luz</td>
                                    <td><strong>Bloqueado:</strong> ONU offline. Procurar rompimento na fibra ou porta queimada na CTO.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Como consultar o sinal no Hubsoft</h3>
                    <p>O técnico pode ler a potência em tempo real sem precisar do Power Meter físico na casa do cliente:</p>
                    <ol>
                        <li>Acesse o cadastro do cliente no Hubsoft.</li>
                        <li>Na caixa de Conexão, clique em <strong>Ações > Ler Sinal Óptico</strong>.</li>
                        <li>O Hubsoft fará uma consulta via SNMP diretamente na OLT e trará a potência RX (recebida pelo cliente) e TX (enviada pelo cliente) em menos de 5 segundos.</li>
                        <li>Registre o valor na O.S. Se estiver na faixa crítica, <strong>não finalize</strong> sem correção (refazer conector, verificar drop dobrado).</li>
                    </ol>

                    <h3>Causas comuns de sinal ruim</h3>
                    <ul>
                        <li>Conector SC/APC sujo ou com capa plástica esquecida na ponta.</li>
                        <li>Drop dobrado em raio menor que o permitido (microcurvatura).</li>
                        <li>Fusão ou conector rápido mal encaixado na CTO.</li>
                        <li>Porta queimada ou ocupada por outro cliente (verificar etiqueta na CTO).</li>
                    </ul>
                `
            },
            {
                id: "tecnico-os",
                title: "Fluxo de Ordens de Serviço (O.S.)",
                lastUpdated: "Atualizado em 22/05/2026",
                content: `
                    <p>A Ordem de Serviço (O.S.) é o documento oficial que guia o trabalho da equipe de campo e registra tudo no sistema para faturamento e controle de estoque.</p>
                    
                    <h3>Fluxo de Trabalho</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p><strong>Recebimento:</strong> Abra o aplicativo <strong>Hubsoft Mobile</strong>. A O.S. estará na sua aba "Minhas OS". Clique nela para ler as observações, tipo de serviço (Instalação, Reparo, Mudança de Endereço) e contato do cliente.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p><strong>Check-in:</strong> Ao chegar na casa do cliente, clique em <strong>Iniciar Atendimento (Check-in)</strong> no aplicativo. O Hubsoft capturará o horário e as coordenadas GPS do início da atividade.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p><strong>Registro de Evidências:</strong> Realize o serviço. Ao finalizar, tire fotos do local pelo próprio app (foto da ONU ligada, foto do conector óptico na CTO e foto da fachada da casa do cliente com o número visível).</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">4</span>
                            <div class="process-step__content">
                                <p><strong>Baixa de Materiais & Fechamento:</strong> No fechamento da O.S., informe os materiais consumidos (ex: 80 metros de cabo drop, 2 conectores Fast, 1 ONU, 1 roteador). Colha a assinatura do cliente com o dedo na tela do celular e clique em <strong>Finalizar O.S. (Check-out)</strong>.</p>
                            </div>
                        </div>
                    </div>

                    <div class="alert-box alert-box--warm">
                        <strong>Muito Importante:</strong> A O.S. deve ser finalizada imediatamente após a conclusão do serviço, ainda na casa do cliente. O atraso na finalização interfere nas métricas de SLA da SV Internet e atrasa a liberação financeira do contrato.
                    </div>

                    <h3>Fotos obrigatórias SV (padrão mínimo)</h3>
                    <ul class="wiki-checklist">
                        <li>ONU ligada com LEDs visíveis (PON verde).</li>
                        <li>Conector óptico na CTO (etiqueta da porta legível).</li>
                        <li>Fachada do imóvel com número da residência visível.</li>
                        <li>Teste de velocidade ou print do sinal RX no app (quando aplicável).</li>
                    </ul>

                    <h3>Materiais de apoio</h3>
                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">DOCUMENTAÇÃO OFICIAL</span>
                            <h4 class="video-card__title">App do Técnico e Execução de O.S.</h4>
                            <p class="video-card__desc">Treinamento Hubsoft Mobile + regras de reserva manual/automática e check-in com GPS.</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://wiki.hubsoft.com.br/pt-br/app_tecnico/treinamento_app_tecnico" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" title="Wiki — App do Técnico">📖</a>
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/configuracao/geral/execucao_ordem_servico" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" title="Wiki — Execução de O.S.">📋</a>
                        </div>
                    </div>
                `
            }
        ]
    },
    financeiro: {
        title: "Setor Financeiro",
        badgeClass: "wiki-article-badge--financeiro",
        badgeText: "Financeiro & Faturamento",
        articles: [
            {
                id: "financeiro-faturamento",
                title: "Geração de Boletos e Segundas Vias",
                lastUpdated: "Atualizado em 14/05/2026",
                content: `
                    <p>O setor financeiro gerencia as cobranças dos assinantes da SV. É essencial saber enviar de forma rápida e segura a segunda via de faturas pelo Hubsoft.</p>
                    
                    <h3>Como emitir e enviar 2ª via pelo Hubsoft</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p>Busque o cadastro do cliente e vá na aba <strong>Financeiro > Faturas</strong>.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p>Identifique a fatura em aberto. Se o cliente solicitar a alteração do valor ou acréscimo de taxas, clique em <strong>Editar Fatura</strong> antes do envio.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p>Clique em <strong>Enviar Fatura > WhatsApp</strong> ou <strong>E-mail</strong>. O Hubsoft gerará o boleto em formato PDF, a linha digitável e também a chave <strong>Pix Copia e Cola</strong> dinâmica para pagamento imediato.</p>
                            </div>
                        </div>
                    </div>

                    <div class="alert-box alert-box--success">
                        <strong>Dica:</strong> Dê preferência ao envio via Pix Copia e Cola pelo WhatsApp, pois a baixa é compensada de forma instantânea (menos de 2 minutos) no sistema, restabelecendo a conexão do cliente automaticamente.
                    </div>

                    <h3>Compensação Pix x Boleto</h3>
                    <div class="wiki-table-container">
                        <table class="wiki-table">
                            <thead>
                                <tr><th>Forma</th><th>Tempo típico de baixa</th><th>Quando indicar ao cliente</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Pix Copia e Cola</strong></td><td>Instantâneo (até ~2 min)</td><td>Urgência de reativação</td></tr>
                                <tr><td><strong>Boleto bancário</strong></td><td>1 dia útil (ou conforme banco)</td><td>Pagamento programado</td></tr>
                                <tr><td><strong>Cartão (Central/App)</strong></td><td>Imediato após aprovação</td><td>Cliente sem Pix</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3>Materiais de apoio</h3>
                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">DOCUMENTAÇÃO OFICIAL</span>
                            <h4 class="video-card__title">Financeiro do Cliente e Remessa Bancária</h4>
                            <p class="video-card__desc">Envio de 2ª via, Pix, e-mail/SMS + geração de arquivo de remessa CNAB.</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/cliente/consultar/financeiro_cliente" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" title="Wiki — Financeiro do Cliente">📖</a>
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/financeiro/arquivo_remessa" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" title="Wiki — Arquivo de Remessa">📋</a>
                        </div>
                    </div>
                `
            },
            {
                id: "financeiro-bloqueio",
                title: "Regras de Bloqueio por Inadimplência",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>A SV Internet possui regras automatizadas no Hubsoft para a suspensão de sinal por falta de pagamento. Esse fluxo protege as finanças da empresa ao mesmo tempo em que notifica o cliente de forma amigável. <strong>A SV Internet não trabalha com redução parcial de velocidade; aplicamos o bloqueio total após 12 dias do vencimento.</strong></p>
                    
                    <h3>Linha do Tempo de Inadimplência (Padrão SV)</h3>
                    <div class="wiki-table-container">
                        <table class="wiki-table">
                            <thead>
                                <tr>
                                    <th>Dias de Atraso</th>
                                    <th>Ação do Hubsoft</th>
                                    <th>Status da Conexão</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>1 a 11 dias</strong></td>
                                    <td>Notificação preventiva</td>
                                    <td><span class="sinal-dot sinal-dot--excelente"></span>Normal</td>
                                    <td>Envio de lembrete de atraso por WhatsApp e e-mail. Sem suspensão ou redução de velocidade.</td>
                                </tr>
                                <tr>
                                    <td><strong>12 dias</strong></td>
                                    <td>Bloqueio Total</td>
                                    <td><span class="sinal-dot sinal-dot--rompido"></span>Bloqueada</td>
                                    <td>Sinal de internet cortado por completo na OLT. O cliente é direcionado para a página de aviso de débito.</td>
                                </tr>
                                <tr>
                                    <td><strong>90 dias</strong></td>
                                    <td>Cancelamento Automático</td>
                                    <td><span class="sinal-dot sinal-dot--rompido"></span>Cancelado</td>
                                    <td>Contrato cancelado de forma definitiva no Hubsoft. É gerada uma O.S. automática para recolher a ONU/Roteador.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="alert-box alert-box--dark">
                        <strong>Aviso Administrativo:</strong> Alterações manuais nessas regras ou prorrogações devem ser autorizadas pela diretoria financeira e devidamente justificadas no campo de observações internas do contrato do cliente.
                    </div>

                    <h3>O que o cliente vê quando está bloqueado</h3>
                    <p>Na suspensão total, o PPPoE autentica em pool de IPs de bloqueio e o navegador é redirecionado para a <strong>página de aviso de débito</strong> da SV. Não há redução parcial de velocidade — o serviço fica indisponível por completo após o 12º dia de atraso.</p>

                    <h3>Documentação Hubsoft</h3>
                    <ul class="resource-links">
                        <li><a href="https://wiki.hubsoft.com.br/pt-br/modulos/configuracao/geral/perfil_suspensao" target="_blank" rel="noopener noreferrer">Perfil de Suspensão (configuração)</a></li>
                        <li><a href="https://wiki.hubsoft.com.br/pt-br/modulos/configuracao/geral/variavel_configuracao/pool-ip-clientes-suspensos-total" target="_blank" rel="noopener noreferrer">Pool de IP para clientes suspensos</a></li>
                    </ul>
                `
            },
            {
                id: "financeiro-desbloqueio",
                title: "Regras de Desbloqueio em Confiança",
                lastUpdated: "Atualizado em 26/05/2026",
                content: `
                    <p>O desbloqueio em confiança (ou liberação temporária) é um recurso que permite reativar a internet do cliente inadimplente enquanto ele providencia o pagamento do boleto.</p>
                    
                    <h3>Regras SV Internet para Liberação</h3>
                    <ul>
                        <li><strong>Limite:</strong> Permitido apenas <strong>1 desbloqueio em confiança por ciclo de faturamento</strong> para cada cliente.</li>
                        <li><strong>Duração:</strong> O sinal é liberado temporariamente por exatamente <strong>72 horas (3 dias)</strong>.</li>
                        <li><strong>Cancelamento Automático:</strong> Decorridas as 72 horas, caso o Hubsoft não receba a compensação bancária do pagamento, a internet será automaticamente bloqueada de novo pelo robô de faturamento.</li>
                    </ul>

                    <h3>Como realizar o desbloqueio no Hubsoft</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <p>Acesse o contrato do cliente bloqueado.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <p>No painel superior direito, clique em <strong>Ações > Desbloqueio em Confiança</strong>.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <p>O Hubsoft verificará as regras de elegibilidade. Se o cliente estiver elegível, clique em <strong>Confirmar Liberação</strong>. A ONU sincronizará na OLT e a conexão voltará a funcionar em 1 minuto.</p>
                            </div>
                        </div>
                    </div>

                    <div class="alert-box alert-box--warm">
                        <strong>Importante:</strong> Desbloqueio em confiança não quita a fatura. O cliente continua inadimplente até o pagamento compensar no sistema.
                    </div>

                    <h3>Materiais de apoio</h3>
                    <div class="video-card">
                        <div class="video-card__info">
                            <span class="video-card__label">DOCUMENTAÇÃO OFICIAL</span>
                            <h4 class="video-card__title">Desbloqueio em Confiança no Hubsoft</h4>
                            <p class="video-card__desc">Procedimento pelo painel web, Central do Assinante e App do Cliente — com histórico de alteração de status.</p>
                        </div>
                        <div class="video-card__actions">
                            <a href="https://wiki.hubsoft.com.br/pt-br/modulos/cliente/consultar/servicos_cliente/realizar-desbloqueio-confianca" target="_blank" rel="noopener noreferrer" class="btn-video btn-video--doc" title="Wiki — Desbloqueio em Confiança">📖</a>
                        </div>
                    </div>
                `
            }
        ]
    },
    geral: {
        title: "Processos Gerais & Cultura SV",
        badgeClass: "wiki-article-badge--geral",
        badgeText: "Geral & Administrativo",
        articles: [
            {
                id: "geral-cultura",
                title: "Cultura e Valores SV Internet",
                lastUpdated: "Atualizado em 10/05/2026",
                content: `
                    <p>A <strong>SV Internet</strong> atua em <strong>Porto Seguro e região</strong> com fibra óptica de alta performance, atendimento humanizado e processos padronizados no Hubsoft. Este portal reúne o que cada setor precisa para entregar a mesma experiência ao cliente.</p>

                    <div class="wiki-summary-grid">
                        <div class="wiki-summary-card">
                            <strong>Região</strong>
                            <p>Porto Seguro, BA — foco em cobertura local e suporte próximo.</p>
                        </div>
                        <div class="wiki-summary-card">
                            <strong>Sistema</strong>
                            <p>Hubsoft (ERP para provedores) — cadastro, rede, O.S. e financeiro integrados.</p>
                        </div>
                        <div class="wiki-summary-card">
                            <strong>Atendimento</strong>
                            <p>Chat da Telia + canais oficiais — histórico auditável no Hubsoft.</p>
                        </div>
                    </div>
                    
                    <h3>Nossa Missão</h3>
                    <p><em>"Conectar pessoas, negócios e ideias com alta velocidade, estabilidade e atendimento transparente, impulsionando o desenvolvimento regional."</em></p>

                    <h3>Nossos Valores</h3>
                    <ol>
                        <li><strong>Empatia e Humanização:</strong> Não tratamos o cliente como um número. Ouvimos, entendemos e resolvemos com paciência.</li>
                        <li><strong>Excelência Técnica:</strong> Garantimos o sinal limpo da fibra óptica. Nosso padrão de fusão e organização de caixas segue regras rígidas.</li>
                        <li><strong>Transparência total:</strong> Explicamos a realidade técnica para o cliente de forma simples, sem jargões e meias-verdades.</li>
                        <li><strong>Espírito de Equipe:</strong> O comercial, o técnico e o financeiro são um time só. Se um setor falha, todos falham. Cooperamos sempre!</li>
                    </ol>

                    <h3>Manual de Conduta Interna (Básico)</h3>
                    <ul>
                        <li><strong>Uso de Uniformes:</strong> Obrigatório para equipe técnica de campo e atendimento presencial. O uniforme deve estar sempre limpo e alinhado.</li>
                        <li><strong>Segurança da Informação:</strong> Nunca compartilhe sua senha do Hubsoft. As credenciais são individuais e todas as ações no sistema são auditadas.</li>
                        <li><strong>Comunicação Interna:</strong> Nosso canal oficial para avisos gerais, recados técnicos e folgas é o chat interno corporativo e o WhatsApp Web Corporativo.</li>
                    </ul>

                    <h3>Contatos úteis</h3>
                    <ul>
                        <li><strong>Site institucional:</strong> <a href="https://svinternet.net.br/" target="_blank" rel="noopener noreferrer">svinternet.net.br</a></li>
                        <li><strong>Suporte TI / reset de senha Hubsoft:</strong> suporte@svinternet.net.br (via gestor ou ticket Telia)</li>
                        <li><strong>Wiki Hubsoft (sistema):</strong> <a href="https://wiki.hubsoft.com.br/pt-br/" target="_blank" rel="noopener noreferrer">wiki.hubsoft.com.br</a></li>
                    </ul>
                `
            },
            {
                id: "geral-glossario",
                title: "Glossário Telecom (Para Todos)",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>Para facilitar a comunicação diária entre os setores comercial, financeiro e técnico, reunimos as principais siglas e termos usados na rotina do nosso provedor.</p>
                    
                    <div class="glossary-grid">
                        <div class="glossary-item">
                            <h4 class="glossary-term">GPON (Gigabit Passive Optical Network)</h4>
                            <p class="glossary-definition">Tecnologia de fibra óptica utilizada pela SV Internet. Permite transmitir gigabits de dados com estabilidade utilizando divisores ópticos passivos (sem necessidade de energia elétrica na rua).</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">OLT (Optical Line Terminal)</h4>
                            <p class="glossary-definition">O "cérebro" da rede de fibra óptica localizado no nosso Datacenter. É o equipamento central que envia e controla o sinal de internet para todos os bairros.</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">CTO (Caixa de Terminação Óptica)</h4>
                            <p class="glossary-definition">A caixa cinza que fica nos postes na rua. É de lá que sai o cabo de fibra óptico menor (drop) que entra na casa do assinante.</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">ONU / ONT (Optical Network Unit)</h4>
                            <p class="glossary-definition">O aparelho modem receptor instalado na residência do cliente. Ele recebe a luz da fibra óptica e a transforma em sinal de internet via cabo de rede (Ethernet) ou Wi-Fi.</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">Cabo Drop</h4>
                            <p class="glossary-definition">Cabo de fibra óptica leve, reforçado internamente, usado para fazer a última milha: levar a internet da CTO no poste até o interior do imóvel do cliente.</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">Latência / Ping</h4>
                            <p class="glossary-definition">É o tempo em milissegundos (ms) que a informação leva para ir do dispositivo do cliente até o servidor e voltar. Quanto menor o ping, mais rápida é a resposta da internet (essencial para jogos online e chamadas de vídeo em tempo real).</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">PPPoE</h4>
                            <p class="glossary-definition">Protocolo de autenticação usado na SV: login e senha únicos por contrato. A ONU autentica na OLT/concentrador antes de liberar navegação.</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">VLAN</h4>
                            <p class="glossary-definition">"Etiqueta" lógica na rede que separa o tráfego do cliente. No provisionamento, o perfil de VLAN correto define qual plano/serviço a ONU recebe.</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">SNMP</h4>
                            <p class="glossary-definition">Protocolo que permite ao Hubsoft consultar sinal óptico, status e alarmes diretamente na OLT, sem ir até o poste.</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">Roteador / Mesh</h4>
                            <p class="glossary-definition">Distribui Wi-Fi dentro da casa. A ONU entrega internet via cabo; o roteador expande a cobertura wireless (não confundir os dois equipamentos).</p>
                        </div>
                        <div class="glossary-item">
                            <h4 class="glossary-term">LOS (Loss of Signal)</h4>
                            <p class="glossary-definition">Alarme de perda de sinal na ONU — fibra rompida, desconectada ou conector sem luz. Cliente fica offline até reparo.</p>
                        </div>
                    </div>
                `
            },
            {
                id: "geral-tecnologia-fibra",
                title: "Como Funciona a Fibra Óptica e ONUs",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>Para vender com propriedade ou prestar um atendimento de alto nível, o colaborador da SV Internet precisa entender <strong>exatamente o que é a tecnologia de fibra óptica</strong> e como os aparelhos funcionam na ponta do cliente.</p>

                    <h3>1. O Caminho da Luz (GPON)</h3>
                    <p>A internet por fibra óptica não utiliza eletricidade nos cabos de rua. Ela funciona por meio de <strong>pulsos de luz invisível</strong> que viajam por um fio de vidro ultra fino revestido de materiais reflexivos. Essa tecnologia de transmissão chama-se <strong>GPON</strong>.</p>
                    <ul>
                        <li><strong>OLT (Central):</strong> Envia o sinal de luz do nosso Datacenter para os bairros.</li>
                        <li><strong>Splitters (Divisores):</strong> São prismas passivos nos postes que dividem um único cabo de fibra óptica principal em 8, 16 ou mais saídas na rua.</li>
                        <li><strong>CTO (Caixa no poste):</strong> Caixa onde o cabo drop do cliente é conectado por meio de conectores ópticos de encaixe.</li>
                        <li><strong>ONU/ONT (Cliente):</strong> Aparelho que recebe a luz da fibra óptica e a traduz de volta em dados de rede (Wi-Fi e cabo Ethernet).</li>
                    </ul>

                    <h3>2. Atenuação e Níveis de Sinal</h3>
                    <p>A luz precisa chegar "forte" e "limpa" até a ONU do cliente. Qualquer sujeira na ponta do conector, cabo óptico dobrado ou emenda mal feita causa perda de luz, chamada de <strong>Atenuação</strong>. A potência do sinal é medida em dBm (números negativos):</p>
                    <ul>
                        <li><strong>Sinal de Excelência:</strong> De <code>-15 dBm</code> a <code>-22 dBm</code>. Sinal perfeito, velocidade máxima estável.</li>
                        <li><strong>Sinal Crítico:</strong> <code>-26 dBm</code> ou mais fraco (ex: <code>-28 dBm</code>). Causa lentidão fantasma, quedas de pacotes de dados e oscilações constantes da internet.</li>
                    </ul>
                `
            },
            {
                id: "geral-telia-chat",
                title: "Atendimento pelo Chat da Telia",
                lastUpdated: "Atualizado em 01/06/2026",
                content: `
                    <p>O <strong>Chat da Telia</strong> é a nossa ferramenta oficial de atendimento multichannel. Ele centraliza o contato dos clientes vindos do WhatsApp, Facebook, Instagram e do nosso site em uma única tela, otimizando o fluxo e organizando as filas de atendimento.</p>
                    
                    <h3>Principais Funcionalidades do Chat da Telia</h3>
                    <div class="process-steps">
                        <div class="process-step">
                            <span class="process-step__number">1</span>
                            <div class="process-step__content">
                                <strong>Consulta Integrada ao Hubsoft:</strong>
                                <p>Não há necessidade de sair da tela de atendimento para buscar o cliente. Pelo painel lateral do Chat da Telia, você pode consultar o cadastro do cliente no Hubsoft usando o CPF, CNPJ ou número de telefone para verificar se o sinal está ativo, se há faturas abertas ou ordens de serviço pendentes.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">2</span>
                            <div class="process-step__content">
                                <strong>Envio de Faturas e Pix Copia e Cola:</strong>
                                <p>Diretamente pela caixa de chat, com poucos cliques, você pode buscar a segunda via da fatura do cliente integrada ao Hubsoft e enviá-la em formato PDF ou apenas enviar a linha digitável e o código Pix Copia e Cola dinâmico, facilitando o pagamento rápido.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">3</span>
                            <div class="process-step__content">
                                <strong>Abertura e Registro de Protocolo (Autolog):</strong>
                                <p>Todo atendimento finalizado no Chat da Telia gera um protocolo. O sistema envia automaticamente o histórico completo da conversa para a aba de <strong>Atendimentos (Protocolos)</strong> do cliente no Hubsoft, garantindo auditoria e histórico de tudo que foi conversado.</p>
                            </div>
                        </div>
                        <div class="process-step">
                            <span class="process-step__number">4</span>
                            <div class="process-step__content">
                                <strong>Transferência Intersetorial Dinâmica:</strong>
                                <p>Caso o cliente precise falar com outro departamento (ex: suporte técnico de nível 2 ou financeiro para renegociação), você pode transferir o chat com o histórico completo. O atendente do outro setor receberá o contexto inteiro, sem que o cliente precise repetir sua dúvida.</p>
                            </div>
                        </div>
                    </div>

                    <h3>Boas práticas no atendimento Telia</h3>
                    <ul class="wiki-checklist">
                        <li>Identifique o cliente pelo CPF/CNPJ ou telefone antes de passar valores ou status.</li>
                        <li>Consulte faturas e status da conexão no painel lateral — não peça print sem necessidade.</li>
                        <li>Registre protocolo ao encerrar; o histórico vai para o Hubsoft automaticamente.</li>
                        <li>Transfira com contexto para técnico ou financeiro — o cliente não deve repetir a história.</li>
                        <li>Use respostas rápidas para saudação e encerramento, personalizando o nome do cliente.</li>
                    </ul>

                    <div class="alert-box alert-box--success">
                        <strong>Dica de Produtividade:</strong> Pix Copia e Cola pelo Telia reduz tempo de reativação após pagamento — priorize quando o cliente está bloqueado.
                    </div>

                    <h3>Escalonamento rápido</h3>
                    <div class="wiki-table-container">
                        <table class="wiki-table">
                            <thead>
                                <tr><th>Situação</th><th>Encaminhar para</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Sinal offline / LOS na ONU</td><td>Suporte técnico (abrir ou verificar O.S.)</td></tr>
                                <tr><td>Negociação de débito antigo</td><td>Financeiro / supervisor</td></tr>
                                <tr><td>Venda ou upgrade de plano</td><td>Comercial</td></tr>
                                <tr><td>Erro de sistema ou login</td><td>TI interna (ticket)</td></tr>
                            </tbody>
                        </table>
                    </div>
                `
            }
        ]
    }
};

// Onboarding Task Data (Trilha do Zero)
const ONBOARDING_TASKS = [
    // Dia 1
    {
        id: "onb-1",
        day: 1,
        title: "Cultura e Boas-Vindas SV Internet",
        desc: "Entenda a nossa história, valores, missão e nosso posicionamento na região de Porto Seguro.",
        details: `
            <p>Seja bem-vindo(a) à SV Internet! No seu primeiro dia, você deve se familiarizar com a nossa cultura.</p>
            <p><strong>Atividades obrigatórias:</strong></p>
            <ol>
                <li>Leia o artigo de <a onclick="window.app.navigateToWiki('geral', 'geral-cultura')">Cultura e Valores SV</a> na Wiki.</li>
                <li>Conheça os canais e a ferramenta de atendimento do <a onclick="window.app.navigateToWiki('geral', 'geral-telia-chat')">Chat da Telia</a>.</li>
                <li>Converse com o seu gestor imediato sobre as metas da sua primeira semana.</li>
            </ol>
        `
    },
    {
        id: "onb-2",
        day: 1,
        title: "Glossário Telecom e Conceitos Básicos",
        desc: "Domine termos fundamentais como fibra, ONU, OLT e CTO para falar a mesma língua da equipe.",
        details: `
            <p>Mesmo que você trabalhe no financeiro ou comercial, entender o básico da infraestrutura de fibra é essencial.</p>
            <p><strong>Instruções de estudo:</strong></p>
            <ul>
                <li>Estude o <a onclick="window.app.navigateToWiki('geral', 'geral-glossario')">Glossário Telecom</a> na nossa wiki geral.</li>
                <li>Leia a explicação técnica detalhada no artigo <a onclick="window.app.navigateToWiki('geral', 'geral-tecnologia-fibra')">Como Funciona a Fibra Óptica e ONUs</a> na wiki geral.</li>
                <li>Identifique a diferença entre uma ONU e um Roteador Mesh.</li>
                <li>Compreenda o conceito de sinal atenuado/sinal crítico.</li>
            </ul>
        `
    },
    {
        id: "onb-3",
        day: 1,
        title: "Criação de Credenciais e Primeiro Acesso",
        desc: "Receba seus logins das ferramentas de trabalho e configure a segurança de acesso.",
        details: `
            <p>Garantir a segurança dos dados dos clientes é prioridade.</p>
            <p><strong>Ações de configuração:</strong></p>
            <ol>
                <li>Habilite seu usuário do Hubsoft com o e-mail corporativo fornecido pelo RH.</li>
                <li>Ative a Autenticação em Duas Etapas (2FA) usando o Google Authenticator.</li>
                <li>Configure as senhas do seu e-mail institucional e canais de chat.</li>
            </ol>
        `
    },
    // Dia 2
    {
        id: "onb-4",
        day: 2,
        title: "Navegação Geral no Hubsoft",
        desc: "Aprenda a buscar clientes, ler contratos e verificar o status geral das contas de rede.",
        details: `
            <p>O Hubsoft é a ferramenta de controle que usaremos no dia a dia da empresa.</p>
            <p><strong>Prática no sistema:</strong></p>
            <ul>
                <li>Faça login no painel administrativo do Hubsoft.</li>
                <li>Use a barra de pesquisa superior para buscar o cadastro de um cliente de testes.</li>
                <li>Familiarize-se com as abas de Contrato, Conexões, Equipamentos e Financeiro do cliente.</li>
            </ul>
        `
    },
    {
        id: "onb-5",
        day: 2,
        title: "Entendendo o Fluxo de O.S. (Ordem de Serviço)",
        desc: "Conheça como a venda se integra com a ativação de campo e o faturamento financeiro.",
        details: `
            <p>O sucesso do nosso fluxo depende da integração perfeita das OS. O encerramento técnico é o que dispara o faturamento.</p>
            <p><strong>O que você deve saber:</strong></p>
            <ol>
                <li>Como o Comercial agenda uma instalação técnica por meio de uma O.S.</li>
                <li>Como o Técnico finaliza a O.S. dando baixa nos metros de cabo drop e conectores usados.</li>
                <li>Como o Financeiro confere o material e ativa a cobrança mensal recorrente automática do cliente.</li>
            </ol>
        `
    },
    // Dia 3
    {
        id: "onb-6",
        day: 3,
        title: "Processos Específicos do seu Setor (Comercial)",
        desc: "Para comerciais: Pratique consultas de viabilidade técnica no mapa e reservas de portas na CTO.",
        details: `
            <p>Se você pertence à equipe de vendas e CRM, precisa dominar as reservas de viabilidade no mapa.</p>
            <p><strong>Processos chave para estudar:</strong></p>
            <ul>
                <li>Concluir o <a onclick="window.app.navigateToWiki('comercial', 'comercial-video-academia')">Curso Recomendado — HubAcademia</a> (obrigatório SV).</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('comercial', 'comercial-viabilidade')">Consulta de Viabilidade Técnica</a>.</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('comercial', 'comercial-cadastro')">Cadastro de Novos Clientes</a>.</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('comercial', 'comercial-contrato-digital')">Assinatura Digital de Contrato</a>.</li>
            </ul>
        `
    },
    {
        id: "onb-7",
        day: 3,
        title: "Processos Específicos do seu Setor (Técnico)",
        desc: "Para técnicos: Pratique a leitura SNMP de sinal óptico, provisionamento e baixa no estoque.",
        details: `
            <p>Se você é da equipe de suporte técnico ou de rede física, o provisionamento rápido é crucial.</p>
            <p><strong>Processos chave para estudar:</strong></p>
            <ul>
                <li>Assistir o <a onclick="window.app.navigateToWiki('tecnico', 'tecnico-video-academia')">Vídeo Recomendado — HubAcademia</a> (obrigatório SV).</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('tecnico', 'tecnico-provisionamento')">Provisionamento e Autorização de ONUs</a>.</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('tecnico', 'tecnico-sinais')">Níveis de Sinal Óptico e Padrões SV</a>.</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('tecnico', 'tecnico-os')">Fluxo de Ordens de Serviço (O.S.)</a>.</li>
            </ul>
        `
    },
    {
        id: "onb-8",
        day: 3,
        title: "Processos Específicos do seu Setor (Financeiro)",
        desc: "Para financeiros: Estude regras de suspensão por atraso e liberação em confiança temporária.",
        details: `
            <p>Se você atua no caixa ou faturamento, a precisão nas regras de bloqueio economiza tempo e dinheiro.</p>
            <p><strong>Processos chave para estudar:</strong></p>
            <ul>
                <li>Artigo: <a onclick="window.app.navigateToWiki('financeiro', 'financeiro-faturamento')">Geração de Boletos e Segundas Vias</a>.</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('financeiro', 'financeiro-bloqueio')">Regras de Bloqueio por Inadimplência</a>.</li>
                <li>Artigo: <a onclick="window.app.navigateToWiki('financeiro', 'financeiro-desbloqueio')">Regras de Desbloqueio em Confiança</a>.</li>
            </ul>
        `
    }
];

class SVWikiApp {
    constructor() {
        this.currentView = 'home';
        this.activeSector = 'comercial';
        this.activeArticleId = '';
        this.currentOnboardingDay = 1;
        this.completedTasks = this.loadCompletedTasks();
        this.searchTimeout = null;

        this.init();
    }

    init() {
        this.bindEvents();
        this.renderOnboardingTasks();
        this.updateProgressBar();
        this.setupSearch();
    }

    loadCompletedTasks() {
        try {
            const saved = localStorage.getItem('sv_wiki_onboarding_progress');
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            console.error("Failed to load progress from localStorage", e);
            return {};
        }
    }

    saveCompletedTasks() {
        try {
            localStorage.setItem('sv_wiki_onboarding_progress', JSON.stringify(this.completedTasks));
        } catch (e) {
            console.error("Failed to save progress to localStorage", e);
        }
    }

    bindEvents() {
        // SPA navigation links
        document.querySelectorAll('[data-view-nav]').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const view = element.getAttribute('data-view-nav');
                this.switchView(view);
            });
        });

        // Sector dashboard cards
        document.querySelectorAll('[data-sector-card]').forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const sector = element.getAttribute('data-sector-card');
                this.navigateToWiki(sector);
            });
        });

        // Onboarding Day Tabs
        document.querySelectorAll('[data-day-tab]').forEach(element => {
            element.addEventListener('click', () => {
                const day = parseInt(element.getAttribute('data-day-tab'), 10);
                this.switchOnboardingDay(day);
            });
        });

        // Accordion triggers
        document.querySelectorAll('.accordion-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const item = trigger.closest('.accordion-item');
                const isOpen = item.classList.contains('is-open');
                
                // Close other items
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    otherItem.classList.remove('is-open');
                });

                if (!isOpen) {
                    item.classList.add('is-open');
                }
            });
        });

        // Mobile wiki sidebar toggle
        const sidebarToggle = document.getElementById('wiki-sidebar-toggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                const container = document.getElementById('wiki-sidebar-container');
                if (container) {
                    container.classList.toggle('is-open');
                    const isExpanded = container.classList.contains('is-open');
                    sidebarToggle.querySelector('span:last-child').textContent = isExpanded ? '✕' : '☰';
                }
            });
        }
    }

    switchView(viewName) {
        this.currentView = viewName;

        // Hide all views, activate the current one
        document.querySelectorAll('.app-view').forEach(view => {
            view.classList.remove('is-active');
        });

        const activeView = document.getElementById(`view-${viewName}`);
        if (activeView) {
            activeView.classList.add('is-active');
        }

        // Update header menu active states
        document.querySelectorAll('.site-nav a').forEach(nav => {
            if (nav.getAttribute('data-view-nav') === viewName) {
                nav.classList.add('is-active');
            } else {
                nav.classList.remove('is-active');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close mobile sidebar if changing view
        const container = document.getElementById('wiki-sidebar-container');
        if (container) {
            container.classList.remove('is-open');
        }
    }

    navigateToWiki(sector, articleId = null) {
        this.activeSector = sector;
        this.renderWikiSidebar();
        
        // Select the first article of the sector if none specified
        const sectorData = WIKI_DATA[sector];
        if (sectorData && sectorData.articles.length > 0) {
            const targetArticleId = articleId || sectorData.articles[0].id;
            this.loadArticle(targetArticleId);
        }

        this.switchView('wiki');
    }

    renderWikiSidebar() {
        const sectorData = WIKI_DATA[this.activeSector];
        const sidebarTitle = document.getElementById('wiki-sidebar-title');
        const wikiMenu = document.getElementById('wiki-menu');

        if (!sectorData || !sidebarTitle || !wikiMenu) return;

        // Set sidebar title
        sidebarTitle.textContent = sectorData.title;

        // Clear menu
        wikiMenu.innerHTML = '';

        // Add menu items
        sectorData.articles.forEach(article => {
            const li = document.createElement('li');
            li.className = 'wiki-menu-item';
            if (article.id === this.activeArticleId) {
                li.classList.add('is-active');
            }

            const a = document.createElement('a');
            a.textContent = article.title;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadArticle(article.id);
                
                // Close mobile sidebar drawer if clicked
                const container = document.getElementById('wiki-sidebar-container');
                if (container) container.classList.remove('is-open');
                const sidebarToggle = document.getElementById('wiki-sidebar-toggle');
                if (sidebarToggle) sidebarToggle.querySelector('span:last-child').textContent = '☰';
            });

            li.appendChild(a);
            wikiMenu.appendChild(li);
        });
    }

    loadArticle(articleId) {
        this.activeArticleId = articleId;

        // Find article data
        let article = null;
        let sectorKey = this.activeSector;

        // Verify if article belongs to active sector, otherwise locate it
        if (WIKI_DATA[this.activeSector]) {
            article = WIKI_DATA[this.activeSector].articles.find(a => a.id === articleId);
        }

        if (!article) {
            // Scan other sectors to find the article (helps when coming from search or onboarding)
            for (const sKey in WIKI_DATA) {
                const found = WIKI_DATA[sKey].articles.find(a => a.id === articleId);
                if (found) {
                    article = found;
                    sectorKey = sKey;
                    this.activeSector = sKey;
                    this.renderWikiSidebar(); // rebuild sidebar for correct sector
                    break;
                }
            }
        }

        if (!article) return;

        // Update active class in sidebar items
        document.querySelectorAll('#wiki-menu .wiki-menu-item').forEach((item, index) => {
            const currentArticle = WIKI_DATA[this.activeSector].articles[index];
            if (currentArticle && currentArticle.id === articleId) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        });

        // Set content
        const articlePanel = document.getElementById('wiki-article-panel');
        if (articlePanel) {
            const sectorData = WIKI_DATA[sectorKey];
            articlePanel.innerHTML = `
                <article class="wiki-article is-active">
                    <header class="wiki-article__header">
                        <div class="wiki-article__meta">
                            <span class="wiki-article__badge ${sectorData.badgeClass}">${sectorData.badgeText}</span>
                            <span class="wiki-article__time">${article.lastUpdated}</span>
                        </div>
                        <h2 class="wiki-article__title">${article.title}</h2>
                    </header>
                    <div class="wiki-article__body">
                        ${article.content}
                    </div>
                </article>
            `;
        }

        // Scroll to top of article container
        const articleAnchor = document.getElementById('wiki-layout-container');
        if (articleAnchor) {
            articleAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    switchOnboardingDay(day) {
        this.currentOnboardingDay = day;

        // Switch day tab active states
        document.querySelectorAll('[data-day-tab]').forEach(tab => {
            const tabDay = parseInt(tab.getAttribute('data-day-tab'), 10);
            if (tabDay === day) {
                tab.classList.add('is-active');
            } else {
                tab.classList.remove('is-active');
            }
        });

        this.renderOnboardingTasks();
    }

    renderOnboardingTasks() {
        const tasksList = document.getElementById('onboarding-tasks-list');
        if (!tasksList) return;

        // Filter tasks for current day
        const dayTasks = ONBOARDING_TASKS.filter(t => t.day === this.currentOnboardingDay);

        tasksList.innerHTML = '';

        dayTasks.forEach(task => {
            const isCompleted = !!this.completedTasks[task.id];
            
            const card = document.createElement('div');
            card.className = `onboarding-task-card ${isCompleted ? 'is-completed' : ''}`;
            card.id = `task-card-${task.id}`;

            card.innerHTML = `
                <div class="onboarding-task-checkbox" aria-label="Marcar como concluída" role="checkbox" aria-checked="${isCompleted}"></div>
                <div class="onboarding-task-content">
                    <h4 class="onboarding-task-title">${task.title}</h4>
                    <p class="onboarding-task-desc">${task.desc}</p>
                    
                    <button class="btn-toggle-details" type="button">
                        <span>Ver detalhes</span>
                        <span class="details-chevron">▼</span>
                    </button>
                    
                    <div class="onboarding-task-details">
                        ${task.details}
                    </div>
                </div>
            `;

            // Toggle completion on checkbox click
            const checkbox = card.querySelector('.onboarding-task-checkbox');
            checkbox.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleTaskCompletion(task.id);
            });

            // Expand/Collapse Details
            const toggleBtn = card.querySelector('.btn-toggle-details');
            toggleBtn.addEventListener('click', (e) => {
                e.preventDefault();
                card.classList.toggle('details-open');
                const isExpanded = card.classList.contains('details-open');
                toggleBtn.querySelector('span:first-child').textContent = isExpanded ? 'Ocultar detalhes' : 'Ver detalhes';
                toggleBtn.querySelector('.details-chevron').textContent = isExpanded ? '▲' : '▼';
            });

            tasksList.appendChild(card);
        });
    }

    toggleTaskCompletion(taskId) {
        const isCompleted = !this.completedTasks[taskId];
        
        if (isCompleted) {
            this.completedTasks[taskId] = true;
        } else {
            delete this.completedTasks[taskId];
        }

        this.saveCompletedTasks();
        this.updateProgressBar();

        // Update card visual state
        const card = document.getElementById(`task-card-${taskId}`);
        if (card) {
            const checkbox = card.querySelector('.onboarding-task-checkbox');
            if (isCompleted) {
                card.classList.add('is-completed');
                checkbox.setAttribute('aria-checked', 'true');
            } else {
                card.classList.remove('is-completed');
                checkbox.setAttribute('aria-checked', 'false');
            }
        }
    }

    updateProgressBar() {
        const total = ONBOARDING_TASKS.length;
        const completedCount = Object.keys(this.completedTasks).length;
        const percentage = total > 0 ? Math.round((completedCount / total) * 100) : 0;

        const progressBar = document.getElementById('onboarding-progress-bar');
        const progressStats = document.getElementById('onboarding-progress-stats');
        const celebration = document.getElementById('onboarding-celebration');

        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }

        if (progressStats) {
            progressStats.textContent = `${completedCount} de ${total} concluídas (${percentage}%)`;
        }

        if (celebration) {
            if (percentage === 100) {
                celebration.classList.add('is-visible');
            } else {
                celebration.classList.remove('is-visible');
            }
        }
    }

    setupSearch() {
        const searchInput = document.getElementById('global-search-input');
        const resultsBox = document.getElementById('search-results-dropdown');

        if (!searchInput || !resultsBox) return;

        // Perform instant search on keyup
        searchInput.addEventListener('input', () => {
            clearTimeout(this.searchTimeout);
            
            const query = searchInput.value.trim().toLowerCase();
            if (query.length < 2) {
                resultsBox.classList.remove('has-results');
                return;
            }

            // Debounce search slightly
            this.searchTimeout = setTimeout(() => {
                this.performSearch(query, resultsBox);
            }, 150);
        });

        // Hide results dropdown on clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
                resultsBox.classList.remove('has-results');
            }
        });

        // Re-focus search shows results if not empty
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim().length >= 2) {
                resultsBox.classList.add('has-results');
            }
        });
    }

    performSearch(query, resultsBox) {
        const matchedItems = [];

        // Scan wiki articles
        for (const sectorKey in WIKI_DATA) {
            const sector = WIKI_DATA[sectorKey];
            sector.articles.forEach(article => {
                // Strip HTML tags from content for searching
                const cleanContent = article.content.replace(/<[^>]*>/g, '');
                
                const titleMatch = article.title.toLowerCase().includes(query);
                const contentMatch = cleanContent.toLowerCase().includes(query);

                if (titleMatch || contentMatch) {
                    // Extract snippet
                    let excerpt = "";
                    const index = cleanContent.toLowerCase().indexOf(query);
                    if (index !== -1) {
                        const start = Math.max(0, index - 30);
                        const end = Math.min(cleanContent.length, index + query.length + 50);
                        excerpt = "..." + cleanContent.substring(start, end).trim() + "...";
                    } else {
                        excerpt = cleanContent.substring(0, 80).trim() + "...";
                    }

                    matchedItems.push({
                        type: 'wiki',
                        sector: sectorKey,
                        id: article.id,
                        title: article.title,
                        category: sector.title,
                        excerpt: excerpt
                    });
                }
            });
        }

        // Scan onboarding tasks
        ONBOARDING_TASKS.forEach(task => {
            const cleanDetails = task.details.replace(/<[^>]*>/g, '');
            const titleMatch = task.title.toLowerCase().includes(query);
            const descMatch = task.desc.toLowerCase().includes(query);
            const detailsMatch = cleanDetails.toLowerCase().includes(query);

            if (titleMatch || descMatch || detailsMatch) {
                let excerpt = task.desc;
                if (detailsMatch && !descMatch) {
                    const index = cleanDetails.toLowerCase().indexOf(query);
                    const start = Math.max(0, index - 30);
                    const end = Math.min(cleanDetails.length, index + query.length + 50);
                    excerpt = "..." + cleanDetails.substring(start, end).trim() + "...";
                }

                matchedItems.push({
                    type: 'onboarding',
                    day: task.day,
                    id: task.id,
                    title: task.title,
                    category: `Trilha do Zero (Dia ${task.day})`,
                    excerpt: excerpt
                });
            }
        });

        // Render results
        resultsBox.innerHTML = '';
        
        if (matchedItems.length === 0) {
            resultsBox.innerHTML = '<div class="search-results-empty">Nenhum resultado encontrado para a busca.</div>';
        } else {
            matchedItems.forEach(item => {
                const itemLink = document.createElement('a');
                itemLink.className = 'search-result-item';
                itemLink.href = '#';

                itemLink.innerHTML = `
                    <div class="search-result-title">${item.title}</div>
                    <div class="search-result-excerpt">${item.excerpt}</div>
                    <span class="search-result-category">${item.category}</span>
                `;

                itemLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    document.getElementById('global-search-input').value = '';
                    resultsBox.classList.remove('has-results');

                    if (item.type === 'wiki') {
                        this.navigateToWiki(item.sector, item.id);
                    } else if (item.type === 'onboarding') {
                        this.switchOnboardingDay(item.day);
                        this.switchView('onboarding');
                        // Highlight task card
                        setTimeout(() => {
                            const card = document.getElementById(`task-card-${item.id}`);
                            if (card) {
                                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                card.classList.add('details-open');
                                card.style.boxShadow = '0 0 15px rgba(232, 27, 38, 0.4)';
                                setTimeout(() => {
                                    card.style.boxShadow = '';
                                }, 2000);
                            }
                        }, 500);
                    }
                });

                resultsBox.appendChild(itemLink);
            });
        }

        resultsBox.classList.add('has-results');
    }
}

// Instantiate application when DOM loads
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SVWikiApp();
});
