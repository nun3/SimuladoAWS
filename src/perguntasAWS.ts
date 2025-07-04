export type Certificacao = 'Cloud Practitioner' | 'Developer' | 'DevOps Engineer';

export interface AlternativaAWS {
  texto: string;
  explicacao: string;
  link?: string;
}

export interface PerguntaAWS {
  pergunta: string;
  enunciadoEn?: string;
  alternativas: AlternativaAWS[];
  resposta?: string;
  respostas?: string[];
}

export const perguntasPorCertificacao: Record<Certificacao, PerguntaAWS[]> = {
  'Cloud Practitioner': [
    {
      pergunta: 'Qual serviço AWS é usado para armazenar objetos de forma escalável e durável?',
      enunciadoEn: 'Which AWS service is used for scalable and durable object storage?',
      alternativas: [
        { texto: 'Amazon EC2', explicacao: 'Serviço de computação para rodar servidores e aplicações.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'Amazon S3', explicacao: 'Serviço de armazenamento de objetos altamente escalável e durável.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'Serviço de banco de dados relacional gerenciado.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Serviço para executar código sem gerenciar servidores.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon S3',
    },
    {
      pergunta: 'O que é o AWS IAM?',
      enunciadoEn: 'What is AWS IAM?',
      alternativas: [
        { texto: 'Um serviço de banco de dados', explicacao: 'Não, banco de dados é o Amazon RDS ou DynamoDB.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
        { texto: 'Um serviço de gerenciamento de identidade e acesso', explicacao: 'Correto! IAM gerencia usuários e permissões.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
        { texto: 'Um serviço de computação', explicacao: 'Não, serviço de computação é o EC2 ou Lambda.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'Um serviço de monitoramento', explicacao: 'Não, monitoramento é feito pelo CloudWatch.', link: 'https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html' },
      ],
      resposta: 'Um serviço de gerenciamento de identidade e acesso',
    },
    {
      pergunta: 'Qual serviço AWS é recomendado para hospedar um site estático?',
      enunciadoEn: 'Which AWS service is recommended for hosting a static website?',
      alternativas: [
        { texto: 'Amazon S3', explicacao: 'Correto! S3 é ideal para arquivos estáticos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/WebsiteHosting.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é para servidores, não para sites estáticos.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados relacional.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa funções, não hospeda sites estáticos.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon S3',
    },
    {
      pergunta: 'Qual serviço AWS permite executar código em resposta a eventos sem gerenciar servidores?',
      enunciadoEn: 'Which AWS service allows you to run code in response to events without managing servers?',
      alternativas: [
        { texto: 'Amazon EC2', explicacao: 'EC2 exige gerenciamento de servidores.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'AWS Lambda', explicacao: 'Correto! Lambda executa código sem servidor.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é para armazenamento de objetos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'Amazon VPC', explicacao: 'VPC é para redes virtuais.', link: 'https://docs.aws.amazon.com/pt_br/vpc/latest/userguide/what-is-amazon-vpc.html' },
      ],
      resposta: 'AWS Lambda',
    },
    {
      pergunta: 'Qual serviço AWS é usado para monitorar recursos e aplicações?',
      enunciadoEn: 'Which AWS service is used for monitoring resources and applications?',
      alternativas: [
        { texto: 'Amazon CloudWatch', explicacao: 'Correto! CloudWatch monitora métricas e logs.', link: 'https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é para armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS IAM', explicacao: 'IAM é para controle de acesso.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
        { texto: 'Amazon SNS', explicacao: 'SNS é para envio de mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon CloudWatch',
    },
    {
      pergunta: 'Qual serviço AWS oferece banco de dados relacional gerenciado?',
      enunciadoEn: 'Which AWS service offers a managed relational database?',
      alternativas: [
        { texto: 'Amazon RDS', explicacao: 'Correto! RDS é banco de dados relacional gerenciado.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento de objetos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código serverless.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon DynamoDB', explicacao: 'DynamoDB é banco NoSQL.', link: 'https://docs.aws.amazon.com/pt_br/amazondynamodb/latest/developerguide/Introduction.html' },
      ],
      resposta: 'Amazon RDS',
    },
    {
      pergunta: 'Qual serviço AWS é usado para entrega de mensagens em tópicos?',
      enunciadoEn: 'Which AWS service is used for publishing messages to topics?',
      alternativas: [
        { texto: 'Amazon SNS', explicacao: 'Correto! SNS publica mensagens em tópicos.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
        { texto: 'Amazon SQS', explicacao: 'SQS é para filas de mensagens.', link: 'https://docs.aws.amazon.com/pt_br/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'AWS CloudFormation', explicacao: 'CloudFormation é infraestrutura como código.', link: 'https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'Amazon SNS',
    },
    {
      pergunta: 'Qual serviço AWS permite criar redes virtuais isoladas?',
      enunciadoEn: 'Which AWS service allows you to create isolated virtual networks?',
      alternativas: [
        { texto: 'Amazon VPC', explicacao: 'Correto! VPC cria redes virtuais privadas.', link: 'https://docs.aws.amazon.com/pt_br/vpc/latest/userguide/what-is-amazon-vpc.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'Amazon VPC',
    },
    {
      pergunta: 'Um cliente precisa hospedar um site institucional estático, com alta disponibilidade e baixo custo. Qual serviço AWS é mais indicado?',
      enunciadoEn: 'A customer needs to host a static institutional website with high availability and low cost. Which AWS service is most suitable?',
      alternativas: [
        { texto: 'Amazon EC2', explicacao: 'EC2 é para servidores, não para sites estáticos.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'Amazon S3', explicacao: 'Correto! S3 é ideal para sites estáticos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/WebsiteHosting.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados relacional.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa funções, não hospeda sites.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon S3',
    },
    {
      pergunta: 'Qual serviço AWS pode ser usado para visualizar e analisar custos e uso dos recursos na nuvem?',
      enunciadoEn: 'Which AWS service can be used to view and analyze cloud resource costs and usage?',
      alternativas: [
        { texto: 'AWS Cost Explorer', explicacao: 'Correto! O Cost Explorer permite visualizar e analisar custos.', link: 'https://docs.aws.amazon.com/pt_br/cost-management/latest/userguide/ce-what-is.html' },
        { texto: 'Amazon CloudWatch', explicacao: 'CloudWatch é para monitoramento de recursos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html' },
        { texto: 'AWS IAM', explicacao: 'IAM é para controle de acesso.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
      ],
      resposta: 'AWS Cost Explorer',
    },
    {
      pergunta: 'Qual plano de suporte AWS oferece acesso 24/7 a engenheiros de suporte e tempo de resposta de 1 hora para casos críticos?',
      enunciadoEn: 'Which AWS support plan offers 24/7 access to support engineers and 1-hour response time for critical cases?',
      alternativas: [
        { texto: 'Basic', explicacao: 'O plano Basic não oferece suporte técnico 24/7.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Developer', explicacao: 'O plano Developer não oferece resposta de 1 hora.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Business', explicacao: 'Correto! O plano Business oferece suporte 24/7 e resposta de 1 hora.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Enterprise', explicacao: 'Enterprise também oferece, mas Business já atende o requisito.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
      ],
      resposta: 'Business',
    },
    {
      pergunta: 'Qual serviço AWS permite gerenciar chaves de criptografia para proteger dados em repouso?',
      enunciadoEn: 'Which AWS service allows you to manage encryption keys to protect data at rest?',
      alternativas: [
        { texto: 'AWS KMS', explicacao: 'Correto! O KMS gerencia chaves de criptografia.', link: 'https://docs.aws.amazon.com/pt_br/kms/latest/developerguide/overview.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento, mas não gerencia chaves.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS IAM', explicacao: 'IAM é para controle de acesso.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
      ],
      resposta: 'AWS KMS',
    },
    {
      pergunta: 'Qual princípio do Well-Architected Framework recomenda projetar sistemas para se recuperar rapidamente de falhas?',
      enunciadoEn: 'Which Well-Architected Framework principle recommends designing systems to recover quickly from failures?',
      alternativas: [
        { texto: 'Implementar automação', explicacao: 'Automação é importante, mas não é o foco da recuperação.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/welcome.html' },
        { texto: 'Testar recuperação de falhas', explicacao: 'Correto! Testar recuperação garante resiliência.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/reliability-pillar.html' },
        { texto: 'Proteger dados em trânsito', explicacao: 'Proteger dados é segurança, não resiliência.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/security-pillar.html' },
        { texto: 'Minimizar custos', explicacao: 'Minimizar custos é pilar de eficiência.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/cost-optimization-pillar.html' },
      ],
      resposta: 'Testar recuperação de falhas',
    },
    {
      pergunta: 'Quais dos seguintes serviços podem ser usados para enviar notificações para usuários? (Selecione todas as corretas)',
      enunciadoEn: 'Which of the following services can be used to send notifications to users? (Select all that apply)',
      alternativas: [
        { texto: 'Amazon SNS', explicacao: 'Correto! SNS envia notificações.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
        { texto: 'Amazon SQS', explicacao: 'SQS é fila, não envia notificações diretamente.', link: 'https://docs.aws.amazon.com/pt_br/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código, não envia notificações.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon Pinpoint', explicacao: 'Correto! Pinpoint envia notificações para apps e SMS.', link: 'https://docs.aws.amazon.com/pt_br/pinpoint/latest/userguide/welcome.html' },
      ],
      respostas: ['Amazon SNS', 'Amazon Pinpoint'],
    },
    {
      pergunta: 'Qual serviço AWS permite executar código em resposta a eventos sem provisionar ou gerenciar servidores?',
      enunciadoEn: 'Which AWS service allows you to run code in response to events without provisioning or managing servers?',
      alternativas: [
        { texto: 'Amazon EC2', explicacao: 'EC2 exige gerenciamento de servidores.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'AWS Lambda', explicacao: 'Correto! Lambda executa código sem servidor.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é para armazenamento de objetos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados relacional.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'AWS Lambda',
    },
  ],
  'Developer': [
    {
      pergunta: 'Qual serviço AWS permite executar código sem gerenciar servidores?',
      enunciadoEn: 'Which AWS service allows you to run code without managing servers?',
      alternativas: [
        { texto: 'Amazon EC2', explicacao: 'EC2 exige gerenciamento de servidores.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'AWS Lambda', explicacao: 'Correto! Lambda executa código sem servidor.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é para armazenamento de objetos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'Amazon VPC', explicacao: 'VPC é para redes virtuais.', link: 'https://docs.aws.amazon.com/pt_br/vpc/latest/userguide/what-is-amazon-vpc.html' },
      ],
      resposta: 'AWS Lambda',
    },
    {
      pergunta: 'Qual serviço é usado para filas de mensagens distribuídas?',
      enunciadoEn: 'Which AWS service is used for distributed message queues?',
      alternativas: [
        { texto: 'Amazon SNS', explicacao: 'SNS é para tópicos de mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
        { texto: 'Amazon SQS', explicacao: 'Correto! SQS é fila de mensagens.', link: 'https://docs.aws.amazon.com/pt_br/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'AWS CloudFormation', explicacao: 'CloudFormation é infraestrutura como código.', link: 'https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'Amazon SQS',
    },
    {
      pergunta: 'Qual serviço AWS facilita a autenticação de usuários em aplicações web e mobile?',
      enunciadoEn: 'Which AWS service facilitates user authentication in web and mobile applications?',
      alternativas: [
        { texto: 'AWS Cognito', explicacao: 'Correto! Cognito gerencia autenticação e usuários.', link: 'https://docs.aws.amazon.com/pt_br/cognito/latest/developerguide/cognito-user-identity-pools.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
      ],
      resposta: 'AWS Cognito',
    },
    {
      pergunta: 'Qual serviço AWS é usado para versionamento de código-fonte?',
      enunciadoEn: 'Which AWS service is used for source code versioning?',
      alternativas: [
        { texto: 'AWS CodeCommit', explicacao: 'Correto! CodeCommit é repositório Git gerenciado.', link: 'https://docs.aws.amazon.com/pt_br/codecommit/latest/userguide/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon SNS', explicacao: 'SNS é para mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
      ],
      resposta: 'AWS CodeCommit',
    },
    {
      pergunta: 'Qual serviço AWS permite criar APIs RESTful facilmente?',
      enunciadoEn: 'Which AWS service allows you to create RESTful APIs easily?',
      alternativas: [
        { texto: 'Amazon API Gateway', explicacao: 'Correto! API Gateway facilita criação de APIs.', link: 'https://docs.aws.amazon.com/pt_br/apigateway/latest/developerguide/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'Amazon API Gateway',
    },
    {
      pergunta: 'Qual serviço AWS é usado para orquestrar funções Lambda em fluxos de trabalho?',
      enunciadoEn: 'Which AWS service is used for orchestrating Lambda functions in workflows?',
      alternativas: [
        { texto: 'AWS Step Functions', explicacao: 'Correto! Orquestra funções Lambda.', link: 'https://docs.aws.amazon.com/pt_br/step-functions/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS IAM', explicacao: 'IAM é controle de acesso.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
      ],
      resposta: 'AWS Step Functions',
    },
    {
      pergunta: 'Qual serviço AWS oferece banco de dados NoSQL totalmente gerenciado?',
      enunciadoEn: 'Which AWS service offers a fully managed NoSQL database?',
      alternativas: [
        { texto: 'Amazon DynamoDB', explicacao: 'Correto! DynamoDB é NoSQL gerenciado.', link: 'https://docs.aws.amazon.com/pt_br/amazondynamodb/latest/developerguide/Introduction.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco relacional.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon DynamoDB',
    },
    {
      pergunta: 'Qual serviço AWS permite enviar notificações push para dispositivos móveis?',
      enunciadoEn: 'Which AWS service allows you to send push notifications to mobile devices?',
      alternativas: [
        { texto: 'Amazon SNS', explicacao: 'Correto! SNS envia notificações push.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
        { texto: 'Amazon SQS', explicacao: 'SQS é fila de mensagens.', link: 'https://docs.aws.amazon.com/pt_br/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
      ],
      resposta: 'Amazon SNS',
    },
    {
      pergunta: 'Você está desenvolvendo uma aplicação serverless que precisa orquestrar várias funções Lambda em sequência e com condições. Qual serviço AWS é mais adequado para isso?',
      enunciadoEn: 'You are developing a serverless application that needs to orchestrate several Lambda functions in sequence and with conditions. Which AWS service is most appropriate?',
      alternativas: [
        { texto: 'AWS Step Functions', explicacao: 'Correto! Orquestra funções Lambda em fluxos de trabalho.', link: 'https://docs.aws.amazon.com/pt_br/step-functions/latest/dg/welcome.html' },
        { texto: 'Amazon SQS', explicacao: 'SQS é para filas de mensagens.', link: 'https://docs.aws.amazon.com/pt_br/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html' },
        { texto: 'Amazon SNS', explicacao: 'SNS é para notificações.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
        { texto: 'AWS CloudFormation', explicacao: 'CloudFormation é infraestrutura como código.', link: 'https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'AWS Step Functions',
    },
    {
      pergunta: 'Qual serviço AWS pode ser usado para monitorar e otimizar custos de aplicações em execução?',
      enunciadoEn: 'Which AWS service can be used to monitor and optimize running application costs?',
      alternativas: [
        { texto: 'AWS Cost Explorer', explicacao: 'Correto! Permite analisar e otimizar custos.', link: 'https://docs.aws.amazon.com/pt_br/cost-management/latest/userguide/ce-what-is.html' },
        { texto: 'Amazon CloudWatch', explicacao: 'CloudWatch monitora recursos, não custos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código, não monitora custos.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
      ],
      resposta: 'AWS Cost Explorer',
    },
    {
      pergunta: 'Qual plano de suporte AWS é recomendado para desenvolvedores que desejam orientação técnica durante o horário comercial?',
      enunciadoEn: 'Which AWS support plan is recommended for developers who want technical guidance during business hours?',
      alternativas: [
        { texto: 'Basic', explicacao: 'O plano Basic não oferece orientação técnica.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Developer', explicacao: 'Correto! O plano Developer oferece suporte técnico durante o horário comercial.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Business', explicacao: 'Business oferece suporte 24/7.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Enterprise', explicacao: 'Enterprise é para grandes empresas.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
      ],
      resposta: 'Developer',
    },
    {
      pergunta: 'Qual serviço AWS permite armazenar segredos, como senhas e tokens de API, de forma segura?',
      enunciadoEn: 'Which AWS service allows you to securely store secrets such as passwords and API tokens?',
      alternativas: [
        { texto: 'AWS Secrets Manager', explicacao: 'Correto! Gerencia segredos de forma segura.', link: 'https://docs.aws.amazon.com/pt_br/secretsmanager/latest/userguide/intro.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento de objetos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS IAM', explicacao: 'IAM é para controle de acesso.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
      ],
      resposta: 'AWS Secrets Manager',
    },
    {
      pergunta: 'Qual princípio do Well-Architected Framework recomenda automatizar o deploy e a recuperação de aplicações?',
      enunciadoEn: 'Which Well-Architected Framework principle recommends automating deployment and recovery of applications?',
      alternativas: [
        { texto: 'Implementar automação', explicacao: 'Correto! Automatizar reduz erros humanos.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/operational-excellence-pillar.html' },
        { texto: 'Testar recuperação de falhas', explicacao: 'Testar é importante, mas não é automação.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/reliability-pillar.html' },
        { texto: 'Proteger dados em trânsito', explicacao: 'Proteger dados é segurança.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/security-pillar.html' },
        { texto: 'Minimizar custos', explicacao: 'Minimizar custos é outro pilar.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/cost-optimization-pillar.html' },
      ],
      resposta: 'Implementar automação',
    },
    {
      pergunta: 'Quais serviços AWS podem ser usados para versionamento de código-fonte? (Selecione todas as corretas)',
      enunciadoEn: 'Which AWS services can be used for source code versioning? (Select all that apply)',
      alternativas: [
        { texto: 'AWS CodeCommit', explicacao: 'Correto! CodeCommit é repositório Git.', link: 'https://docs.aws.amazon.com/pt_br/codecommit/latest/userguide/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 não é para versionamento de código.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS CodePipeline', explicacao: 'CodePipeline orquestra pipelines, não versiona código.', link: 'https://docs.aws.amazon.com/pt_br/codepipeline/latest/userguide/welcome.html' },
        { texto: 'GitHub', explicacao: 'Correto! GitHub é amplamente usado para versionamento.', link: 'https://github.com/' },
      ],
      respostas: ['AWS CodeCommit', 'GitHub'],
    },
    {
      pergunta: 'Qual serviço AWS permite criar APIs RESTful facilmente?',
      enunciadoEn: 'Which AWS service allows you to easily create RESTful APIs?',
      alternativas: [
        { texto: 'Amazon API Gateway', explicacao: 'Correto! API Gateway facilita criação de APIs.', link: 'https://docs.aws.amazon.com/pt_br/apigateway/latest/developerguide/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'Amazon API Gateway',
    },
  ],
  'DevOps Engineer': [
    {
      pergunta: 'Qual serviço AWS é usado para automação de pipelines de CI/CD?',
      enunciadoEn: 'Which AWS service is used for CI/CD pipeline automation?',
      alternativas: [
        { texto: 'AWS CodePipeline', explicacao: 'Correto! CodePipeline automatiza CI/CD.', link: 'https://docs.aws.amazon.com/pt_br/codepipeline/latest/userguide/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
        { texto: 'AWS IAM', explicacao: 'IAM é controle de acesso.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
      ],
      resposta: 'AWS CodePipeline',
    },
    {
      pergunta: 'Qual serviço AWS permite gerenciar infraestrutura como código?',
      enunciadoEn: 'Which AWS service allows you to manage infrastructure as code?',
      alternativas: [
        { texto: 'AWS CloudFormation', explicacao: 'Correto! CloudFormation é infraestrutura como código.', link: 'https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/Welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
      ],
      resposta: 'AWS CloudFormation',
    },
    {
      pergunta: 'Qual serviço AWS é usado para monitoramento e logs centralizados?',
      enunciadoEn: 'Which AWS service is used for centralized monitoring and logging?',
      alternativas: [
        { texto: 'Amazon CloudWatch', explicacao: 'Correto! CloudWatch monitora métricas e logs.', link: 'https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon SNS', explicacao: 'SNS é para mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon CloudWatch',
    },
    {
      pergunta: 'Qual serviço AWS permite criar e gerenciar clusters Kubernetes?',
      enunciadoEn: 'Which AWS service allows you to create and manage Kubernetes clusters?',
      alternativas: [
        { texto: 'Amazon EKS', explicacao: 'Correto! EKS gerencia clusters Kubernetes.', link: 'https://docs.aws.amazon.com/pt_br/eks/latest/userguide/what-is-eks.html' },
        { texto: 'Amazon ECS', explicacao: 'ECS gerencia containers, mas não Kubernetes.', link: 'https://docs.aws.amazon.com/pt_br/AmazonECS/latest/developerguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
      ],
      resposta: 'Amazon EKS',
    },
    {
      pergunta: 'Qual serviço AWS permite deploy automatizado de aplicações em containers?',
      enunciadoEn: 'Which AWS service allows you to automate application deployment in containers?',
      alternativas: [
        { texto: 'Amazon ECS', explicacao: 'Correto! ECS faz deploy de containers.', link: 'https://docs.aws.amazon.com/pt_br/AmazonECS/latest/developerguide/Welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'Amazon ECS',
    },
    {
      pergunta: 'Qual serviço AWS permite armazenar e versionar imagens de container?',
      enunciadoEn: 'Which AWS service allows you to store and version container images?',
      alternativas: [
        { texto: 'Amazon ECR', explicacao: 'Correto! ECR armazena imagens Docker.', link: 'https://docs.aws.amazon.com/pt_br/AmazonECR/latest/userguide/what-is-ecr.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento de objetos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon SNS', explicacao: 'SNS é para mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon ECR',
    },
    {
      pergunta: 'Qual serviço AWS permite balanceamento de carga de aplicações?',
      enunciadoEn: 'Which AWS service allows you to load balance applications?',
      alternativas: [
        { texto: 'Elastic Load Balancing', explicacao: 'Correto! ELB distribui o tráfego.', link: 'https://docs.aws.amazon.com/pt_br/elasticloadbalancing/latest/userguide/what-is-load-balancing.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon RDS', explicacao: 'RDS é banco de dados.', link: 'https://docs.aws.amazon.com/pt_br/AmazonRDS/latest/UserGuide/Welcome.html' },
      ],
      resposta: 'Elastic Load Balancing',
    },
    {
      pergunta: 'Qual serviço AWS permite automação de configuração de servidores?',
      enunciadoEn: 'Which AWS service allows you to automate server configuration?',
      alternativas: [
        { texto: 'AWS OpsWorks', explicacao: 'Correto! OpsWorks automatiza configuração de servidores.', link: 'https://docs.aws.amazon.com/pt_br/opsworks/latest/userguide/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon SNS', explicacao: 'SNS é para mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
      ],
      resposta: 'AWS OpsWorks',
    },
    {
      pergunta: 'Uma equipe deseja automatizar o deploy contínuo de aplicações containerizadas na AWS. Qual combinação de serviços é mais adequada?',
      enunciadoEn: 'A team wants to automate continuous deployment of containerized applications on AWS. Which combination of services is most appropriate?',
      alternativas: [
        { texto: 'AWS CodePipeline + Amazon ECS', explicacao: 'Correto! CodePipeline automatiza deploy e ECS gerencia containers.', link: 'https://docs.aws.amazon.com/pt_br/codepipeline/latest/userguide/welcome.html' },
        { texto: 'Amazon S3 + AWS Lambda', explicacao: 'S3 é armazenamento, Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'Amazon RDS + AWS CloudFormation', explicacao: 'RDS é banco de dados, CloudFormation é infraestrutura como código.', link: 'https://docs.aws.amazon.com/pt_br/AWSCloudFormation/latest/UserGuide/Welcome.html' },
        { texto: 'Amazon SQS + Amazon SNS', explicacao: 'SQS e SNS são para mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
      ],
      resposta: 'AWS CodePipeline + Amazon ECS',
    },
    {
      pergunta: 'Qual serviço AWS pode ser usado para visualizar alertas de gastos e definir limites de orçamento?',
      enunciadoEn: 'Which AWS service can be used to view spending alerts and set budget limits?',
      alternativas: [
        { texto: 'AWS Budgets', explicacao: 'Correto! Permite definir limites e alertas.', link: 'https://docs.aws.amazon.com/pt_br/cost-management/latest/userguide/budgets-managing-costs.html' },
        { texto: 'AWS Cost Explorer', explicacao: 'Cost Explorer analisa custos, mas não define alertas.', link: 'https://docs.aws.amazon.com/pt_br/cost-management/latest/userguide/ce-what-is.html' },
        { texto: 'Amazon CloudWatch', explicacao: 'CloudWatch monitora recursos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
      ],
      resposta: 'AWS Budgets',
    },
    {
      pergunta: 'Qual plano de suporte AWS oferece acesso a um gerente técnico de contas (TAM)?',
      enunciadoEn: 'Which AWS support plan offers access to a Technical Account Manager (TAM)?',
      alternativas: [
        { texto: 'Basic', explicacao: 'O plano Basic não oferece TAM.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Developer', explicacao: 'O plano Developer não oferece TAM.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Business', explicacao: 'Business oferece suporte técnico, mas não TAM.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
        { texto: 'Enterprise', explicacao: 'Correto! O plano Enterprise oferece TAM.', link: 'https://aws.amazon.com/pt/premiumsupport/plans/' },
      ],
      resposta: 'Enterprise',
    },
    {
      pergunta: 'Qual serviço AWS permite monitorar e auditar atividades de API em sua conta?',
      enunciadoEn: 'Which AWS service allows you to monitor and audit API activities in your account?',
      alternativas: [
        { texto: 'AWS CloudTrail', explicacao: 'Correto! CloudTrail audita atividades de API.', link: 'https://docs.aws.amazon.com/pt_br/awscloudtrail/latest/userguide/cloudtrail-user-guide.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS IAM', explicacao: 'IAM é para controle de acesso.', link: 'https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/introduction.html' },
        { texto: 'Amazon EC2', explicacao: 'EC2 é computação.', link: 'https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/concepts.html' },
      ],
      resposta: 'AWS CloudTrail',
    },
    {
      pergunta: 'Qual princípio do Well-Architected Framework recomenda projetar sistemas para escalar automaticamente com a demanda?',
      enunciadoEn: 'Which Well-Architected Framework principle recommends designing systems to automatically scale with demand?',
      alternativas: [
        { texto: 'Implementar automação', explicacao: 'Automação é importante, mas não é o foco da escalabilidade.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/operational-excellence-pillar.html' },
        { texto: 'Escalar horizontalmente', explicacao: 'Correto! Escalar horizontalmente permite lidar com variações de demanda.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/performance-efficiency-pillar.html' },
        { texto: 'Proteger dados em trânsito', explicacao: 'Proteger dados é segurança.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/security-pillar.html' },
        { texto: 'Minimizar custos', explicacao: 'Minimizar custos é outro pilar.', link: 'https://docs.aws.amazon.com/pt_br/wellarchitected/latest/framework/cost-optimization-pillar.html' },
      ],
      resposta: 'Escalar horizontalmente',
    },
    {
      pergunta: 'Quais serviços AWS podem ser usados para orquestração de containers? (Selecione todas as corretas)',
      enunciadoEn: 'Which AWS services can be used for container orchestration? (Select all that apply)',
      alternativas: [
        { texto: 'Amazon ECS', explicacao: 'Correto! ECS orquestra containers.', link: 'https://docs.aws.amazon.com/pt_br/AmazonECS/latest/developerguide/Welcome.html' },
        { texto: 'Amazon EKS', explicacao: 'Correto! EKS orquestra clusters Kubernetes.', link: 'https://docs.aws.amazon.com/pt_br/eks/latest/userguide/what-is-eks.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código, não orquestra containers.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
      ],
      respostas: ['Amazon ECS', 'Amazon EKS'],
    },
    {
      pergunta: 'Qual serviço AWS permite armazenar e versionar imagens de container?',
      enunciadoEn: 'Which AWS service allows you to store and version container images?',
      alternativas: [
        { texto: 'Amazon ECR', explicacao: 'Correto! ECR armazena imagens Docker.', link: 'https://docs.aws.amazon.com/pt_br/AmazonECR/latest/userguide/what-is-ecr.html' },
        { texto: 'Amazon S3', explicacao: 'S3 é armazenamento de objetos.', link: 'https://docs.aws.amazon.com/pt_br/AmazonS3/latest/userguide/Welcome.html' },
        { texto: 'AWS Lambda', explicacao: 'Lambda executa código.', link: 'https://docs.aws.amazon.com/pt_br/lambda/latest/dg/welcome.html' },
        { texto: 'Amazon SNS', explicacao: 'SNS é para mensagens.', link: 'https://docs.aws.amazon.com/pt_br/sns/latest/dg/welcome.html' },
      ],
      resposta: 'Amazon ECR',
    },
  ],
}; 