# Store Manager 🏪

Este é um projeto de backend que implementa uma API RESTful para gerenciar vendas no formato dropshipping. A aplicação foi desenvolvida em JavaScript e utiliza a biblioteca "mysql2" para interagir com um banco de dados SQL.

## Funcionalidades Principais

A API oferece uma variedade de funcionalidades para gerenciamento de vendas, incluindo:

### Arquitetura MSC (Model-Service-Controller)

- **Model**: Durante o desenvolvimento deste projeto, adquiri experiência na criação da camada Model para lidar com o acesso e a manipulação de dados no banco de dados MySQL, utilizando a biblioteca "mysql2". Isso incluiu a implementação de funções essenciais, como `findAll`, `findById`, `insert`, e outras. Com o auxílio do "mysql2", pude modelar as entidades de produtos e pedidos de forma eficaz.

- **Service**: Na camada Service, centralizei toda a lógica de negócios da aplicação. Foi nesse ponto que desenvolvi serviços cruciais relacionados aos produtos e às vendas, garantindo o funcionamento eficiente e coerente de operações como cadastro, cálculos de preços e atualização de status de pedidos.

- **Controller**: Na camada Controller deste projeto, eu implementei o roteamento e a gestão das solicitações HTTP que chegam à API. Essas ações foram essenciais para garantir uma interação eficaz entre os clientes da API e a lógica de negócios subjacente.

### Biblioteca Joi

Durante o desenvolvimento deste projeto, aproveitei a biblioteca Joi de validação de dados para garantir a integridade e a validade dos dados de entrada. O Joi se revelou uma ferramenta poderosa que simplificou minha vida ao validar objetos JavaScript, permitindo-me definir esquemas de validação de maneira clara e concisa com manutenção simplificada.

## Testes

Para garantir o funcionamento correto das funcionalidades da API, foram desenvolvidos testes unitários e de integração. Os testes abrangem áreas como validação de entrada, cálculos de preços e verificação da funcionalidade das consultas ao banco de dados.




