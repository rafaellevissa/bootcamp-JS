# Aula 1 - Base binária

### A Base Numérica Binária: A Linguagem Fundamental dos Computadores

A **base binária** (ou sistema binário) é o **sistema numérico mais fundamental da computação**. Enquanto os seres humanos usam naturalmente a base decimal (de 0 a 9), os computadores operam exclusivamente em **zeros (0) e uns (1)** — o alfabeto da eletrônica digital. Entender a base binária é essencial para compreender como computadores armazenam, processam e transmitem informações em todos os níveis, desde os circuitos físicos até o código de alto nível.

#### O Que é um Sistema de Numeração?

Um **sistema de numeração** é um conjunto de símbolos e regras para representar quantidades. No sistema decimal (base 10), usamos dez símbolos (0 a 9), e cada dígito representa uma potência de 10. No sistema binário (base 2), usamos apenas **dois símbolos**: **0** e **1**, e cada posição representa uma **potência de 2**.

Exemplo:
O número binário `1011` pode ser lido assim:

```
1 × 2³ = 8  
0 × 2² = 0  
1 × 2¹ = 2  
1 × 2⁰ = 1  
Total: 8 + 0 + 2 + 1 = 11 (em decimal)
```

#### Por Que Computadores Usam Binário?

A razão principal é **física e prática**. Os computadores são feitos de circuitos eletrônicos, e esses circuitos só conseguem representar dois estados estáveis de forma confiável:

* **Ligado / Passagem de corrente** = 1
* **Desligado / Sem corrente** = 0

Esses estados são ideais para representar **valores booleanos**, **informações digitais** e **comandos lógicos** com precisão e resistência a ruído. Em termos práticos:

* Um bit (binary digit) representa 0 ou 1.
* Um byte (8 bits) pode representar 256 combinações (de 0 a 255).
* Conjuntos de bytes podem representar números, caracteres, imagens, vídeos ou qualquer dado digital.

#### Aplicações Diretas

* **Armazenamento**: todo arquivo no computador (texto, imagem, som) é codificado em binário.
* **Processadores**: operam com registros binários, usando portas lógicas que executam operações diretamente sobre bits.
* **Redes e comunicação**: pacotes de dados são transmitidos como sequências binárias codificadas.
* **Linguagens de máquina**: instruções executadas por CPUs são compostas por padrões binários.

#### Relação com a Lógica Booleana

A base binária se conecta diretamente à **lógica booleana**. Cada bit pode representar uma proposição lógica (verdadeiro ou falso), e os processadores usam operações binárias (AND, OR, NOT, XOR) para realizar cálculos e decisões lógicas.

Exemplo:

```javascript
// Em JavaScript, operadores binários podem ser aplicados diretamente
let a = 5;       // 0101
let b = 3;       // 0011
let c = a & b;   // 0001 (bit a bit AND)
console.log(c);  // 1
```

#### Extensões do Sistema Binário

* **Hexadecimal (base 16)**: usado para simplificar a representação de grandes sequências binárias.

  * Exemplo: 1111 1111 (binário) = FF (hexadecimal)
* **Octal (base 8)**: usado em contextos como permissões em sistemas Unix/Linux.

#### Importância Educacional

Para um desenvolvedor, entender binário é:

* Compreender **como seu código vira instrução de máquina**.
* Otimizar espaço de memória e entender limites (ex: tamanho de um inteiro).
* Manipular bits diretamente em operações de baixo nível (uso comum em sistemas embarcados, firmware, criptografia, compressão de dados, etc.).
* Ler e interpretar **endereços de memória, IPs, máscaras de sub-rede e representações hexadecimais**.

---

Em resumo, a **base numérica binária é o idioma nativo do computador**. Mesmo que a maior parte da programação moderna use linguagens de alto nível, entender o binário é essencial para dominar a lógica que sustenta tudo — da representação de dados à execução de algoritmos. Dominar essa base torna o desenvolvedor mais consciente, preciso e preparado para construir sistemas que realmente conversam com o hardware.
# Aula 2 - Lógica Booleana

### Lógica Booleana: Fundamento Matemático da Computação

A lógica booleana é um sistema matemático fundamental para o funcionamento de qualquer sistema computacional moderno. Criada por George Boole no século XIX, ela permite representar e manipular proposições lógicas por meio de valores binários — **0 (falso)** e **1 (verdadeiro)** — os mesmos usados internamente pelos circuitos digitais de computadores.

#### Conceitos Básicos

Na lógica booleana, toda operação é baseada em **expressões lógicas** que podem ser avaliadas como verdadeiras ou falsas. Os principais operadores utilizados são:

* **AND (E)**: retorna verdadeiro somente se ambas as entradas forem verdadeiras.

  * Exemplo: `1 AND 1 = 1`, mas `1 AND 0 = 0`
* **OR (OU)**: retorna verdadeiro se ao menos uma das entradas for verdadeira.

  * Exemplo: `0 OR 1 = 1`, `0 OR 0 = 0`
* **NOT (NÃO)**: inverte o valor lógico.

  * Exemplo: `NOT 1 = 0`, `NOT 0 = 1`

Outros operadores derivados incluem **XOR** (ou exclusivo), **NAND** (negação do AND) e **NOR** (negação do OR), amplamente utilizados em circuitos eletrônicos.

#### Aplicação Prática

Em programação, a lógica booleana é essencial para o controle de fluxo. Estruturas como `if`, `while` e `for` dependem de expressões booleanas para decidir se determinados blocos de código serão executados.

```javascript
let idade = 20;
if (idade >= 18 && idade < 60) {
  console.log("Adulto");
}
```

Nesse exemplo em JavaScript, a condição `idade >= 18 && idade < 60` é uma expressão booleana que avalia se a idade está dentro de um intervalo. O operador `&&` representa o AND lógico.

#### Tabelas Verdade

A **tabela verdade** é uma ferramenta usada para visualizar todas as possíveis combinações de valores de entrada e os respectivos resultados das operações booleanas.

| A | B | A AND B | A OR B | A XOR B |
| - | - | ------- | ------ | ------- |
| 0 | 0 | 0       | 0      | 0       |
| 0 | 1 | 0       | 1      | 1       |
| 1 | 0 | 0       | 1      | 1       |
| 1 | 1 | 1       | 1      | 0       |

Essas operações formam a base de **portas lógicas** que compõem os circuitos digitais presentes em processadores, memórias e dispositivos eletrônicos.

#### Na Computação e Arquitetura de Sistemas

A lógica booleana não é apenas uma abstração teórica — ela está presente fisicamente nos circuitos integrados e nos **transistores**, que funcionam como interruptores binários. Combinando portas lógicas, é possível construir **ALUs (Unidades Lógicas e Aritméticas)**, **registradores**, e **compiladores**, fundamentais para o funcionamento de linguagens de programação de alto nível.
# Aula 3 - Tabela verdade

### Tabela Verdade: A Visualização Lógica de Todas as Possibilidades

A **tabela verdade** é uma ferramenta fundamental na lógica booleana e na engenharia de computação. Ela serve para representar, de forma organizada, **todas as combinações possíveis de valores de entrada** em uma expressão lógica e seus **respectivos resultados**. Seu principal objetivo é ajudar a visualizar e analisar o comportamento de expressões lógicas, portas lógicas digitais e condições em código.

#### Estrutura da Tabela

Uma tabela verdade é composta por colunas que representam as **variáveis de entrada** (por exemplo, A e B) e uma ou mais colunas que indicam o **resultado** de expressões lógicas (como A AND B, A OR B, etc.). Para cada linha, a tabela mostra uma **combinação única de valores** (0 ou 1) para as entradas e os resultados obtidos a partir delas.

Por exemplo, para duas variáveis (A e B), temos 2² = 4 combinações possíveis:

| A | B | A AND B | A OR B | A XOR B | NOT A |
| - | - | ------- | ------ | ------- | ----- |
| 0 | 0 | 0       | 0      | 0       | 1     |
| 0 | 1 | 0       | 1      | 1       | 1     |
| 1 | 0 | 0       | 1      | 1       | 0     |
| 1 | 1 | 1       | 1      | 0       | 0     |

#### Aplicações Práticas

* **Circuitos digitais**: ao projetar hardware, engenheiros utilizam tabelas verdade para determinar como portas lógicas (AND, OR, NOT, etc.) se comportam em todas as possíveis combinações de sinais binários.
* **Verificação de condições**: programadores podem prever como expressões booleanas irão se comportar, ajudando na construção de estruturas condicionais seguras e precisas.
* **Testes lógicos**: tabelas verdade são úteis para garantir a correção de algoritmos que dependem de múltiplas condições, como autenticação, validações, jogos lógicos, etc.

#### Exemplo Prático em Código

Considere a seguinte condição em JavaScript:

```javascript
let A = true;
let B = false;
if (A || B && !A) {
  console.log("Verdadeiro");
} else {
  console.log("Falso");
}
```

Essa expressão pode ser analisada com uma tabela verdade para todas as combinações de A e B, observando como o operador `!` (NOT) e a precedência dos operadores afetam o resultado.

#### Crescimento Exponencial

À medida que o número de variáveis aumenta, o número de combinações cresce exponencialmente. Por exemplo:

* 2 variáveis: 2² = 4 linhas
* 3 variáveis: 2³ = 8 linhas
* 4 variáveis: 2⁴ = 16 linhas

Por isso, em sistemas mais complexos, o uso de ferramentas automatizadas para gerar e analisar tabelas verdade se torna essencial.

---

A tabela verdade é, portanto, um **instrumento didático e técnico**, indispensável para quem está aprendendo lógica, construindo software ou desenvolvendo hardware. Ela permite visualizar com clareza como decisões lógicas são tomadas dentro de uma máquina — seja num código JavaScript ou num circuito digital de um processador.
# Aula 4 - Algoritmos

### Algoritmo: O Passo a Passo Lógico para Resolver Problemas

O termo **algoritmo** pode parecer complexo, mas seu conceito é bastante simples: trata-se de uma **sequência finita de passos bem definidos e ordenados** que resolvem um problema ou executam uma tarefa. Desde preparar um café até processar uma transação bancária ou renderizar uma página web, tudo na computação moderna é baseado em algoritmos.

#### Conceito Fundamental

Um algoritmo é como uma receita de bolo: ele define **o que fazer, em que ordem fazer e como fazer**. Para ser considerado um algoritmo, uma sequência de instruções deve:

1. **Ter início e fim** (ser finito);
2. **Ser bem definido** (sem ambiguidade nos passos);
3. **Ser executável** (os passos devem ser possíveis de serem realizados);
4. **Resolver um problema específico** ou produzir um resultado claro.

#### Exemplo Simples

Um algoritmo para somar dois números pode ser:

1. Ler o número A
2. Ler o número B
3. Calcular a soma A + B
4. Mostrar o resultado

Em pseudocódigo:

```pseudocódigo
INÍCIO
  Leia A
  Leia B
  Soma ← A + B
  Escreva Soma
FIM
```

Em JavaScript:

```javascript
let A = 5;
let B = 7;
let soma = A + B;
console.log("Resultado:", soma);
```

#### Tipos de Algoritmos

* **Algoritmos lineares**: executam ações uma após a outra, em sequência.
* **Algoritmos condicionais**: usam estruturas como `if`, `else` para tomar decisões.
* **Algoritmos de repetição**: usam laços (`for`, `while`) para repetir ações.
* **Algoritmos recursivos**: um algoritmo que chama a si mesmo para resolver subproblemas.

#### Aplicações Reais

Os algoritmos estão em todos os lugares da tecnologia:

* Motores de busca (Google) usam algoritmos para ranquear páginas.
* Redes sociais usam algoritmos para decidir o que mostrar no seu feed.
* Aplicativos de mapas usam algoritmos para encontrar rotas mais rápidas.
* Algoritmos de ordenação e busca são fundamentais em bancos de dados.
* Algoritmos de aprendizado de máquina identificam padrões e fazem previsões.

#### Complexidade Algorítmica

Além de funcionar corretamente, um bom algoritmo precisa ser **eficiente**. Isso é medido por dois fatores:

* **Complexidade de tempo**: quanto tempo ele leva para ser executado (ex: O(n), O(n²)).
* **Complexidade de espaço**: quanto de memória ele consome.

Por isso, estudar algoritmos envolve tanto a lógica quanto a otimização — especialmente em contextos de grande volume de dados, como inteligência artificial ou sistemas distribuídos.

---

Em resumo, algoritmos são **o coração da programação e da computação**. Aprender a pensar de forma algorítmica — ou seja, organizar o raciocínio em etapas lógicas e eficientes — é o primeiro passo para resolver problemas reais com tecnologia.
# Aula 5 - Máquina de Turing

### Máquina de Turing: A Origem Conceitual dos Algoritmos e da Computação

A **Máquina de Turing** é um modelo teórico de computação desenvolvido por **Alan Turing** em 1936. Embora não tenha sido construída fisicamente na época, ela representa o conceito mais fundamental da ciência da computação: **a ideia de que qualquer cálculo pode ser automatizado através de regras lógicas bem definidas**. Em outras palavras, a Máquina de Turing é a **abstração matemática de um algoritmo executável por uma máquina**.

#### Estrutura da Máquina de Turing

Uma Máquina de Turing é composta por:

* **Uma fita infinita**: dividida em células, onde cada célula pode conter um símbolo (como 0, 1 ou um espaço em branco).
* **Uma cabeça de leitura/gravação**: que se move sobre a fita, lendo ou escrevendo símbolos.
* **Um conjunto de estados**: que define o “modo” atual da máquina.
* **Uma função de transição**: que determina o que a máquina deve fazer com base no símbolo atual lido e no estado atual (escrever, mover à direita/esquerda, mudar de estado).
* **Um estado de parada**: indicando que o algoritmo foi concluído.

Esse modelo simples, mas poderoso, é capaz de simular qualquer algoritmo que possa ser implementado em um computador moderno.

#### Relação com Algoritmos

A Máquina de Turing formaliza o que significa **executar um algoritmo**. Cada instrução da máquina é equivalente a uma etapa de um algoritmo:

* Leitura do estado atual e do símbolo → tomada de decisão lógica
* Escrita de um novo símbolo → execução de uma ação
* Mudança de estado → alteração do contexto
* Movimento da cabeça → controle do fluxo de dados

Assim, **qualquer programa de computador, linguagem de programação ou script que seguimos hoje é, conceitualmente, uma implementação de uma máquina de Turing**. Ela representa o limite do que é **computacionalmente possível**.

#### Exemplos Práticos e Analogia

Vamos imaginar que queremos criar uma máquina de Turing que aceite cadeias com número par de zeros. O algoritmo seria:

1. Leia o símbolo na célula.
2. Se for "0", troque para "X" e vá para o próximo estado.
3. Continue até encontrar todos os zeros e verifique se a quantidade é par.
4. Se for, entre em estado de aceitação; caso contrário, rejeite.

Esse comportamento, embora rudimentar, é a essência da lógica por trás de compiladores, validadores de expressão, linguagens formais e até inteligências artificiais.

#### Importância Teórica

* A Máquina de Turing **define o que é computável**. Problemas que não podem ser resolvidos por esse modelo são considerados **não computáveis**, como o famoso **problema da parada** (halting problem).
* O conceito de **Turing Completeness** (ou “Turing completo”) é usado para avaliar linguagens de programação — se uma linguagem pode simular qualquer Máquina de Turing, ela é considerada capaz de expressar qualquer algoritmo executável. Linguagens como Python, JavaScript, C, Rust, entre outras, são todas Turing completas.

#### Na Educação e Desenvolvimento

Entender o funcionamento da Máquina de Turing **ajuda desenvolvedores a compreender a essência do processamento lógico**, o papel dos estados e fluxos, e como a abstração de alto nível que usamos hoje (funções, loops, estruturas) é sustentada por uma base matemática rigorosa.

---

A Máquina de Turing é, portanto, **a ponte entre a matemática pura e a ciência da computação aplicada**. Ela não apenas fundamenta o conceito de algoritmo, mas também moldou o que entendemos como computador — desde os processadores modernos até os sistemas operacionais e linguagens de programação. Ao compreendê-la, o estudante não apenas aprende a programar, mas entende **por que a programação é possível**.
# Aula 6 - Estrutura de dados

### Estrutura de Dados: A Organização Inteligente da Informação

**Estruturas de dados** são formas organizadas e eficientes de armazenar, acessar e manipular informações dentro de um programa. Elas são **fundamentais para a criação de algoritmos eficazes**, garantindo que os dados sejam utilizados de forma otimizada — tanto em termos de tempo de execução quanto de uso de memória.

Na prática, a estrutura de dados que você escolhe impacta diretamente **a performance e a viabilidade de uma aplicação**, especialmente quando lidamos com grandes volumes de dados, sistemas em tempo real ou aplicações em nuvem.

#### Conceito

Estruturas de dados definem **como os dados são organizados na memória** e quais operações podem ser realizadas sobre eles (como inserção, busca, remoção, ordenação). Elas são a base para algoritmos de busca, ordenação, análise e decisão.

Alguns critérios fundamentais na escolha de uma estrutura são:

* **Velocidade de acesso** (tempo para encontrar um elemento);
* **Custo de inserção/remoção**;
* **Eficiência na ordenação ou agrupamento**;
* **Consumo de memória**.

#### Principais Tipos e Exemplos

1. **Arrays (Vetores)**

   * Estrutura linear e indexada.
   * Acesso rápido a elementos via índice.
   * Exemplo em JS:

     ```javascript
     const nomes = ["Ana", "João", "Maria"];
     console.log(nomes[1]); // João
     ```

2. **Listas Ligadas (Linked Lists)**

   * Cada elemento aponta para o próximo.
   * Flexíveis, mas com acesso sequencial.
   * Muito utilizadas quando há inserções e remoções frequentes.

3. **Pilhas (Stacks)**

   * LIFO (Last In, First Out).
   * Exemplo: desfazer ações em um editor de texto.
   * Métodos: `push()` e `pop()`.

4. **Filas (Queues)**

   * FIFO (First In, First Out).
   * Exemplo: gerenciamento de tarefas ou requisições HTTP.

5. **Filas de Prioridade e Heaps**

   * Elementos com prioridade são atendidos antes.
   * Usadas em algoritmos como Dijkstra, escalonadores de processos.

6. **Árvores (Trees)**

   * Estrutura hierárquica.
   * Exemplos: Árvores Binárias, B-Trees (usadas em bancos de dados).
   * Permitem buscas rápidas e organizadas.

7. **Grafos (Graphs)**

   * Representam relações complexas entre elementos.
   * Exemplo: redes sociais, rotas de GPS.

8. **Tabelas Hash (Hash Tables)**

   * Acesso quase instantâneo via chaves únicas.
   * Exemplo em JS:

     ```javascript
     const aluno = { nome: "Lucas", idade: 20 };
     console.log(aluno["nome"]); // Lucas
     ```

#### Aplicações Práticas

* **Arrays e objetos** são onipresentes em aplicações front-end e back-end.
* **Filas e pilhas** aparecem em controle de requisições assíncronas, sistemas de jobs e navegação por histórico.
* **Tabelas hash** são amplamente usadas em bancos de dados, caches e autenticação.
* **Árvores** estruturam o DOM no front-end e otimizam buscas.
* **Grafos** estão por trás de funcionalidades como "amigos em comum", "rotas mais curtas", e "recomendações inteligentes".

#### Desempenho

Cada estrutura tem seus **trade-offs**. Por exemplo:

* Buscar um item num **array** é rápido se soubermos o índice (O(1)), mas inserir no meio pode ser custoso (O(n)).
* Em uma **árvore balanceada**, busca, inserção e remoção são geralmente O(log n), mais eficiente que em listas ou arrays desordenados.

#### Importância para o Desenvolvedor

Entender estruturas de dados permite:

* Criar algoritmos mais rápidos e eficientes;
* Resolver problemas com menos uso de recursos;
* Passar entrevistas técnicas com confiança;
* Construir sistemas escaláveis e profissionais.

---

Em resumo, **estrutura de dados é a engenharia da informação dentro do código**. Saber escolher e aplicar a estrutura certa transforma um desenvolvedor de alguém que apenas escreve código em alguém que **resolve problemas com inteligência e performance**.
# Aula 7 - Orientação á Objetos

### Orientação a Objetos: Pensando Software como Modelos do Mundo Real

**Orientação a Objetos (OO)** é um **paradigma de programação** baseado no conceito de "objetos", que são instâncias de "classes", representando entidades do mundo real com **atributos** (dados) e **comportamentos** (métodos). Ao adotar OO, desenvolvedores constroem sistemas mais organizados, modulares e reutilizáveis — qualidades essenciais para aplicações modernas, escaláveis e de fácil manutenção.

#### Por que usar Orientação a Objetos?

O paradigma OO **ajuda a estruturar o código de forma mais intuitiva**, permitindo que os componentes de um sistema reflitam conceitos familiares, como "usuário", "produto", "pedido", entre outros. Isso favorece a legibilidade, a reutilização de código e a manutenção de sistemas complexos.

#### Conceitos Fundamentais

1. **Classe**

   * Um **molde** que define os atributos e comportamentos de um tipo de objeto.
   * Exemplo:

     ```python
     class Pessoa:
         def __init__(self, nome):
             self.nome = nome
         def falar(self):
             print(f"{self.nome} está falando.")
     ```

2. **Objeto**

   * Uma **instância concreta** de uma classe.
   * Exemplo:

     ```python
     p1 = Pessoa("João")
     p1.falar()  # João está falando.
     ```

3. **Encapsulamento**

   * O princípio de esconder os detalhes internos de implementação, expondo apenas o necessário.
   * Isso promove segurança e evita alterações acidentais nos dados internos.

4. **Herança**

   * Permite que uma classe herde atributos e métodos de outra, promovendo reutilização e hierarquia.
   * Exemplo:

     ```python
     class Funcionario(Pessoa):
         def trabalhar(self):
             print(f"{self.nome} está trabalhando.")
     ```

5. **Polimorfismo**

   * Permite que objetos de diferentes classes respondam de forma diferente ao mesmo método.
   * Exemplo: métodos `falar()` podem ser implementados de formas distintas em subclasses.

6. **Abstração**

   * Foca apenas nos detalhes relevantes de um objeto, ocultando o restante. É o processo de modelar comportamentos genéricos e deixar as implementações específicas para as subclasses.

#### Exemplo Aplicado

Imagine um sistema de e-commerce. A orientação a objetos ajuda a representar o domínio do negócio de forma clara:

* Classe `Produto`: atributos como `nome`, `preço`, métodos como `calcular_desconto()`.
* Classe `Cliente`: métodos como `realizar_pedido()`.
* Classe `Pedido`: contém uma lista de produtos, calcula total, gera nota fiscal.
* Todas essas classes se relacionam como objetos interativos.

Essa abordagem promove **modularidade**: cada parte do sistema pode ser desenvolvida, testada e reutilizada separadamente.

#### OO nas Linguagens Modernas

Linguagens como **Python, JavaScript, Java, C#, Ruby, TypeScript e PHP** oferecem suporte total à orientação a objetos. Até mesmo linguagens mais funcionais, como **Golang**, permitem aplicar conceitos orientados a objetos de forma adaptada.

Exemplo em JavaScript (classe ES6):

```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  falar() {
    console.log(`${this.nome} está falando.`);
  }
}
```

#### Benefícios no Desenvolvimento Real

* **Escalabilidade**: sistemas crescem de forma organizada;
* **Manutenção**: menor risco de quebrar funcionalidades ao fazer mudanças;
* **Reusabilidade**: código pode ser reaproveitado em diferentes contextos;
* **Testabilidade**: objetos isolados são mais fáceis de testar.

---

Em resumo, a Orientação a Objetos permite **trazer ordem ao caos dos sistemas complexos**. Ao aplicar seus princípios corretamente, o desenvolvedor não apenas escreve código — ele **modela sistemas vivos, lógicos e flexíveis**, capazes de crescer e se adaptar com o tempo.

# Aula 8 - Alan Turing


### Alan Turing: O Pai da Computação Moderna

Alan Mathison Turing (1912–1954) foi um matemático, lógico, criptógrafo e cientista britânico que é amplamente reconhecido como o **pai da ciência da computação moderna**. Suas ideias revolucionaram o entendimento do que significa "computar" e estabeleceram as **bases teóricas que permitem a existência dos computadores que usamos hoje** — do seu celular até supercomputadores e inteligências artificiais.

#### Contexto Histórico

Nascido em Londres, Turing cresceu em um ambiente acadêmico altamente estimulante. Desde cedo, demonstrou aptidão para matemática e pensamento lógico. Durante as décadas de 1930 e 1940 — um período marcado por guerras e avanços científicos intensos — Turing se destacou não apenas no campo da matemática pura, mas também na aplicação prática de suas ideias em problemas do mundo real.

#### A Máquina de Turing (1936)

Em seu artigo seminal “On Computable Numbers, with an Application to the Entscheidungsproblem”, publicado em 1936, Turing propôs o conceito da **"máquina universal"** — hoje conhecida como **Máquina de Turing**. Essa máquina era um modelo teórico capaz de simular **qualquer algoritmo executável**, abrindo caminho para o conceito de **computação universal**.

A importância desse trabalho é tão profunda que, até hoje, usamos o termo “**Turing Completo**” para descrever linguagens de programação ou sistemas que conseguem simular esse poder computacional.

Ou seja: **Turing definiu, matematicamente, o que significa um "programa" e o que é "computável".** Todas as linguagens de programação modernas — Python, JavaScript, C, Java, entre outras — são baseadas nesse mesmo princípio.

#### A Criptografia e a Segunda Guerra Mundial

Durante a Segunda Guerra Mundial, Turing trabalhou no centro de inteligência britânico Bletchley Park, onde liderou esforços para decifrar os códigos da máquina alemã **Enigma** — considerada inviolável na época.

Turing projetou uma máquina eletromecânica chamada **"Bombe"**, que automatizava parte do processo de quebra dos códigos nazistas. Estima-se que sua contribuição tenha **encurtado a guerra em pelo menos dois anos** e salvado milhões de vidas.

Apesar da importância histórica e estratégica de sua atuação, o reconhecimento veio muito tempo depois — e postumamente.

#### Contribuições Científicas Adicionais

* **Tese da Computabilidade**: Ao lado de Alonzo Church, Turing estabeleceu formalmente os limites do que pode e do que não pode ser resolvido por uma máquina.
* **Inteligência Artificial**: Em 1950, publicou o artigo “Computing Machinery and Intelligence”, no qual propôs o **Teste de Turing**, um experimento mental para avaliar se uma máquina pode demonstrar comportamento inteligente indistinguível de um ser humano.
* **Turing Pattern (Biologia)**: Nos últimos anos de sua vida, Turing estudou padrões biológicos, propondo modelos matemáticos para explicar como padrões como listras e manchas se formam em animais — hoje estudados em biologia matemática.

#### Perseguição e Reconhecimento Tardio

Apesar de suas contribuições, Turing foi perseguido por sua homossexualidade, considerada crime no Reino Unido na época. Foi condenado e submetido a tratamentos hormonais forçados. Morreu em 1954, em circunstâncias que sugerem suicídio.

Somente décadas depois, Turing começou a receber o reconhecimento merecido:

* Em 2009, o governo britânico emitiu um pedido oficial de desculpas.
* Em 2013, foi concedido um **perdão real póstumo**.
* Em 2021, seu rosto passou a estampar a nota de **£50 do Banco da Inglaterra**.

#### Legado

O impacto de Turing é **imensurável**. Ele não apenas fundou os pilares teóricos da computação, mas também inspirou gerações de cientistas e engenheiros. Hoje, o **Prêmio Turing** — considerado o "Nobel da Computação" — é concedido anualmente para homenagear contribuições de destaque no campo da ciência da computação.

---

Alan Turing não foi apenas um cientista. Foi um visionário que **antecipou a era dos computadores**, **salvou vidas com sua inteligência** e **mudou para sempre a forma como lidamos com informação, lógica e máquinas**. Estudar sua vida e suas ideias é, portanto, fundamental para qualquer desenvolvedor que deseja entender não apenas o "como", mas o **porquê e o para quê** da computação moderna.
# Aula 9 - Processadores e multi core

### A Evolução dos Processadores e o Surgimento do Multi-Core: Um Salto na Computação

Os **processadores** (ou *CPUs – Central Processing Units*) são o "cérebro" do computador. Tudo o que um programa executa — desde operações aritméticas até decisões condicionais — é realizado por instruções processadas dentro dessa unidade. A história dos processadores acompanha a própria história da computação moderna, com avanços que transformaram radicalmente **a forma como os programas são escritos, executados e otimizados**.

#### Primeiros Processadores: A Era da Monocore

Nos primórdios da computação, os processadores executavam **uma única instrução por vez**, em **um único núcleo de processamento** (monocore). Cada ciclo da CPU processava uma tarefa sequencial, o que limitava o desempenho geral a apenas **uma linha de execução por vez**, por mais rápido que o clock fosse.

* **Décadas de 1970–1990**: a Intel lançou os primeiros processadores comerciais (como o 4004 e o 8086), que evoluíram para CPUs mais poderosas, mas ainda monocore.
* O foco era **aumentar a frequência de clock** (velocidade) e a densidade de transistores (Lei de Moore).

#### Limites Físicos e Térmicos

A partir dos anos 2000, os fabricantes encontraram **limites físicos e térmicos** para continuar aumentando a frequência dos processadores. A dissipação de calor tornou-se um gargalo: **mais GHz significava mais energia, mais calor e risco de instabilidade**.

Foi nesse momento que surgiu uma abordagem alternativa: **distribuir o trabalho em múltiplos núcleos de processamento** dentro do mesmo chip.

#### O Surgimento do Multi-Core

A **arquitetura multi-core** consiste em integrar dois ou mais núcleos de processamento em um único chip. Cada núcleo funciona como uma “mini CPU” independente, capaz de executar instruções de forma paralela.

* **Dual-core**: dois núcleos (ex: Intel Core 2 Duo)
* **Quad-core, Octa-core, etc.**: quatro, oito ou mais núcleos
* Atualmente, temos processadores com **até 64 núcleos** em servidores e supercomputadores, e até mesmo **big.LITTLE architectures** com núcleos de performance e eficiência combinados (como nos chips da Apple, AMD e ARM).

#### Impacto na Programação

O surgimento do multi-core **mudou profundamente a maneira de desenvolver software**. Antes, bastava escrever um código eficiente e sequencial; hoje, os desenvolvedores precisam **pensar em paralelismo e concorrência**.

**Consequências práticas:**

1. **Paralelismo e Concorrência**

   * Permite dividir tarefas em múltiplos “threads” para rodar simultaneamente em núcleos diferentes.
   * Exemplo: carregar imagens, processar dados e manter a interface responsiva — tudo ao mesmo tempo.

2. **Programação Assíncrona**

   * Em linguagens como JavaScript, o uso de `async/await`, Promises e Web Workers permite aproveitar melhor múltiplos núcleos, mesmo em contextos de execução single-threaded.

3. **Performance em Escala**

   * Processos como análise de big data, inteligência artificial, renderização gráfica e computação científica se tornaram viáveis graças à execução paralela em múltiplos núcleos e múltiplas CPUs.

4. **Novos Modelos de Arquitetura**

   * Frameworks e linguagens incorporaram recursos nativos para concorrência: `threading`, `multiprocessing`, `goroutines` (Golang), `actors` (Elixir/Erlang), entre outros.
   * Sistemas operacionais modernos fazem balanceamento de carga entre núcleos.

5. **Testes e Debugging Mais Complexos**

   * Bugs relacionados à concorrência (como race conditions, deadlocks e starvation) surgem com mais frequência, exigindo atenção redobrada em projetos paralelos.

#### Exemplo Prático

Imagine um backend de e-commerce que precisa:

* Processar pagamento,
* Atualizar estoque,
* Enviar confirmação por e-mail,
* Gerar nota fiscal.

Com múltiplos núcleos, essas ações podem ser executadas de forma assíncrona e simultânea, acelerando o tempo de resposta total e garantindo melhor escalabilidade da aplicação.

#### Futuro: Multi-Core + Multi-Thread + IA

Com a evolução da tecnologia, novas tendências combinam múltiplos núcleos com:

* **Threads simultâneos por núcleo** (Hyper-Threading);
* **GPUs com milhares de núcleos para paralelismo massivo**;
* **Unidades específicas para IA (TPUs, NPUs)**;
* **Processadores com núcleos otimizados para diferentes tipos de tarefa (performance vs eficiência)**.

---

Em resumo, a evolução dos processadores, especialmente com o advento dos núcleos múltiplos, **não só aumentou a capacidade de computação, mas exigiu uma mudança completa no pensamento do desenvolvedor moderno**. Hoje, para criar aplicações performáticas e escaláveis, é preciso **entender o que está acontecendo “embaixo do capô”** — e isso começa por saber como os processadores evoluíram, como o código é executado por múltiplos núcleos e como aproveitar essa arquitetura da melhor forma possível.
# Aula 10 - História da web

## 🧠 Material de Aula – História da Web (com Tecnologias Práticas)

### 🌐 **Web 1.0 – A Web Estática (1990–2004)**

#### 🛠️ **Tecnologias utilizadas:**

* **HTML / CSS básico**
* **HTTP**
* **Servidores Apache**
* **FrontPage, Dreamweaver (edição de sites)**
* Sem banco de dados

#### 👨‍💻 Para Desenvolvedores:

* Sites codificados à mão
* Sem frameworks nem back-end dinâmico
* Ex: página com portfólio pessoal em HTML puro

#### 👥 Para o Público:

* Acesso unidirecional à informação
* Sites institucionais, jornais online (sem comentários)
* Ex: [Jornal Estadão dos anos 90](https://web.archive.org/)

---

### 🤝 **Web 2.0 – A Web Social e Interativa (2004–2020)**

#### 🛠️ **Tecnologias utilizadas:**

* **JavaScript, AJAX**
* **PHP, Ruby on Rails, Python (Flask/Django)**
* **MySQL, PostgreSQL**
* **APIs REST**
* **CMSs (WordPress, Joomla)**

#### 👨‍💻 Para Desenvolvedores:

* Backend dinâmico e bancos relacionais
* Frameworks MVC
* APIs para integração (ex: login com Google)
* Aplicações como: blogs com comentários, redes sociais, sistemas de e-commerce

#### 👥 Para o Público:

* Redes sociais, blogs, vídeos, fóruns
* Aplicações colaborativas (Google Docs, Wikipedia)
* Ex: YouTube (upload e comentários), Facebook, Twitter

---

### 🧠 **Web 3.0 – A Web Semântica e Inteligente (2020–Hoje)**

#### 🛠️ **Tecnologias utilizadas:**

* **IA/ML (Python, TensorFlow, OpenAI API)**
* **GraphQL, SPARQL, RDF/OWL**
* **Blockchain (Ethereum, Solidity)**
* **WebSockets**
* **Frameworks: Next.js, NestJS, FastAPI**

#### 👨‍💻 Para Desenvolvedores:

* Criação de DApps com contratos inteligentes
* Integração de assistentes com IA
* Análise semântica de dados
* Ex: marketplace descentralizado, bots com NLP, dashboards inteligentes

#### 👥 Para o Público:

* Assistentes como ChatGPT e Alexa
* DApps e DeFi (Uniswap, Metamask)
* Experiência personalizada de navegação
* Ex: recomendações da Netflix, ChatGPT, Brave Browser com Web3

---

### 🤖 **Web 4.0 – A Web Ubíqua e Imersiva (Em Desenvolvimento)**

#### 🛠️ **Tecnologias utilizadas:**

* **IoT (Arduino, Raspberry Pi, MQTT)**
* **5G**
* **AR/VR (Unity, WebXR, Unreal)**
* **Edge computing**
* **Digital Twins, Realidade Mista**

#### 👨‍💻 Para Desenvolvedores:

* Aplicações de realidade aumentada com JavaScript (Three.js, A-Frame)
* Softwares embarcados conectando sensores à nuvem
* Sistemas preditivos com IA
* Ex: metaversos corporativos, digital twins para manutenção preditiva

#### 👥 Para o Público:

* Experiência imersiva (óculos VR, Metaverso)
* Cidades inteligentes, casas automatizadas
* Dispositivos que antecipam ações (geladeira inteligente, carros autônomos)
* Ex: Meta Quest, Apple Vision Pro, Alexa que ajusta casa automaticamente

---

## 🧭 Mapa Mental Estruturado (com Tecnologias)

**História da Web**

```
│
├── Web 1.0 - Estática
│   ├── HTML, CSS, HTTP
│   ├── Sites de leitura
│   └── Ex: GeoCities, páginas pessoais
│
├── Web 2.0 - Social
│   ├── JavaScript, AJAX, APIs REST
│   ├── WordPress, Redes Sociais
│   └── Ex: Facebook, YouTube, Wikipédia
│
├── Web 3.0 - Semântica
│   ├── IA, Blockchain, GraphQL, RDF
│   ├── ChatGPT, DApps, Recomendação
│   └── Ex: Netflix, OpenAI, Uniswap
│
└── Web 4.0 - Ubíqua
    ├── IoT, AR/VR, WebXR, 5G
    ├── Metaverso, Realidade Mista
    └── Ex: Meta Quest, cidades inteligentes
```

---
# Aula 11 - Da infra á Cloud

### De Infraestrutura Local à Computação em Nuvem: A Revolução Silenciosa da Infraestrutura de TI

A forma como as aplicações são hospedadas, executadas e escaladas sofreu uma transformação radical nas últimas décadas. A mudança da **infraestrutura local (on-premises)** para a **infraestrutura em nuvem (cloud computing)** representa uma das **maiores revoluções da história da computação moderna**, alterando não apenas a forma como sistemas são construídos, mas também **quem pode construí-los e com que velocidade**.

#### O Que é Infraestrutura Local?

Antes da nuvem, todas as aplicações e sistemas corporativos eram executados em servidores físicos, comprados, instalados e mantidos dentro das próprias empresas ou datacenters dedicados. Essa abordagem é conhecida como **infraestrutura on-premises**.

**Características principais:**

* **Servidores físicos dedicados** (com custo alto de aquisição e manutenção);
* **Instalação e configuração manual**;
* **Dependência da equipe de TI interna**;
* **Custos fixos e altos para expansão (CAPEX)**;
* **Escalabilidade limitada e lenta**.

**Exemplo real**: Para lançar um sistema novo em uma empresa, era necessário adquirir servidores, esperar semanas pela entrega, configurar a rede, instalar o sistema operacional, garantir backups, segurança, redundância... e torcer para a carga prevista estar correta.

#### A Chegada da Nuvem (Cloud Computing)

Com o avanço da internet, da virtualização e da demanda por agilidade, surgiu uma nova proposta: **alugar capacidade computacional sob demanda**, com cobrança por uso, alta escalabilidade e manutenção terceirizada.

A **cloud computing** ganhou força no início dos anos 2000 com o surgimento de plataformas como:

* **Amazon Web Services (AWS)** – 2006
* **Microsoft Azure** – 2010
* **Google Cloud Platform** – 2011

Essas empresas transformaram a infraestrutura de TI em um **serviço sob demanda**, acessível via internet, flexível e altamente escalável.

**Modelos principais:**

* **IaaS (Infraestrutura como Serviço)** – máquinas virtuais, redes, storage (ex: EC2, S3).
* **PaaS (Plataforma como Serviço)** – serviços prontos para rodar apps (ex: Heroku, App Engine).
* **SaaS (Software como Serviço)** – aplicativos entregues já como produto final (ex: Gmail, Salesforce).

#### Diferenças Fundamentais

| Aspecto                  | Infraestrutura Local         | Computação em Nuvem              |
| ------------------------ | ---------------------------- | -------------------------------- |
| Controle                 | Total (físico e lógico)      | Parcial (via plataforma)         |
| Custo inicial            | Alto (CAPEX)                 | Baixo ou nenhum (OPEX)           |
| Escalabilidade           | Lenta e cara                 | Instantânea e elástica           |
| Manutenção               | Interna                      | Terceirizada (provedor)          |
| Tempo de provisionamento | Semanas                      | Minutos ou segundos              |
| Disponibilidade          | Limitada pela infraestrutura | Alta, com redundância automática |
| Segurança                | Interna, depende da empresa  | Compartilhada, com boas práticas |

#### Impacto para Desenvolvedores e Startups

* **Velocidade de entrega**: é possível subir uma aplicação em minutos, usando pipelines automatizados, provisionamento de servidores, banco de dados e balanceadores de carga com poucos cliques ou scripts.
* **Custo acessível para pequenos times**: qualquer desenvolvedor pode subir um sistema com qualidade de infraestrutura corporativa usando planos gratuitos ou com custos baixos.
* **Cultura DevOps**: a nuvem facilitou o surgimento de práticas como CI/CD, infraestrutura como código (Terraform, CloudFormation), escalabilidade automatizada e deploy contínuo.
* **Focus no negócio, não na infraestrutura**: permite que desenvolvedores foquem no código e na entrega de valor, deixando a gestão física para os provedores.

#### Transição Histórica

1. **Anos 90 – 2000**: datacenters locais dominam, servidores físicos são padrão.
2. **2006**: lançamento da AWS transforma infraestrutura em serviço escalável.
3. **2010–2020**: massiva adoção de cloud por startups e grandes empresas.
4. **Hoje**: cloud é o padrão para novas aplicações, com tendência de **cloud-native** (aplicações desenhadas para nuvem desde a origem) e arquiteturas serverless.

#### E o Futuro?

* **Serverless computing**: execução de código sem gerenciar servidores (ex: AWS Lambda, Cloud Functions).
* **Edge computing**: processamento distribuído próximo ao usuário final.
* **Multi-cloud**: uso de múltiplos provedores para evitar dependência.
* **Inteligência artificial na gestão de infraestrutura**: otimização automática de custo e desempenho.

---

Em resumo, a migração da infraestrutura local para a nuvem **democratizou o acesso à tecnologia de ponta**, reduziu custos, acelerou a inovação e redefiniu o papel do desenvolvedor. Hoje, entender os fundamentos da cloud — e como ela difere do modelo tradicional — é essencial para **projetar, escalar e manter sistemas modernos com eficiência e segurança**.
# Aula 12 - Arquiteturas modernas e sistemas distribuídos

### Arquiteturas de Software Modernas e Sistemas Distribuídos: Da Estrutura Monolítica à Computação em Larga Escala

A forma como os softwares são estruturados evoluiu dramaticamente nas últimas décadas. Se antes um sistema era um único bloco coeso rodando em um único servidor, hoje as **arquiteturas modernas são compostas por múltiplos serviços, altamente desacoplados, executando em diferentes máquinas, geografias e linguagens.** Esse modelo, conhecido como **sistemas distribuídos**, tornou-se o novo padrão da indústria para construir aplicações escaláveis, resilientes e evolutivas.

#### O Início: Arquiteturas Monolíticas

Durante os anos 70, 80 e até o início dos 2000, era comum construir **aplicações monolíticas** — grandes blocos de código em que toda a lógica de negócio, interface, banco de dados e controle estavam integrados em um único sistema.

**Características:**

* Simples de desenvolver inicialmente;
* Difícil de escalar;
* Risco alto de falhas em cascata;
* Deploys lentos e dolorosos;
* Crescimento do código gera “bola de neve” técnica.

**Exemplo**: Um sistema ERP inteiro sendo executado em um servidor com um único código-fonte, uma única base de dados e zero separação de responsabilidades.

#### Avanço: Arquiteturas em Camadas

A evolução natural foi a **separação em camadas (Layered Architecture)**, geralmente dividida em:

* **Camada de Apresentação (Frontend/UI)**
* **Camada de Negócio (Regras/Serviços)**
* **Camada de Persistência (Banco de Dados)**

Isso tornou o desenvolvimento mais organizado e manteve o sistema monolítico, porém com melhor separação de preocupações. Ainda assim, a escalabilidade e manutenibilidade continuavam sendo desafios.

#### A Grande Virada: Sistemas Distribuídos

Com o avanço da internet, da cloud e da demanda por disponibilidade 24/7, surgiu a necessidade de **distribuir os componentes do sistema entre múltiplos servidores**, formando o que chamamos de **sistemas distribuídos**.

**O que são?**
Sistemas cujos componentes estão localizados em **nós diferentes (máquinas físicas ou virtuais), comunicando-se por meio de redes**, geralmente via protocolos como HTTP, gRPC, ou mensageria (RabbitMQ, Kafka, SQS).

**Características:**

* Escalabilidade horizontal (adicionar mais máquinas);
* Alta disponibilidade e tolerância a falhas;
* Independência de serviços;
* Complexidade de sincronização e comunicação.

#### Arquiteturas Modernas Baseadas em Sistemas Distribuídos

1. **Microserviços**

   * Cada componente do sistema é um serviço independente com responsabilidade única.
   * Comunicam-se via APIs.
   * Facilitam deploys independentes, escalabilidade granular e uso de tecnologias diferentes por serviço.
   * Muito utilizados em plataformas como Netflix, Amazon, Spotify.

2. **Event-Driven Architecture (EDA)**

   * Serviços reagem a eventos publicados por outros serviços.
   * Alta desacoplagem e reatividade.
   * Exemplo: um evento de “pedido confirmado” dispara serviços de nota fiscal, envio de e-mail e separação de estoque.

3. **Serverless**

   * Código executado como funções efêmeras, escalando automaticamente sob demanda.
   * O desenvolvedor se concentra apenas na lógica, e a infraestrutura é gerenciada pelo provedor (ex: AWS Lambda, Google Cloud Functions).

4. **Arquiteturas Orientadas a Serviços (SOA)**

   * Antecessora aos microserviços, com foco em reuso de serviços corporativos compartilhados (geralmente via XML/SOAP).

5. **Arquitetura Hexagonal / Ports and Adapters**

   * Separação entre núcleo de negócio e interfaces externas (banco, API, UI), ideal para testes e manutenção.

#### Desafios dos Sistemas Distribuídos

* **Latência e consistência**: comunicação em rede nunca é instantânea.
* **Falhas parciais**: uma parte pode falhar sem que todo o sistema caia — o que exige gestão inteligente de estados e erros.
* **Orquestração e observabilidade**: monitorar, logar e debugar um sistema distribuído exige ferramentas como Prometheus, Grafana, OpenTelemetry, Jaeger.
* **DevOps e automação**: pipelines CI/CD e infraestrutura como código são essenciais para gerenciar a complexidade.

#### Impacto na Programação

O desenvolvedor moderno precisa:

* Pensar em **modularização e responsabilidade única**;
* Escrever **códigos desacoplados e resilientes**;
* Lidar com **comunicação assíncrona, filas e eventos**;
* Ter familiaridade com **containers (Docker), orquestradores (Kubernetes), e mensageria**;
* Dominar princípios de **observabilidade, testes automatizados e recuperação de falhas**.

#### Exemplo Prático

Imagine um sistema de e-commerce com microserviços:

* Serviço de autenticação (login, JWT)
* Serviço de produtos
* Serviço de pedidos
* Serviço de pagamentos
* Serviço de notificações

Cada um é executado em uma instância isolada, pode ser escalado separadamente e se comunica por APIs ou eventos.

---

Em resumo, arquiteturas modernas e sistemas distribuídos **mudaram completamente a forma de pensar software**. Hoje, construir aplicações robustas, performáticas e escaláveis exige um olhar arquitetural que ultrapassa o código local — envolve **entendimento profundo de interconexões, independência entre serviços, e a habilidade de projetar sistemas que funcionam bem mesmo quando partes falham.**

# Aula 13 - Introdução ao JS


## ✅ 1. O que é JavaScript?

* JavaScript é uma **linguagem de programação de alto nível**, leve, orientada a objetos e baseada em protótipos.
* Originalmente criada para **navegadores** (client-side), hoje também roda **no servidor** com o Node.js.
* JavaScript permite criar:

  * Interatividade em páginas web (animações, formulários dinâmicos, etc.)
  * Aplicações web completas (SPA, APIs, tempo real, etc.)
  * Aplicações de back-end, mobile, desktop, IoT e muito mais

---

## 📜 2. O que é ECMAScript?

* **ECMAScript (ES)** é a **especificação oficial da linguagem** JavaScript, mantida pela **ECMA International**.
* JavaScript é uma **implementação** do padrão ECMAScript.
* Versões famosas:

  * **ES5 (2009)**: compatibilidade ampla
  * **ES6 (2015)**: grande marco – `let`, `const`, arrow functions, classes, promises
  * **ES7+ (2016–em diante)**: melhorias contínuas, `async/await`, optional chaining, etc.
* Outros implementadores do ECMAScript: **JScript (Microsoft), ActionScript (Adobe)**

---

## ⚙️ 3. O JavaScript é interpretado ou compilado?

### ✅ Curta resposta:

> **JavaScript é uma linguagem interpretada com compilação Just-In-Time (JIT)**.

### 🔍 Explicação:

* Originalmente, JS era **interpretado linha por linha** no navegador.
* Hoje, os motores modernos (como o **V8**, do Chrome e do Node.js) **compilam JS em tempo de execução (JIT)** para melhorar a performance.
* Isso significa:

  * JS **não é compilado antes da execução**, como C ou Java.
  * Ele **é analisado, otimizado e executado "on the fly"** pelo motor.

---

## 🖥️ 4. O que é o Node.js?

* **Node.js é um ambiente de execução JavaScript fora do navegador**.
* Foi criado em 2009 por **Ryan Dahl**.
* Baseado no **motor V8** (o mesmo do Chrome), permite executar JS no **servidor**.
* Node.js traz:

  * Acesso a arquivos, sistema, rede, banco de dados etc.
  * Execução **assíncrona e não-bloqueante** com `event loop`
  * Gerenciador de pacotes **npm (Node Package Manager)**

---

## 🆚 5. Diferença: JavaScript no Navegador vs Node.js

| Aspecto           | Navegador (Client-side JS)        | Node.js (Server-side JS)                       |
| ----------------- | --------------------------------- | ---------------------------------------------- |
| Ambiente          | Navegador (Chrome, Firefox, etc.) | Servidor (qualquer máquina com Node instalado) |
| Objetos globais   | `window`, `document`, `navigator` | `global`, `process`, `__dirname`               |
| Acesso a arquivos | ❌ Sem acesso                      | ✅ Acesso via `fs`, `path`, etc.                |
| Finalidade        | Interação com o usuário, UI       | Lógica de back-end, APIs, automação, scripts   |
| Ferramentas       | DOM, eventos, CSS                 | npm, Express, banco de dados, CLI              |

---

## 🧠 Mapa Mental Conceitual – Como o JavaScript Funciona

```
JavaScript
│
├── É baseado no ECMAScript
│   ├── ES5
│   ├── ES6 (ES2015)
│   └── ES7+ (async/await, melhorias)
│
├── Interpretação e Execução
│   ├── Interpretado originalmente
│   ├── Hoje: Compilado JIT com V8
│   └── Executado em tempo real
│
├── Ambientes
│   ├── Navegador
│   │   ├── UI/DOM
│   │   └── window, document
│   └── Node.js
│       ├── V8 + APIs de sistema
│       ├── npm
│       └── global, process
```

---

## 🎯 Objetivos de Aprendizagem

* Entender o papel do ECMAScript como padrão
* Diferenciar **JavaScript como linguagem** da **forma como ele é executado**
* Saber o que é **JIT compilation**
* Compreender a função do **Node.js**
* Saber distinguir **JavaScript client-side** de **JavaScript server-side**

# Aula 14 - Operadores Lógicos e Aritméticos

## ✅ **Parte 1: Conceito – Operadores Aritméticos e Lógicos em JavaScript**

### 🧮 **Operadores Aritméticos**

Servem para realizar **operações matemáticas básicas**:

| Operador | Nome                      | Exemplo  | Resultado   |
| -------- | ------------------------- | -------- | ----------- |
| `+`      | Adição                    | `5 + 3`  | `8`         |
| `-`      | Subtração                 | `5 - 3`  | `2`         |
| `*`      | Multiplicação             | `5 * 3`  | `15`        |
| `/`      | Divisão                   | `10 / 2` | `5`         |
| `%`      | Módulo (resto da divisão) | `10 % 3` | `1`         |
| `**`     | Exponenciação             | `2 ** 3` | `8`         |
| `++`     | Incremento                | `a++`    | `a = a + 1` |
| `--`     | Decremento                | `a--`    | `a = a - 1` |

---

### 🤔 **Operadores Lógicos**

Permitem **avaliar condições booleanas (true/false)**:

| Operador | Nome      | Exemplo         | Resultado |       |   |        |        |
| -------- | --------- | --------------- | --------- | ----- | - | ------ | ------ |
| `&&`     | E (AND)   | `true && false` | `false`   |       |   |        |        |
| `        |           | `               | OU (OR)   | `true |   | false` | `true` |
| `!`      | NÃO (NOT) | `!true`         | `false`   |       |   |        |        |

---

## 💻 **Parte 2: Exemplos de Código em JavaScript**

### 🔢 **Exemplos com Operadores Aritméticos**

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

a++; // a = 11
b--; // b = 2
```

---

### 🧠 **Exemplos com Operadores Lógicos**

```javascript
let isOnline = true;
let hasAccess = false;

console.log(isOnline && hasAccess); // false
console.log(isOnline || hasAccess); // true
console.log(!isOnline);             // false
```

---

### 🧪 **Exemplo combinando ambos:**

```javascript
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
```

---

## 🧠 **Mapa Mental Conceitual**

```
Operadores em JavaScript
│
├── Aritméticos
│   ├── Soma (+)
│   ├── Subtração (-)
│   ├── Multiplicação (*)
│   ├── Divisão (/)
│   ├── Módulo (%)
│   ├── Exponenciação (**)
│   ├── Incremento (++)
│   └── Decremento (--)
│
└── Lógicos
    ├── E (&&)
    ├── OU (||)
    └── NÃO (!)
```

---

## 📌 **Atividade Prática para Aula**

### 👨‍🏫 Nível Iniciante:

```javascript
let num1 = 7;
let num2 = 5;

let soma = num1 + num2;
let resultado = (soma > 10) && (num1 % 2 === 1);

console.log("Resultado final:", resultado);
```

**Pergunta para alunos**:

> O que será impresso? Explique por que.

---

### 👨‍💻 Nível Intermediário:

Crie uma função chamada `podeEntrarNaFesta` que receba três parâmetros: `idade`, `temConvite` e `nomeNaLista`. Ela deve retornar `true` somente se:

* A idade for maior ou igual a 18 **E**
* A pessoa **tiver convite OU estiver na lista**

```javascript
function podeEntrarNaFesta(idade, temConvite, nomeNaLista) {
  return idade >= 18 && (temConvite || nomeNaLista);
}

console.log(podeEntrarNaFesta(20, true, false));  // true
console.log(podeEntrarNaFesta(17, true, true));   // false
```

---

## 🎯 **Objetivos de Aprendizagem**

* Entender o funcionamento dos operadores lógicos e aritméticos
* Saber aplicá-los em decisões e estruturas condicionais
* Compreender diferenças entre AND/OR/NOT
* Praticar lógica computacional
# Aula 15 - Constantes e Variáveis

## ✅ Parte 1: Conceito – Constantes e Variáveis em JavaScript

### 🧠 O que são variáveis?

* **Variáveis** são "caixinhas de memória" onde você guarda valores para usar e manipular depois.
* Em JavaScript, usamos **`let`** e **`var`** para declarar variáveis.
* Desde o ES6, **`let`** é preferido no lugar de `var`.

---

### 🔐 O que são constantes?

* **Constantes** são valores que **não podem ser reatribuídos** depois de declarados.
* Declaradas com **`const`**.
* Não significa valor imutável (ex: objetos podem ser modificados), mas sim que **a referência não muda**.

---

### 🧾 Diferença entre `var`, `let` e `const`

| Palavra-chave | Escopo de Bloco      | Pode Reatribuir | Pode Redefinir | Boa prática |
| ------------- | -------------------- | --------------- | -------------- | ----------- |
| `var`         | ❌ (escopo de função) | ✅               | ✅              | 🚫 Evitar   |
| `let`         | ✅ (escopo de bloco)  | ✅               | ✅              | 👍 Sim      |
| `const`       | ✅ (escopo de bloco)  | ❌               | ❌              | 👍 Sim      |

---

### ⚠️ Observações importantes

* `let` e `const` **respeitam escopo de bloco `{}`**
* `var` **vaza escopo**, podendo causar bugs difíceis de rastrear
* **Boas práticas modernas**: use `const` por padrão e `let` quando precisar reatribuir

---

## 💻 Parte 2: Exemplos de Código em JavaScript

### 🔢 Declarando variáveis com `let`

```javascript
let nome = "Maria";
nome = "João"; // permitido
console.log(nome); // João
```

---

### 🔒 Declarando constantes com `const`

```javascript
const PI = 3.14159;
// PI = 3.14; // ❌ erro: não pode reatribuir
console.log(PI);
```

---

### 📦 Constantes com objetos

```javascript
const pessoa = { nome: "Ana", idade: 25 };
pessoa.nome = "Beatriz"; // permitido
console.log(pessoa); // { nome: "Beatriz", idade: 25 }
```

---

### ⚠️ Diferença de escopo entre `var` e `let`

```javascript
if (true) {
  var cor = "azul";
  let cor2 = "vermelha";
}
console.log(cor);  // azul
// console.log(cor2); // ❌ erro: cor2 não está no escopo
```

---

## 🧠 Mapa Mental – Constantes e Variáveis

```
Declaração de Dados em JavaScript
│
├── var
│   ├── Escopo de função
│   ├── Pode reatribuir
│   └── Evitar em código moderno
│
├── let
│   ├── Escopo de bloco
│   ├── Pode reatribuir
│   └── Uso comum para variáveis mutáveis
│
└── const
    ├── Escopo de bloco
    ├── NÃO pode reatribuir
    └── Boa prática para valores fixos
```

---

## 📌 Atividade prática

### 👨‍🏫 Exercício 1 – Variáveis e Constantes

```javascript
const nome = "Carlos";
let idade = 30;

idade = idade + 1;
console.log(nome + " tem " + idade + " anos.");
```

**Pergunta:**

> O que acontece se tentarmos fazer `nome = "João"`? Por quê?

---

### 👨‍💻 Exercício 2 – Escopo

```javascript
function testeEscopo() {
  if (true) {
    var x = 10;
    let y = 20;
  }
  console.log(x); // ?
  console.log(y); // ?
}
testeEscopo();
```

**Discussão:**

> Qual variável dá erro e por quê?

---

## 🎯 Objetivos de Aprendizagem

* Entender o que são variáveis e constantes
* Saber quando usar `let` ou `const`
* Identificar diferenças de escopo entre `var`, `let` e `const`
* Escrever código mais seguro e moderno com boas práticas

---
# Aula 16 - Funções

## ✅ Parte 1: Conceito – Funções em JavaScript

### 📌 O que são funções?

* **Funções** são blocos de código reutilizáveis que executam uma tarefa específica.
* Servem para:

  * Evitar repetição
  * Organizar o código
  * Modularizar a lógica

---

### 🧠 Tipos de funções em JavaScript:

| Tipo                      | Sintaxe                                        | Comentário                                         |
| ------------------------- | ---------------------------------------------- | -------------------------------------------------- |
| **Declarativa**           | `function soma(a, b) { return a + b }`         | Pode ser chamada antes de ser declarada (hoisting) |
| **Expressão (anônima)**   | `const soma = function(a, b) { return a + b }` | Armazenada em variável, sem hoisting               |
| **Arrow Function (ES6+)** | `const soma = (a, b) => a + b`                 | Sintaxe curta, não tem `this` próprio              |

---

### ⚠️ Palavras-chave importantes

* `return`: devolve um valor
* `parameters`: variáveis que a função recebe
* `arguments`: valores reais passados à função

---

## 💻 Parte 2: Exemplos de Código

### 📎 Função Declarativa

```javascript
function cumprimentar(nome) {
  return "Olá, " + nome + "!";
}

console.log(cumprimentar("Ana")); // Olá, Ana!
```

---

### 📎 Função como Expressão

```javascript
const quadrado = function(x) {
  return x * x;
};

console.log(quadrado(5)); // 25
```

---

### 📎 Arrow Function

```javascript
const dobro = (x) => x * 2;

console.log(dobro(10)); // 20
```

---

### 📎 Função sem retorno

```javascript
function mostrarMensagem() {
  console.log("Bem-vindo ao curso de JavaScript!");
}

mostrarMensagem(); // Bem-vindo ao curso de JavaScript!
```

---

### 📎 Função com valores padrão

```javascript
function saudar(nome = "visitante") {
  return `Olá, ${nome}`;
}

console.log(saudar()); // Olá, visitante
```

---

### 📎 Funções aninhadas (funções dentro de funções)

```javascript
function calcularPrecoFinal(preco, desconto) {
  function aplicarDesconto(valor, taxa) {
    return valor - (valor * taxa);
  }

  return aplicarDesconto(preco, desconto);
}

console.log(calcularPrecoFinal(100, 0.2)); // 80
```

---

## 🧠 Mapa Mental – Funções em JavaScript

```
Funções em JavaScript
│
├── Tipos
│   ├── Declarativas
│   ├── Expressões (function anônima)
│   └── Arrow Functions
│
├── Componentes
│   ├── Parâmetros
│   ├── Argumentos
│   └── return
│
└── Características
    ├── Reutilizáveis
    ├── Organizam o código
    └── Podem ser aninhadas
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Criar função de cálculo

```javascript
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}

console.log(calcularMedia(8, 6)); // 7
```

**Pergunta**: O que acontece se você passar apenas um argumento?

---

### 🧠 Exercício 2 – Converter para arrow function

```javascript
// Converter:
const mensagem = function(nome) {
  return "Olá, " + nome;
};
```

**Resposta esperada:**

```javascript
const mensagem = (nome) => "Olá, " + nome;
```

---

### 🧪 Desafio:

Crie uma função chamada `calcularDesconto` que recebe o valor de um produto e uma porcentagem de desconto, e retorna o valor final com desconto aplicado.

---

## 🎯 Objetivos da Aula

* Compreender o que são funções e por que usá-las
* Saber declarar funções nos principais formatos (`function`, `const`, `=>`)
* Entender o uso de parâmetros, argumentos e `return`
* Aplicar funções em problemas reais e organizados

---
# Aula 17 - Condicionais

## ✅ Parte 1: Conceito – Condicionais em JavaScript

### 🧠 O que são estruturas condicionais?

* Condicionais são usadas para **executar blocos de código diferentes dependendo de uma condição ser verdadeira ou falsa**.
* Avaliam **expressões booleanas** (true/false).

---

### 🧩 Principais estruturas condicionais:

| Estrutura         | Uso principal                                            |
| ----------------- | -------------------------------------------------------- |
| `if`              | Executa código **se** condição for verdadeira            |
| `else`            | Executa código **caso contrário**                        |
| `else if`         | Testa **múltiplas condições**                            |
| `switch`          | Substituto para múltiplos `if/else if` com valores fixos |
| Operador ternário | Versão compacta de `if/else`                             |

---

## 💻 Parte 2: Exemplos de Código

### 🔹 `if`, `else if` e `else`

```javascript
let idade = 18;

if (idade < 18) {
  console.log("Menor de idade");
} else if (idade === 18) {
  console.log("Tem exatamente 18 anos");
} else {
  console.log("Maior de idade");
}
```

---

### 🔹 `switch`

```javascript
let dia = "segunda";

switch (dia) {
  case "segunda":
    console.log("Começo da semana");
    break;
  case "sexta":
    console.log("Quase fim de semana!");
    break;
  default:
    console.log("Outro dia");
}
```

---

### 🔹 Operador ternário

```javascript
let estaLogado = true;

let mensagem = estaLogado ? "Bem-vindo!" : "Faça login primeiro";
console.log(mensagem);
```

---

### 🔹 Exemplo com comparação lógica

```javascript
let idade = 25;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
```

---

## 🧠 Mapa Mental – Condicionais em JavaScript

```
Condicionais em JavaScript
│
├── if / else if / else
│   ├── Avalia condições booleanas
│   └── Fluxo de decisão
│
├── switch
│   ├── Substitui múltiplos if
│   └── Usa break/default
│
└── Operador Ternário
    ├── Sintaxe curta: cond ? valor1 : valor2
    └── Ideal para decisões simples
```

---

## 📌 Atividades e Exercícios

### 🧪 Exercício 1 – Básico com `if`

```javascript
let nota = 7;

if (nota >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

**Desafio**: Adicione uma verificação para "Recuperação" se a nota for entre 4 e 5.9.

---

### 🧪 Exercício 2 – Usando `switch`

```javascript
let opcao = 2;

switch (opcao) {
  case 1:
    console.log("Novo Jogo");
    break;
  case 2:
    console.log("Carregar Jogo");
    break;
  default:
    console.log("Opção inválida");
}
```

**Desafio**: Adicione a opção 3 para "Sair".

---

### 🧠 Exercício 3 – Com ternário

```javascript
let idade = 17;
let podeVotar = idade >= 16 ? "Pode votar" : "Não pode votar";

console.log(podeVotar);
```

---

## 🎯 Objetivos da Aula

* Entender o papel das **condições** na lógica de programação
* Saber quando usar `if`, `else if`, `else` e `switch`
* Aplicar **comparações** e **valores booleanos**
* Utilizar o **operador ternário** para decisões simples
* Criar programas com **fluxo condicional claro e legível**

---
# Aula 18 - Strings

## ✅ Parte 1: Conceito – Strings em JavaScript

### 🧠 O que são Strings?

* **Strings** são **sequências de caracteres** usadas para representar **textos**.
* Sempre escritas entre **aspas simples (`'`)**, **duplas (`"`)** ou **crase (``)**.

```javascript
let nome1 = 'Maria';
let nome2 = "João";
let nome3 = `Pedro`;
```

---

### 🔤 Características das Strings

* Strings são **imutáveis** (não mudam diretamente, só criando nova string)
* Podem ser manipuladas com **métodos** e **propriedades**
* Com crase (``) você pode usar **template literals** e **interpolação de variáveis**

```javascript
let nome = "Carlos";
console.log(`Olá, ${nome}!`); // Template literal
```

---

### 📐 Tamanho da string

```javascript
let texto = "JavaScript";
console.log(texto.length); // 10
```

---

## 💻 Parte 2: Exemplos de Código e Métodos Comuns

### 🔠 Métodos para trabalhar com strings

| Método               | Exemplo                     | Resultado                |
| -------------------- | --------------------------- | ------------------------ |
| `.length`            | `"abc".length`              | `3`                      |
| `.toUpperCase()`     | `"abc".toUpperCase()`       | `"ABC"`                  |
| `.toLowerCase()`     | `"ABC".toLowerCase()`       | `"abc"`                  |
| `.includes("x")`     | `"texto".includes("x")`     | `true`                   |
| `.startsWith("A")`   | `"Ana".startsWith("A")`     | `true`                   |
| `.endsWith("z")`     | `"quiz".endsWith("z")`      | `true`                   |
| `.indexOf("a")`      | `"banana".indexOf("a")`     | `1`                      |
| `.slice(0, 4)`       | `"Javascript".slice(0, 4)`  | `"Java"`                 |
| `.replace("a", "o")` | `"pato".replace("a", "o")`  | `"poto"`                 |
| `.trim()`            | `"  texto  ".trim()`        | `"texto"`                |
| `.split(" ")`        | `"um dois três".split(" ")` | `["um", "dois", "três"]` |
| `.concat("texto")`   | `"Olá ".concat("Mundo")`    | `"Olá Mundo"`            |

---

### 🔄 Exemplo completo:

```javascript
let frase = "  JavaScript é incrível!  ";

console.log(frase.length);              // 26
console.log(frase.trim());              // "JavaScript é incrível!"
console.log(frase.toUpperCase());       // "  JAVASCRIPT É INCRÍVEL!  "
console.log(frase.includes("incrível")); // true
console.log(frase.slice(2, 12));        // "JavaScript"
```

---

## 🧠 Mapa Mental – Strings em JavaScript

```
Strings em JavaScript
│
├── Declaração
│   ├── '' simples
│   ├── "" duplas
│   └── `` crase (template literal)
│
├── Propriedades
│   └── .length
│
├── Métodos
│   ├── .toUpperCase()
│   ├── .toLowerCase()
│   ├── .trim()
│   ├── .includes()
│   ├── .slice()
│   ├── .replace()
│   ├── .split()
│   └── .concat()
│
└── Interpolação
    └── `Olá, ${nome}`
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Manipular frase

```javascript
let frase = " Eu amo Programar em JavaScript ";

console.log(frase.trim());
console.log(frase.toUpperCase());
console.log(frase.includes("Programar"));
```

---

### 🔤 Exercício 2 – Criar frase formatada

```javascript
let nome = "Lucas";
let linguagem = "JavaScript";

let mensagem = `Olá, meu nome é ${nome} e estou aprendendo ${linguagem}.`;
console.log(mensagem);
```

---

### 🧪 Desafio:

Crie uma função `formatarTexto` que receba um texto e devolva:

* O texto em letras maiúsculas
* Com espaços removidos nas bordas
* Com o número de caracteres originais

```javascript
function formatarTexto(texto) {
  let originalLength = texto.length;
  let formatado = texto.trim().toUpperCase();

  return `${formatado} (${originalLength} caracteres)`;
}

console.log(formatarTexto("  aprenda JavaScript agora "));
```

---

## 🎯 Objetivos da Aula

* Entender o conceito e estrutura de **strings**
* Usar propriedades e métodos para **manipulação de texto**
* Trabalhar com **template literals** e **interpolação**
* Criar programas que formatam, analisam e transformam strings

---

# Aula 19 - Arrays


## ✅ Parte 1: Conceito – Arrays em JavaScript

### 🧠 O que são arrays?

* Arrays são **listas ordenadas** que armazenam **múltiplos valores em uma única variável**.
* Cada valor em um array é chamado de **elemento** e tem uma **posição (índice)**, que começa em **0**.

```javascript
let frutas = ["maçã", "banana", "laranja"];
```

---

### 🔤 Características dos arrays:

* Podem armazenar **valores de qualquer tipo** (string, number, boolean, objetos, até funções)
* Têm **métodos e propriedades** para facilitar manipulações
* Permitem percorrer os elementos com **loops**

---

## 💻 Parte 2: Exemplos de Código e Métodos Comuns

### 📦 Criando um array

```javascript
let numeros = [1, 2, 3, 4, 5];
let misto = ["texto", true, 42, null];
```

---

### 📏 Propriedade `.length`

```javascript
console.log(numeros.length); // 5
```

---

### 📥 Acessando elementos

```javascript
console.log(numeros[0]); // 1
console.log(numeros[2]); // 3
```

---

### ✏️ Modificando valores

```javascript
numeros[1] = 10;
console.log(numeros); // [1, 10, 3, 4, 5]
```

---

### 🔧 Métodos úteis

| Método       | O que faz                            | Exemplo                     |
| ------------ | ------------------------------------ | --------------------------- |
| `push()`     | Adiciona ao final                    | `frutas.push("uva")`        |
| `pop()`      | Remove o último                      | `frutas.pop()`              |
| `unshift()`  | Adiciona no início                   | `frutas.unshift("kiwi")`    |
| `shift()`    | Remove o primeiro                    | `frutas.shift()`            |
| `includes()` | Verifica se valor existe             | `frutas.includes("banana")` |
| `indexOf()`  | Retorna posição de valor             | `frutas.indexOf("banana")`  |
| `splice()`   | Remove ou substitui elementos        | `frutas.splice(1, 1)`       |
| `slice()`    | Retorna uma parte do array           | `frutas.slice(0, 2)`        |
| `join()`     | Concatena os elementos em uma string | `frutas.join(", ")`         |
| `reverse()`  | Inverte a ordem do array             | `numeros.reverse()`         |
| `sort()`     | Ordena o array                       | `numeros.sort()`            |

---

### 🔁 Percorrendo arrays

#### Com `for`

```javascript
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

#### Com `forEach`

```javascript
frutas.forEach(function(fruta) {
  console.log("Fruta: " + fruta);
});
```

---

## 🧠 Mapa Mental – Arrays em JavaScript

```
Arrays em JavaScript
│
├── Criação
│   ├── let arr = [1, 2, 3]
│   └── Tipos mistos permitidos
│
├── Acesso
│   ├── arr[0], arr[1]
│   └── arr.length
│
├── Métodos
│   ├── push(), pop(), shift(), unshift()
│   ├── splice(), slice()
│   ├── includes(), indexOf()
│   └── sort(), reverse(), join()
│
└── Iteração
    ├── for
    ├── forEach
    └── map, filter, reduce (avançado)
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Array de nomes

```javascript
let nomes = ["Ana", "Carlos", "Beatriz"];

nomes.push("Lucas");
nomes[1] = "Pedro";
console.log(nomes.length); // Quantos nomes há?
console.log(nomes.includes("Beatriz")); // true
```

---

### 🔢 Exercício 2 – Soma de números

```javascript
let numeros = [10, 20, 30];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log("Soma total:", soma);
```

---

### 🧪 Desafio – Manipulação com métodos

```javascript
let tarefas = ["acordar", "escovar os dentes", "estudar"];

tarefas.push("almoçar");
tarefas.shift();
tarefas.splice(1, 0, "café da manhã");

console.log(tarefas.join(" → "));
```

---

## 🎯 Objetivos da Aula

* Entender o que são arrays e sua estrutura
* Saber criar, acessar e modificar elementos
* Utilizar os principais métodos de manipulação
* Aplicar arrays em laços de repetição (for, forEach)

---
# Aula 20 - Objetos

## ✅ Parte 1: Conceito – Objetos em JavaScript

### 🧠 O que são Objetos?

* Objetos são **estruturas que armazenam dados em pares `chave: valor`**.
* Servem para representar **entidades do mundo real**: uma pessoa, um carro, um produto etc.
* Diferente dos arrays (que são listas ordenadas), objetos são usados para **representar características com significado**.

---

### 🧾 Sintaxe básica

```javascript
let pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Engenheira"
};
```

* `nome`, `idade`, `profissao` são **propriedades**
* `"Ana"`, `25`, `"Engenheira"` são os **valores**

---

### 🛠 Como acessar valores

| Forma               | Exemplo                  |
| ------------------- | ------------------------ |
| Notação de ponto    | `pessoa.nome` → `"Ana"`  |
| Notação de colchete | `pessoa["idade"]` → `25` |

---

### 🧮 Objetos aninhados

* Um objeto pode conter **outros objetos ou arrays**

```javascript
let aluno = {
  nome: "Carlos",
  notas: [8, 7, 10],
  endereco: {
    rua: "Rua A",
    numero: 123
  }
};
```

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Acessando e modificando propriedades

```javascript
let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

console.log(carro.marca); // Toyota

carro.ano = 2022; // Alterando valor
carro.cor = "preto"; // Adicionando nova propriedade

console.log(carro);
```

---

### 🔹 Deletando propriedades

```javascript
delete carro.modelo;
console.log(carro);
```

---

### 🔹 Funções dentro de objetos (métodos)

```javascript
let usuario = {
  nome: "Lucas",
  saudacao: function() {
    return "Olá, " + this.nome;
  }
};

console.log(usuario.saudacao()); // Olá, Lucas
```

---

### 🔹 Iterando propriedades com `for...in`

```javascript
for (let chave in usuario) {
  console.log(chave + ": " + usuario[chave]);
}
```

---

## 🧠 Mapa Mental – Objetos em JavaScript

```
Objetos em JavaScript
│
├── Estrutura
│   ├── Chave: Valor
│   └── let obj = { nome: "Ana" }
│
├── Acesso
│   ├── obj.nome
│   └── obj["nome"]
│
├── Operações
│   ├── Adicionar/Modificar: obj.idade = 30
│   ├── Remover: delete obj.nome
│   └── Verificar: "nome" in obj
│
└── Recursos Avançados
    ├── Métodos (funções em objetos)
    ├── Objetos aninhados
    └── Iteração com for...in
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Criar um objeto

```javascript
let livro = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949
};

console.log(`${livro.titulo} foi escrito por ${livro.autor}`);
```

---

### 🔄 Exercício 2 – Adicionar e modificar

```javascript
livro.genero = "Ficção Científica";
livro.ano = 1950;

console.log(livro);
```

---

### 🧠 Exercício 3 – Objeto com métodos

```javascript
let calculadora = {
  somar: function(a, b) {
    return a + b;
  },
  subtrair: function(a, b) {
    return a - b;
  }
};

console.log(calculadora.somar(10, 5)); // 15
```

---

### 🧪 Desafio:

Crie um objeto chamado `aluno` que tenha:

* nome
* array de notas
* método `media()` que retorna a média das notas

```javascript
let aluno = {
  nome: "Fernanda",
  notas: [8, 9, 7],
  media: function() {
    let total = 0;
    for (let nota of this.notas) {
      total += nota;
    }
    return total / this.notas.length;
  }
};

console.log(aluno.media()); // 8
```

---

## 🎯 Objetivos da Aula

* Compreender o conceito de objetos e sua utilidade
* Criar e manipular objetos com propriedades e métodos
* Acessar, modificar e deletar valores dinamicamente
* Trabalhar com estruturas mais complexas como objetos aninhados
* Utilizar métodos para encapsular comportamentos em objetos

---
# Aula 21 - Null x undefined

## ✅ Parte 1: Conceito – `null` e `undefined` em JavaScript

### 🧠 O que é `undefined`?

* Valor **padrão atribuído automaticamente** a uma variável **declarada, mas não inicializada**.
* Também retornado quando:

  * Uma função **não retorna valor**
  * Você tenta acessar uma propriedade **inexistente**

```javascript
let x;
console.log(x); // undefined
```

---

### 🧠 O que é `null`?

* Representa a **ausência intencional de valor**.
* É um valor que você **define manualmente** para indicar que algo está **vazio, mas conhecido**.

```javascript
let y = null;
console.log(y); // null
```

---

### 🧪 Comparação entre `null` e `undefined`

| Característica   | `undefined`                              | `null`                                     |
| ---------------- | ---------------------------------------- | ------------------------------------------ |
| Definido pelo... | JavaScript                               | Desenvolvedor                              |
| Significado      | "Ainda não tem valor"                    | "Não existe, valor intencionalmente vazio" |
| Tipo (typeof)    | `"undefined"`                            | `"object"` (peculiaridade da linguagem)    |
| Usado quando...  | Variável sem valor / função sem `return` | Valor deliberadamente vazio                |

---

### 🧮 Diferença no uso prático

```javascript
let idade;
let nome = null;

console.log(idade); // undefined → sistema ainda não atribuiu
console.log(nome);  // null → valor foi zerado manualmente
```

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Variável não inicializada

```javascript
let produto;
console.log(produto); // undefined
```

---

### 🔹 Acessando propriedade inexistente

```javascript
let carro = { marca: "Toyota" };
console.log(carro.modelo); // undefined
```

---

### 🔹 Função sem retorno

```javascript
function mostrar() {
  console.log("Olá");
}

let resultado = mostrar(); // undefined
console.log(resultado);    // undefined
```

---

### 🔹 Atribuindo `null`

```javascript
let usuario = {
  nome: "Carlos",
  idade: null // valor intencionalmente "vazio"
};

console.log(usuario.idade); // null
```

---

### 🔹 typeof e comparação

```javascript
let a;
let b = null;

console.log(typeof a); // "undefined"
console.log(typeof b); // "object" (comportamento histórico de JS)

console.log(a == b);  // true  → igualdade frouxa (conversão implícita)
console.log(a === b); // false → igualdade estrita (tipo diferente)
```

---

## 🧠 Mapa Mental – `null` vs `undefined`

```
Valores Vazios em JavaScript
│
├── undefined
│   ├── Valor padrão de variáveis não inicializadas
│   ├── Funções sem retorno
│   └── Propriedades inexistentes
│
├── null
│   ├── Atribuído manualmente
│   └── Representa "vazio intencional"
│
└── Comparação
    ├── typeof null → "object"
    ├── typeof undefined → "undefined"
    ├── null == undefined → true
    └── null === undefined → false
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Analisando valores

```javascript
let nome;
let idade = null;

console.log(nome);       // ?
console.log(typeof idade); // ?
```

**Pergunta**: Qual a diferença entre os dois valores? Por que `typeof null` é `"object"`?

---

### 🧠 Exercício 2 – Função sem retorno

```javascript
function saudacao(nome) {
  console.log("Olá " + nome);
}

let resultado = saudacao("Ana");
console.log("Retorno:", resultado);
```

**Desafio**: Por que `resultado` é `undefined`?

---

### 🧪 Desafio – Verificação de preenchimento

```javascript
function verificarCadastro(usuario) {
  if (usuario.email === null || usuario.email === undefined) {
    console.log("Email não preenchido.");
  } else {
    console.log("Email cadastrado:", usuario.email);
  }
}

verificarCadastro({ email: null });
verificarCadastro({ email: "teste@email.com" });
```

---

## 🎯 Objetivos da Aula

* Compreender o que são e para que servem os valores `null` e `undefined`
* Diferenciar seus significados e usos práticos
* Evitar erros comuns ao trabalhar com valores ausentes
* Saber como fazer verificações seguras e boas práticas com valores nulos

---
# Aula 22 - Closures

## ✅ Parte 1: Conceito – Closures em JavaScript

### 🧠 O que é uma Closure?

> Uma **closure** ocorre quando uma **função interna "lembra" o escopo da função externa mesmo após esta já ter sido executada**.

### 📚 Em outras palavras:

* Uma função **"fecha" sobre o ambiente léxico onde foi criada**
* Isso permite **acessar variáveis externas mesmo depois do contexto externo ter encerrado**

---

### 📦 Conceitos-chave:

| Termo                     | Significado                                                       |
| ------------------------- | ----------------------------------------------------------------- |
| **Escopo Léxico**         | Variáveis são acessadas conforme o **local onde foram definidas** |
| **Função Interna**        | Tem acesso às variáveis da função "pai"                           |
| **Preservação de Estado** | Variáveis internas são "lembradas" pela closure                   |

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Função retornando outra função (closure)

```javascript
function saudacao(nome) {
  return function() {
    console.log("Olá, " + nome);
  }
}

let cumprimentar = saudacao("Ana");
cumprimentar(); // "Olá, Ana"
```

📌 Aqui, a função interna **lembra** o valor de `nome`, mesmo depois que `saudacao()` foi executada.

---

### 🔹 Contador com closure

```javascript
function criarContador() {
  let count = 0;
  
  return function() {
    count++;
    console.log("Contador: " + count);
  }
}

const contador1 = criarContador();
contador1(); // Contador: 1
contador1(); // Contador: 2

const contador2 = criarContador();
contador2(); // Contador: 1
```

📌 Cada closure mantém **sua própria instância de `count`**.

---

### 🔹 Closure para encapsular estado (padrão de privacidade)

```javascript
function criarSegredo() {
  let segredo = "sou uma closure!";
  
  return {
    mostrar: function() {
      console.log(segredo);
    },
    alterar: function(novo) {
      segredo = novo;
    }
  };
}

let x = criarSegredo();
x.mostrar(); // "sou uma closure!"
x.alterar("novo segredo");
x.mostrar(); // "novo segredo"
```

📌 `segredo` está **protegido e acessível apenas pela closure**.

---

## 🧠 Mapa Mental – Closures em JavaScript

```
Closures em JavaScript
│
├── Conceito
│   └── Função interna acessa escopo da externa
│
├── Fundamentos
│   ├── Escopo léxico
│   ├── Retenção de variáveis
│   └── Função dentro de função
│
├── Casos de uso
│   ├── Contadores
│   ├── Encapsulamento
│   └── Funções geradoras personalizadas
│
└── Benefícios
    ├── Modularização
    ├── Reutilização de lógica
    └── Privacidade de dados
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Crie uma closure simples

```javascript
function multiplicador(fator) {
  return function(numero) {
    return numero * fator;
  }
}

let dobra = multiplicador(2);
console.log(dobra(5)); // 10
console.log(dobra(10)); // 20
```

---

### 🔢 Exercício 2 – Criar contador independente

```javascript
function criarContador() {
  // sua lógica aqui
}

let c1 = criarContador();
c1(); // 1
c1(); // 2

let c2 = criarContador();
c2(); // 1
```

---

### 🧪 Desafio – Banco com saldo privado

Crie uma função `criarConta()` que retorna um objeto com métodos para:

* `depositar(valor)`
* `sacar(valor)`
* `saldo()` (não expõe o valor diretamente)

```javascript
function criarConta() {
  let saldo = 0;

  return {
    depositar: (valor) => saldo += valor,
    sacar: (valor) => saldo -= valor,
    saldo: () => saldo
  };
}

let minhaConta = criarConta();
minhaConta.depositar(100);
minhaConta.sacar(40);
console.log(minhaConta.saldo()); // 60
```

---

## 🎯 Objetivos da Aula

* Entender o conceito de **closure** e **escopo léxico**
* Criar funções que **mantêm estado interno**
* Usar closures para **encapsular lógica e proteger dados**
* Identificar situações reais onde closures são úteis (contadores, módulos, configurações)

---
# Aula 23 - Callbacks

## ✅ Parte 1: Conceito – Callbacks em JavaScript

### 🧠 O que é um Callback?

> **Callback** é uma **função passada como argumento** para outra função, que será **executada depois de algum tempo ou em determinado momento**.

---

### 🧩 Por que usar callbacks?

* Para **executar código depois de um processo assíncrono** (como requisições, tempo de espera, leitura de arquivos, etc.)
* Para permitir **customização de comportamento**
* São fundamentais na programação **orientada a eventos** e **assíncrona**

---

### 🔧 Sintaxe básica:

```javascript
function executar(callback) {
  console.log("Início");
  callback();
  console.log("Fim");
}

executar(function() {
  console.log("Executando o callback");
});
```

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Exemplo básico: função que recebe um callback

```javascript
function saudacao(nome, callback) {
  console.log("Olá, " + nome);
  callback();
}

saudacao("Maria", function() {
  console.log("Seja bem-vinda!");
});
```

---

### 🔹 Callback com `setTimeout` (assíncrono)

```javascript
console.log("Início");

setTimeout(function() {
  console.log("Executando após 2 segundos");
}, 2000);

console.log("Fim");
```

---

### 🔹 Funções reutilizáveis com callback

```javascript
function processar(valor, funcaoCallback) {
  let resultado = funcaoCallback(valor);
  console.log("Resultado:", resultado);
}

processar(5, function(n) {
  return n * 2;
});

processar("JavaScript", function(texto) {
  return texto.toUpperCase();
});
```

---

### 🔹 Callback com arrays: `forEach`, `map`, `filter`

```javascript
let numeros = [1, 2, 3, 4];

numeros.forEach(function(numero) {
  console.log("Número:", numero);
});

let dobrados = numeros.map(function(n) {
  return n * 2;
});

console.log(dobrados); // [2, 4, 6, 8]
```

---

## 🧠 Mapa Mental – Callbacks em JavaScript

```
Callbacks em JavaScript
│
├── Conceito
│   └── Função passada como argumento
│
├── Aplicações
│   ├── Assíncrono (setTimeout, AJAX)
│   ├── Reutilização
│   └── Eventos e respostas
│
├── Exemplos
│   ├── Função simples com callback
│   ├── setTimeout()
│   └── forEach(), map(), filter()
│
└── Vantagens
    ├── Código mais flexível
    ├── Modularização
    └── Base para Promises
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Callback simples

```javascript
function exibirMensagem(mensagem, callback) {
  console.log(mensagem);
  callback();
}

exibirMensagem("Iniciando...", function() {
  console.log("Callback executado!");
});
```

---

### ⏱️ Exercício 2 – Callback com `setTimeout`

```javascript
function esperarEExecutar(callback) {
  setTimeout(callback, 1000);
}

esperarEExecutar(function() {
  console.log("1 segundo depois...");
});
```

---

### 🧪 Desafio – Função personalizada com callback

Crie uma função `calcular` que recebe dois números e um callback. O callback define a operação (somar, multiplicar etc.).

```javascript
function calcular(a, b, operacao) {
  return operacao(a, b);
}

let soma = calcular(5, 3, function(x, y) {
  return x + y;
});

console.log(soma); // 8
```

---

## 🎯 Objetivos da Aula

* Entender o que são **callbacks** e sua importância em JavaScript
* Aprender a **passar funções como argumentos**
* Usar callbacks em **funções assíncronas e iterativas**
* Preparar a base para **Promises e async/await**
* Criar funções reutilizáveis com comportamento dinâmico

---
# Aula 24 - Arrow Function

## ✅ Parte 1: Conceito – Arrow Functions em JavaScript

### 🧠 O que são Arrow Functions?

> Arrow functions são uma **forma mais curta e moderna** de escrever funções em JavaScript, introduzidas no **ES6 (ECMAScript 2015)**.

---

### 🔤 Sintaxe básica:

```javascript
// Função tradicional
function soma(a, b) {
  return a + b;
}

// Arrow Function equivalente
const soma = (a, b) => {
  return a + b;
};
```

---

### ✏️ Regras da sintaxe:

| Situação                  | Sintaxe Arrow Function       |
| ------------------------- | ---------------------------- |
| 1 parâmetro               | `x => x * 2`                 |
| Sem parâmetros            | `() => console.log("oi")`    |
| Retorno direto (sem `{}`) | `a => a + 10`                |
| Com `{}` → usar `return`  | `(a, b) => { return a + b }` |
| Objetos → usar parênteses | `() => ({ nome: "Ana" })`    |

---

### ⚠️ Diferença importante: `this`

* Arrow functions **não têm seu próprio `this`** → herdam do **escopo léxico (externo)**
* Útil para métodos, callbacks e manipulação de contexto

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Exemplo básico

```javascript
const saudacao = nome => "Olá, " + nome;
console.log(saudacao("Carlos")); // Olá, Carlos
```

---

### 🔹 Com múltiplos parâmetros

```javascript
const somar = (a, b) => a + b;
console.log(somar(5, 3)); // 8
```

---

### 🔹 Sem parâmetros

```javascript
const mensagem = () => console.log("Bem-vindo!");
mensagem();
```

---

### 🔹 Com `return` explícito

```javascript
const multiplicar = (a, b) => {
  let resultado = a * b;
  return resultado;
};
console.log(multiplicar(2, 4)); // 8
```

---

### 🔹 Retornando objeto

```javascript
const criarPessoa = (nome, idade) => ({ nome, idade });
console.log(criarPessoa("Ana", 30)); // { nome: 'Ana', idade: 30 }
```

---

### 🔹 Diferença de `this`

```javascript
function Pessoa() {
  this.nome = "Maria";
  setTimeout(() => {
    console.log("Nome:", this.nome); // "Maria" → pega o escopo externo
  }, 1000);
}
new Pessoa();
```

---

## 🧠 Mapa Mental – Arrow Functions em JavaScript

```
Arrow Functions (ES6)
│
├── Sintaxe
│   ├── Parâmetros: (x) => x + 1
│   ├── Sem parênteses: x => x * 2
│   ├── Retorno direto: sem {}
│   └── Retorno explícito: usar return
│
├── Diferenças com função tradicional
│   └── Sem `this`, `arguments`, `super`
│
├── Casos de uso
│   ├── Callbacks (map, filter, etc)
│   ├── Funções curtas
│   └── Métodos sem contexto próprio
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Conversão para arrow

```javascript
// Converta para arrow:
function dobro(n) {
  return n * 2;
}
```

**Resposta esperada:**

```javascript
const dobro = n => n * 2;
```

---

### 🧠 Exercício 2 – Arrow com `map`

```javascript
let numeros = [1, 2, 3, 4];

let quadrados = numeros.map(n => n * n);
console.log(quadrados); // [1, 4, 9, 16]
```

---

### 🧪 Desafio – Arrow + objeto

```javascript
const criarLivro = (titulo, autor) => ({ titulo, autor });

console.log(criarLivro("1984", "George Orwell"));
// { titulo: "1984", autor: "George Orwell" }
```

---

## 🎯 Objetivos da Aula

* Entender o que são e como funcionam as **arrow functions**
* Aprender a usar sua **sintaxe simplificada**
* Compreender as diferenças de **escopo de `this`**
* Aplicar arrow functions em **map, filter, callbacks e funções utilitárias**

---

# Aula 25 - Prototype

## ✅ Parte 1: Conceito – Prototype e Classes em JavaScript

### 🧠 O que é Prototype?

> Em JavaScript, **todos os objetos têm uma propriedade interna chamada `[[Prototype]]`** (ou `__proto__`), que permite **herdar propriedades e métodos de outro objeto**.

* O JavaScript utiliza um modelo de **herança prototípica**, não baseado em classes como em Java ou C# (apesar de ter sintaxe de classes desde o ES6).
* Objetos herdam de outros objetos por meio da **cadeia de protótipos** (*prototype chain*).

```javascript
let animal = {
  falar() {
    console.log("Fazendo som...");
  }
};

let cachorro = Object.create(animal);
cachorro.falar(); // Fazendo som...
```

---

### 🧱 O que são Classes?

> **Classes** foram introduzidas no ES6 como uma **sintaxe mais clara e familiar** para criar objetos e trabalhar com herança, mas continuam funcionando com protótipos por trás dos panos.

* São **"açúcar sintático"** para facilitar a criação de **construtores, herança e métodos**.
* JavaScript continua sendo uma linguagem baseada em protótipos.

```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Olá, meu nome é ${this.nome}`);
  }
}
```

---

### 🔁 Diferenças principais:

| Aspecto             | Prototype                            | Class (ES6+)                     |
| ------------------- | ------------------------------------ | -------------------------------- |
| Modelo              | Manual, mais verboso                 | Sintaxe moderna e familiar       |
| Herança             | via `Object.create()` ou `prototype` | via `extends`                    |
| Instanciação        | Função construtora + `new`           | `class` + `constructor` + `new`  |
| Por baixo dos panos | Base do JS                           | Açúcar sintático sobre prototype |

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Exemplo com prototype manual

```javascript
function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.falar = function() {
  console.log("Olá, eu sou " + this.nome);
};

let p1 = new Pessoa("João");
p1.falar(); // Olá, eu sou João
```

---

### 🔹 Mesmo exemplo com classe

```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log("Olá, eu sou " + this.nome);
  }
}

const p2 = new Pessoa("Maria");
p2.falar(); // Olá, eu sou Maria
```

---

### 🔹 Herança com prototype

```javascript
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.som = function() {
  console.log(this.nome + " faz um som");
};

function Cachorro(nome) {
  Animal.call(this, nome);
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function() {
  console.log(this.nome + " está latindo");
};

let rex = new Cachorro("Rex");
rex.som();
rex.latir();
```

---

### 🔹 Herança com classe

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  som() {
    console.log(this.nome + " faz um som");
  }
}

class Cachorro extends Animal {
  latir() {
    console.log(this.nome + " está latindo");
  }
}

const dog = new Cachorro("Max");
dog.som();
dog.latir();
```

---

## 🧠 Mapa Mental – Prototype & Classes

```
Orientação a Objetos em JavaScript
│
├── Prototype
│   ├── Herança baseada em objetos
│   ├── this + função construtora
│   └── Object.create(), prototype chain
│
├── Classes (ES6+)
│   ├── class / constructor
│   ├── Métodos diretos
│   ├── extends / super
│   └── Açúcar sintático
│
└── Casos de uso
    ├── Modelos de dados
    ├── Componentes reutilizáveis
    └── Herança de comportamentos
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Criar objeto com prototype

```javascript
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(porcentagem) {
  return this.preco - (this.preco * (porcentagem / 100));
};

let celular = new Produto("Smartphone", 2000);
console.log(celular.desconto(10)); // 1800
```

---

### 🧠 Exercício 2 – Refatorar com classe

```javascript
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  desconto(porcentagem) {
    return this.preco - (this.preco * (porcentagem / 100));
  }
}

let notebook = new Produto("Notebook", 3000);
console.log(notebook.desconto(15)); // 2550
```

---

### 🧪 Desafio – Classe com herança

```javascript
class Veiculo {
  constructor(marca) {
    this.marca = marca;
  }

  ligar() {
    console.log(this.marca + " ligado");
  }
}

class Moto extends Veiculo {
  empinar() {
    console.log(this.marca + " está empinando!");
  }
}

const moto1 = new Moto("Yamaha");
moto1.ligar();
moto1.empinar();
```

---

## 🎯 Objetivos da Aula

* Compreender o modelo de **herança prototípica** do JavaScript
* Aprender a criar objetos com funções construtoras e `prototype`
* Dominar a sintaxe moderna de **classes e herança com `extends`**
* Saber quando e por que usar cada modelo
* Aplicar conceitos de **orientação a objetos na prática**

---
# Aula 26 - Data e Hora

## ✅ Parte 1: Conceito – Trabalhando com Data e Hora em JavaScript

### 🧠 O que é a classe `Date`?

> A classe **`Date`** é a forma nativa que o JavaScript oferece para **manipular datas e horas**.

Com `Date`, você pode:

* Criar e formatar datas
* Comparar datas
* Adicionar ou subtrair tempo
* Pegar o horário atual ou de um momento específico

---

### 🧩 Conceitos importantes

| Conceito                 | Exemplo                                |
| ------------------------ | -------------------------------------- |
| Objeto `Date`            | `new Date()`                           |
| Timestamps               | `Date.now()`                           |
| ISO 8601                 | `"2025-08-06T12:00:00Z"`               |
| Fuso horário (UTC/Local) | `toISOString()`, `getTimezoneOffset()` |

---

### 🗓️ Como criar uma data

```javascript
let agora = new Date();                      // Data e hora atual
let dataTexto = new Date("2023-12-01");      // A partir de string
let dataNumerica = new Date(2023, 11, 1);    // Ano, mês (0-11), dia
```

---

## 💻 Parte 2: Exemplos de Código com `Date`

### 📆 Criando e exibindo datas

```javascript
let hoje = new Date();
console.log(hoje.toString());         // Exibe data e hora atual
console.log(hoje.toDateString());     // Apenas a data
console.log(hoje.toTimeString());     // Apenas a hora
console.log(hoje.toISOString());      // Padrão internacional ISO 8601
```

---

### 📤 Extraindo partes da data

```javascript
let data = new Date();

console.log(data.getFullYear());      // Ano atual
console.log(data.getMonth());         // Mês (0-11)
console.log(data.getDate());          // Dia do mês
console.log(data.getDay());           // Dia da semana (0 = Domingo)
console.log(data.getHours());         // Hora
console.log(data.getMinutes());       // Minutos
console.log(data.getSeconds());       // Segundos
```

---

### 🧮 Operações com datas

```javascript
let agora = new Date();
let daquiUmaSemana = new Date();
daquiUmaSemana.setDate(agora.getDate() + 7);

console.log(agora);
console.log(daquiUmaSemana);
```

---

### 🕒 Comparando datas

```javascript
let data1 = new Date("2023-01-01");
let data2 = new Date("2023-12-31");

if (data1 < data2) {
  console.log("Data1 é anterior");
}
```

---

### 🧾 Timestamps e milissegundos

```javascript
let timestampAtual = Date.now(); // milissegundos desde 1970-01-01
console.log(timestampAtual);

let data = new Date(timestampAtual);
console.log(data.toString());
```

---

## 🧠 Mapa Mental – Date e Time em JavaScript

```
Date & Time em JavaScript
│
├── Criação de datas
│   ├── new Date()
│   ├── Date("YYYY-MM-DD")
│   └── Date(ano, mês, dia, ...)
│
├── Métodos de leitura
│   ├── getFullYear()
│   ├── getMonth()
│   ├── getDate(), getDay()
│   └── getHours(), getMinutes()
│
├── Formatação
│   ├── toString()
│   ├── toISOString()
│   ├── toLocaleString()
│   └── toDateString()
│
└── Operações
    ├── Comparações (<, >, ===)
    ├── Modificações (setDate, setMonth)
    └── Timestamp (Date.now())
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Mostrar data formatada

```javascript
let hoje = new Date();

console.log(`Hoje é ${hoje.getDate()}/${hoje.getMonth() + 1}/${hoje.getFullYear()}`);
```

---

### 🧪 Exercício 2 – Contagem regressiva

```javascript
let evento = new Date("2025-12-31");
let hoje = new Date();

let diferenca = evento - hoje; // diferença em ms
let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

console.log(`Faltam ${dias} dias para o evento.`);
```

---

### 🧠 Desafio – Classe personalizada de data

```javascript
class Agenda {
  constructor(nome, data) {
    this.nome = nome;
    this.data = new Date(data);
  }

  diasRestantes() {
    let hoje = new Date();
    let diff = this.data - hoje;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  exibir() {
    console.log(`${this.nome} acontecerá em ${this.diasRestantes()} dias.`);
  }
}

let reuniao = new Agenda("Reunião do Time", "2025-09-01");
reuniao.exibir();
```

---

## 🎯 Objetivos da Aula

* Entender o que é a classe `Date` e como ela funciona
* Saber criar, extrair e formatar informações de data e hora
* Aprender a manipular e comparar datas de forma segura
* Aplicar classes para encapsular lógica relacionada a datas
* Utilizar timestamps e trabalhar com contagens e agendamentos

---
# Aula 27 - Erros

## ✅ Parte 1: Conceito – Erros em JavaScript

### 🧠 O que é um erro?

> Um **erro** é qualquer interrupção inesperada que impede o código de continuar sua execução corretamente.

Erros podem acontecer por diversos motivos:

* Variável inexistente
* Operações inválidas
* Entrada de dados incorreta
* Problemas de rede
* Erros de lógica

---

### 🔍 Tipos comuns de erro em JS

| Tipo               | Exemplo                                     |
| ------------------ | ------------------------------------------- |
| **SyntaxError**    | Erro de sintaxe (ex: esquecer uma `{`)      |
| **ReferenceError** | Variável não definida (`x is not defined`)  |
| **TypeError**      | Operação inválida com tipo (ex: `null.foo`) |
| **RangeError**     | Ex: loop infinito com `new Array(-1)`       |
| **URIError**       | Erro em funções como `decodeURI()`          |
| **EvalError**      | Erro no uso de `eval()` (raramente usado)   |

---

### 🧯 Como tratar erros: `try...catch`

```javascript
try {
  // código que pode gerar erro
} catch (erro) {
  // tratamento do erro
}
```

* O código dentro do `catch` **só é executado se houver erro**
* O bloco `finally` (opcional) é executado **sempre**, com ou sem erro

---

### 📦 Criando erros personalizados com `throw`

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não permitida");
  }
  return a / b;
}
```

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Try...catch básico

```javascript
try {
  let resultado = naoExiste + 2; // ReferenceError
} catch (erro) {
  console.log("Ocorreu um erro:", erro.message);
}
```

---

### 🔹 Try...catch com finally

```javascript
try {
  console.log("Tentando executar...");
  let x = JSON.parse("texto inválido");
} catch (erro) {
  console.log("Erro ao analisar JSON:", erro.message);
} finally {
  console.log("Fim do processo.");
}
```

---

### 🔹 Throw personalizado

```javascript
function validarIdade(idade) {
  if (idade < 0) {
    throw new Error("Idade inválida");
  }
  return true;
}

try {
  validarIdade(-5);
} catch (e) {
  console.log("Erro:", e.message);
}
```

---

### 🔹 Exemplo com função assíncrona

```javascript
async function buscarDados() {
  try {
    let resposta = await fetch("https://api.exemplo.com/dados");
    let dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Erro na requisição:", erro.message);
  }
}
```

---

## 🧠 Mapa Mental – Error Handling em JavaScript

```
Erros em JavaScript
│
├── Tipos comuns
│   ├── SyntaxError
│   ├── ReferenceError
│   ├── TypeError
│   └── RangeError
│
├── try...catch
│   ├── Bloco try → tenta executar
│   ├── Bloco catch → captura erro
│   └── Bloco finally (opcional)
│
├── throw
│   └── Lança erros personalizados
│
└── Boas práticas
    ├── Mensagens claras
    ├── Validações antes de executar
    └── Tratamento em funções assíncronas
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Try/catch básico

```javascript
try {
  let resultado = 10 / 0;
  if (!isFinite(resultado)) throw new Error("Divisão por zero!");
  console.log(resultado);
} catch (e) {
  console.log("Erro:", e.message);
}
```

---

### 🧠 Exercício 2 – Validação com throw

```javascript
function cadastrarUsuario(nome) {
  if (!nome) throw new Error("Nome é obrigatório");
  console.log("Usuário cadastrado:", nome);
}

try {
  cadastrarUsuario(""); // Deve gerar erro
} catch (erro) {
  console.log("Falha no cadastro:", erro.message);
}
```

---

### 🧪 Desafio – Função com validação de entrada

```javascript
function calcularRaiz(numero) {
  if (typeof numero !== "number") throw new Error("Valor inválido");
  if (numero < 0) throw new Error("Não é possível raiz de número negativo");
  return Math.sqrt(numero);
}

try {
  console.log(calcularRaiz(-4));
} catch (erro) {
  console.log("Erro ao calcular:", erro.message);
}
```

---

## 🎯 Objetivos da Aula

* Identificar e compreender os **principais tipos de erros** em JavaScript
* Utilizar `try`, `catch` e `finally` para **tratar exceções com segurança**
* Criar **validações robustas** com uso de `throw`
* Aplicar tratamento de erros em **funções síncronas e assíncronas**
* Melhorar a **resiliência e previsibilidade** das aplicações JavaScript

---
# Aula 28 - Herança

## ✅ Parte 1: Conceito – Herança em JavaScript

### 🧠 O que é herança?

> Herança é um **mecanismo de reutilização de código**, onde **uma classe (ou função construtora)** pode **herdar propriedades e métodos de outra**, formando uma **cadeia de objetos**.

No JavaScript, herança é feita via:

* 🔁 **Protótipos (Prototype chain)** – base do mecanismo
* 🧱 **Classes (`class`, `extends`, `super`)** – sintaxe moderna (ES6+)

---

### 📚 Termos importantes:

| Termo       | Significado                                                       |
| ----------- | ----------------------------------------------------------------- |
| `prototype` | Objeto que define o que será herdado por instâncias               |
| `__proto__` | Acesso ao protótipo de um objeto (referência ao `prototype`)      |
| `extends`   | Palavra-chave para herdar uma classe                              |
| `super()`   | Chamada ao construtor da classe pai dentro do construtor da filha |

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Herança com Prototype (estilo antigo)

```javascript
function Animal(nome) {
  this.nome = nome;
}

Animal.prototype.falar = function() {
  console.log(`${this.nome} fez um som.`);
};

function Cachorro(nome) {
  Animal.call(this, nome); // herda propriedades
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;

Cachorro.prototype.latir = function() {
  console.log(`${this.nome} latiu!`);
};

const rex = new Cachorro("Rex");
rex.falar(); // Rex fez um som.
rex.latir(); // Rex latiu!
```

---

### 🔹 Herança com Classes (ES6+)

```javascript
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} fez um som.`);
  }
}

class Gato extends Animal {
  miar() {
    console.log(`${this.nome} miou!`);
  }
}

const felix = new Gato("Felix");
felix.falar(); // Felix fez um som.
felix.miar();  // Felix miou!
```

---

### 🔹 Usando `super()`

```javascript
class Veiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }

  info() {
    console.log(`Tipo: ${this.tipo}`);
  }
}

class Carro extends Veiculo {
  constructor(marca) {
    super("Automóvel"); // chama o construtor da classe pai
    this.marca = marca;
  }

  info() {
    super.info(); // chama o método da classe pai
    console.log(`Marca: ${this.marca}`);
  }
}

const carro = new Carro("Toyota");
carro.info();
/*
Tipo: Automóvel
Marca: Toyota
*/
```

---

## 🧠 Mapa Mental – Herança em JavaScript

```
Herança em JavaScript
│
├── Base: Prototype
│   ├── Função construtora
│   ├── this + call
│   └── prototype chain
│
├── ES6: Classes
│   ├── class Pai {}
│   ├── class Filho extends Pai {}
│   └── super()
│
├── Herança de
│   ├── Propriedades (via constructor)
│   └── Métodos (via prototype ou classe)
│
└── Aplicações
    ├── Reutilização de código
    ├── Organização OOP
    └── Componentes reutilizáveis
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Classe com herança

```javascript
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  cumprimentar() {
    console.log(`Olá, eu sou ${this.nome}`);
  }
}

class Professor extends Pessoa {
  ensinar() {
    console.log(`${this.nome} está ensinando JavaScript.`);
  }
}

const prof = new Professor("Carlos");
prof.cumprimentar();
prof.ensinar();
```

---

### 🧠 Exercício 2 – Herança com super

```javascript
class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  mostrar() {
    console.log(`${this.nome} custa R$${this.preco}`);
  }
}

class Eletronico extends Produto {
  constructor(nome, preco, marca) {
    super(nome, preco);
    this.marca = marca;
  }

  mostrar() {
    super.mostrar();
    console.log(`Marca: ${this.marca}`);
  }
}

let celular = new Eletronico("Smartphone", 2500, "Samsung");
celular.mostrar();
```

---

### 🧪 Desafio – Criar hierarquia com 3 níveis

```javascript
class Ser {
  respirar() {
    console.log("Respirando...");
  }
}

class Animal extends Ser {
  mover() {
    console.log("Se movendo...");
  }
}

class Peixe extends Animal {
  nadar() {
    console.log("Nadando...");
  }
}

const nemo = new Peixe();
nemo.respirar();
nemo.mover();
nemo.nadar();
```

---

## 🎯 Objetivos da Aula

* Entender o conceito de **herança prototípica** em JavaScript
* Utilizar a sintaxe moderna de **classes, `extends`, e `super()`**
* Criar hierarquias de objetos com **reutilização de código**
* Saber aplicar herança para **organização e estruturação de projetos orientados a objetos**

---
# Aula 29 - Set

## ✅ Parte 1: Conceito – `Set` em JavaScript

### 🧠 O que é um `Set`?

> `Set` é uma **estrutura de dados nativa do JavaScript**, introduzida no ES6, que permite **armazenar valores únicos**, ou seja, **sem duplicatas**.

* Sem índice como arrays
* Armazena apenas **valores primitivos ou referências únicas**
* Mantém a **ordem de inserção**
* Ideal para **filtrar duplicatas**, **testar existência** e **operações de conjunto**

---

### 📦 Sintaxe básica

```javascript
const conjunto = new Set();
```

* Você pode **adicionar**, **remover**, **verificar existência** e **iterar** pelos valores do `Set`.

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Criando um `Set`

```javascript
const numeros = new Set([1, 2, 3, 3, 4]);

console.log(numeros); // Set(4) { 1, 2, 3, 4 }
```

📌 O número `3` aparece duas vezes na criação, mas o `Set` armazena **apenas uma ocorrência**.

---

### 🔹 Métodos principais

```javascript
const frutas = new Set();

// Adicionando
frutas.add("maçã");
frutas.add("banana");
frutas.add("maçã"); // duplicata → ignorada

// Verificando existência
console.log(frutas.has("banana")); // true

// Removendo
frutas.delete("banana");

// Tamanho
console.log(frutas.size); // 1

// Limpando
frutas.clear();
```

---

### 🔹 Iterando um `Set`

```javascript
const letras = new Set(["a", "b", "c"]);

for (let letra of letras) {
  console.log(letra);
}
```

---

### 🔹 Convertendo `Set` para Array

```javascript
const set = new Set([1, 2, 3]);
const array = [...set]; // ou Array.from(set)

console.log(array); // [1, 2, 3]
```

---

### 🔹 Eliminando duplicatas de um array

```javascript
const nomes = ["Ana", "João", "Ana", "Carlos", "João"];
const nomesUnicos = [...new Set(nomes)];

console.log(nomesUnicos); // ["Ana", "João", "Carlos"]
```

---

## 🧠 Mapa Mental – Set em JavaScript

```
Set (ES6)
│
├── Conceito
│   ├── Estrutura de dados
│   ├── Valores únicos
│   └── Sem índices
│
├── Operações
│   ├── add(valor)
│   ├── delete(valor)
│   ├── has(valor)
│   ├── size
│   └── clear()
│
├── Iteração
│   ├── for...of
│   ├── forEach()
│
└── Usos comuns
    ├── Remover duplicatas
    ├── Verificar existência
    └── Operações de conjunto
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Adicionar e verificar

```javascript
const palavras = new Set();

palavras.add("HTML");
palavras.add("CSS");
palavras.add("JavaScript");
palavras.add("CSS"); // duplicata

console.log(palavras.has("HTML")); // true
console.log(palavras.size);        // 3
```

---

### 🧪 Exercício 2 – Remover duplicatas de array

```javascript
const numeros = [1, 2, 2, 3, 4, 4, 5];

const unicos = [...new Set(numeros)];
console.log(unicos); // [1, 2, 3, 4, 5]
```

---

### 🔢 Desafio – Contar elementos únicos

```javascript
function contarUnicos(lista) {
  return new Set(lista).size;
}

console.log(contarUnicos([1, 2, 2, 3, 4])); // 4
console.log(contarUnicos(["a", "a", "b", "c"])); // 3
```

---

## 🎯 Objetivos da Aula

* Compreender o que é um `Set` e suas vantagens
* Saber usar seus métodos fundamentais (`add`, `has`, `delete`)
* Aplicar `Set` para remover duplicatas de arrays
* Iterar sobre `Set` e integrá-lo com outras estruturas
* Resolver problemas reais com uso de valores únicos

---
# Aula 30 - Promisses

## ✅ Parte 1: Conceito – Promises em JavaScript

### 🧠 O que é uma Promise?

> Uma **Promise** é um **objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona**, e seu **valor resultante**.

* Foi introduzida no **ES6**
* Substitui **callbacks aninhados** (callback hell) por uma sintaxe mais limpa
* Tem **três estados**:

| Estado      | Significado                       |
| ----------- | --------------------------------- |
| `pending`   | Em andamento                      |
| `fulfilled` | Concluída com sucesso (`resolve`) |
| `rejected`  | Falhou (`reject`)                 |

---

### 📦 Sintaxe básica:

```javascript
const promessa = new Promise((resolve, reject) => {
  // lógica
  if (sucesso) {
    resolve(valor);
  } else {
    reject(erro);
  }
});

promessa
  .then(resultado => console.log(resultado))
  .catch(erro => console.error(erro));
```

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Criando uma Promise simples

```javascript
const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

  if (sucesso) {
    resolve("Operação concluída!");
  } else {
    reject("Ocorreu um erro.");
  }
});

promessa
  .then(mensagem => console.log("Sucesso:", mensagem))
  .catch(erro => console.log("Erro:", erro));
```

---

### 🔹 Simulando atraso com `setTimeout`

```javascript
function esperarSegundos(segundos) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Esperou ${segundos} segundos`);
    }, segundos * 1000);
  });
}

esperarSegundos(2).then(console.log);
```

---

### 🔹 Corrente de `.then()`

```javascript
new Promise(resolve => resolve(2))
  .then(num => num * 2)
  .then(num => num + 3)
  .then(console.log); // 7
```

---

### 🔹 Lidando com erros (`.catch()`)

```javascript
function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("Divisão por zero!");
    } else {
      resolve(a / b);
    }
  });
}

dividir(10, 2)
  .then(res => console.log("Resultado:", res))
  .catch(erro => console.error("Erro:", erro));
```

---

### 🔹 Promise com `finally`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Post:", data))
  .catch(err => console.error("Erro:", err))
  .finally(() => console.log("Finalizado!"));
```

---

## 🧠 Mapa Mental – Promises em JavaScript

```
Promises em JavaScript
│
├── Conceito
│   ├── Representa operação assíncrona
│   └── resolve / reject
│
├── Estados
│   ├── pending
│   ├── fulfilled
│   └── rejected
│
├── Métodos
│   ├── .then() → sucesso
│   ├── .catch() → erro
│   └── .finally() → sempre executa
│
└── Usos comuns
    ├── Atrasos
    ├── Requisições (fetch)
    └── Encadeamento de operações
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Simular uma requisição

```javascript
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    if (id === 0) reject("ID inválido");
    setTimeout(() => resolve({ id, nome: "Ana" }), 1000);
  });
}

buscarUsuario(1)
  .then(usuario => console.log("Usuário:", usuario))
  .catch(erro => console.log("Erro:", erro));
```

---

### 🧪 Exercício 2 – Criar promessa que falha

```javascript
function testarErro() {
  return new Promise((resolve, reject) => {
    reject("Algo deu errado!");
  });
}

testarErro()
  .then(res => console.log("Sucesso:", res))
  .catch(err => console.error("Erro capturado:", err));
```

---

### 🚀 Desafio – Corrente com 3 passos

```javascript
function iniciar(valor) {
  return new Promise(resolve => resolve(valor));
}

iniciar(5)
  .then(n => n + 3)
  .then(n => n * 2)
  .then(n => `Resultado final: ${n}`)
  .then(console.log); // Resultado final: 16
```

---

## 🎯 Objetivos da Aula

* Entender o que são Promises e por que foram criadas
* Aprender a criar e consumir Promises com `.then()`, `.catch()` e `.finally()`
* Utilizar Promises para simular **operações assíncronas reais**
* Aplicar Promises em **requisições de rede, delays e pipelines de execução**
* Preparar o aluno para o uso de **`async/await`**

---
# Aula 31 - Recursão

## ✅ Parte 1: Conceito – Recursão em JavaScript

### 🧠 O que é recursão?

> **Recursão** é quando uma função **chama a si mesma** para resolver **subproblemas menores** de um mesmo problema.

É uma **estratégia comum em algoritmos** como:

* Fatorial
* Sequência de Fibonacci
* Busca em árvores
* Percurso de diretórios

---

### 🧩 Conceitos fundamentais

1. **Caso base (base case)**: condição que **interrompe** a recursão
2. **Passo recursivo**: a função se **chama novamente com dados menores**

```javascript
function exemplo() {
  if (condição_de_parada) return;
  exemplo(); // chamada recursiva
}
```

---

### ⚠️ Cuidados

* Toda recursão **deve ter um caso base**
* Caso contrário, resulta em **loop infinito** e **estouro de pilha** (stack overflow)

---

## 💻 Parte 2: Exemplos de Código

### 🔹 Fatorial (n!)

```javascript
function fatorial(n) {
  if (n === 0 || n === 1) return 1; // caso base
  return n * fatorial(n - 1);      // chamada recursiva
}

console.log(fatorial(5)); // 120
```

---

### 🔹 Contagem regressiva

```javascript
function contagem(n) {
  if (n <= 0) {
    console.log("Fim!");
    return;
  }
  console.log(n);
  contagem(n - 1);
}

contagem(5);
```

---

### 🔹 Sequência de Fibonacci

```javascript
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // 8
```

---

### 🔹 Soma de elementos de array (sem loop)

```javascript
function somarArray(arr, i = 0) {
  if (i >= arr.length) return 0;
  return arr[i] + somarArray(arr, i + 1);
}

console.log(somarArray([1, 2, 3, 4])); // 10
```

---

### 🔹 Percorrer objeto aninhado

```javascript
const menu = {
  nome: "Início",
  filhos: [
    {
      nome: "Sobre",
      filhos: []
    },
    {
      nome: "Serviços",
      filhos: [
        { nome: "Sites", filhos: [] },
        { nome: "Sistemas", filhos: [] }
      ]
    }
  ]
};

function percorrer(item) {
  console.log(item.nome);
  item.filhos.forEach(filho => percorrer(filho));
}

percorrer(menu);
```

---

## 🧠 Mapa Mental – Recursão em JavaScript

```
Recursão
│
├── Conceito
│   └── Função que se chama a si mesma
│
├── Componentes
│   ├── Caso base
│   └── Chamada recursiva
│
├── Aplicações
│   ├── Fatorial
│   ├── Fibonacci
│   ├── Soma de array
│   └── Estruturas aninhadas
│
└── Cuidados
    ├── Evitar stack overflow
    └── Sempre definir um caso de parada
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Fatorial com recursão

```javascript
function fatorial(n) {
  if (n <= 1) return 1;
  return n * fatorial(n - 1);
}

console.log(fatorial(4)); // 24
```

---

### 🔢 Exercício 2 – Contar até N

```javascript
function contarAte(n, atual = 1) {
  if (atual > n) return;
  console.log(atual);
  contarAte(n, atual + 1);
}

contarAte(5);
```

---

### 🧪 Desafio – Soma de números até N

```javascript
function somarAte(n) {
  if (n <= 0) return 0;
  return n + somarAte(n - 1);
}

console.log(somarAte(10)); // 55
```

---

## 🎯 Objetivos da Aula

* Entender o que é e como funciona **recursão**
* Saber aplicar **caso base e passo recursivo**
* Resolver problemas que podem ser quebrados em **subproblemas**
* Substituir loops por recursão em situações apropriadas
* Identificar riscos de **stack overflow** e aplicar boas práticas

---

# Aula 32 - Web com Express

## ✅ Parte 1: Conceito – O que é Express.js?

### 🧠 O que é o Express.js?

> **Express.js** é um **framework minimalista e flexível para Node.js**, usado para **criar servidores web e APIs** de forma rápida e organizada.

* Permite **lidar com rotas HTTP**, **requisições e respostas**, **middlewares**, e **renderização de views**.
* É amplamente usado para construir **REST APIs**, **backend de aplicações web**, e **serviços escaláveis**.

---

### 🧰 O que é Node.js?

> **Node.js** é um ambiente de execução de JavaScript fora do navegador, baseado no **motor V8 do Chrome**. Ele permite rodar JavaScript no **servidor**.

---

### 🔗 Por que usar Express?

* Cria **servidores HTTP** facilmente
* Suporte nativo a **rotas, parâmetros, middlewares**
* Alto desempenho e muito **utilizado em produção**
* Base para **frameworks maiores** como NestJS, Sails.js, etc.

---

## 🛠 Instalação do Node.js e Express no Ubuntu (Linux)

### ✅ Etapas no terminal:

#### 1. 📥 Instalar Node.js (versão estável LTS)

```bash
sudo apt update
sudo apt install nodejs npm -y
```

**Verificar instalação:**

```bash
node -v
npm -v
```

#### 2. 📁 Criar um projeto

```bash
mkdir meu-servidor
cd meu-servidor
npm init -y
```

#### 3. 📦 Instalar o Express.js

```bash
npm install express
```

---

## 💻 Parte 2: Exemplo Prático – Criando um servidor Express

### 🔹 Estrutura de diretório

```
meu-servidor/
├── node_modules/
├── package.json
└── index.js
```

### 🔹 Código do `index.js`

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Rota principal
app.get("/", (req, res) => {
  res.send("Servidor Express funcionando!");
});

// Outra rota
app.get("/sobre", (req, res) => {
  res.send("Página Sobre");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

### 🔹 Rodar o servidor

```bash
node index.js
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

### 🧪 Adicionando mais funcionalidades

#### Middleware para JSON

```javascript
app.use(express.json());

app.post("/usuarios", (req, res) => {
  const usuario = req.body;
  res.send(`Usuário ${usuario.nome} criado com sucesso!`);
});
```

Teste com `Postman` ou `curl`:

```bash
curl -X POST http://localhost:3000/usuarios \
-H "Content-Type: application/json" \
-d '{"nome": "Ana"}'
```

---

## 🧠 Mapa Mental – Express.js com Node

```
Express.js + Node.js
│
├── Node.js
│   ├── JS fora do navegador
│   └── Servidor leve e rápido
│
├── Express.js
│   ├── Framework web minimalista
│   ├── Roteamento HTTP
│   ├── Middlewares
│   └── Criação de APIs
│
├── Instalação
│   ├── node + npm
│   └── npm install express
│
└── Aplicação
    ├── app.get(), app.post()
    ├── app.use()
    └── app.listen()
```

---

## 📌 Atividades e Exercícios

### 🧩 Exercício 1 – Criar novas rotas

Adicione ao projeto:

```javascript
app.get("/contato", (req, res) => {
  res.send("Página de contato");
});
```

---

### 🧠 Exercício 2 – Receber dados por POST

```javascript
app.post("/mensagem", (req, res) => {
  const { texto } = req.body;
  res.send(`Mensagem recebida: ${texto}`);
});
```

---

### 🧪 Desafio – Simular banco de dados com array

```javascript
const usuarios = [];

app.post("/usuario", (req, res) => {
  const usuario = req.body;
  usuarios.push(usuario);
  res.send("Usuário adicionado!");
});

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});
```

---

## 🎯 Objetivos da Aula

* Compreender o papel do **Node.js como ambiente de execução**
* Entender como o **Express** facilita a criação de **servidores e rotas**
* Aprender a configurar, rodar e testar um servidor local
* Criar rotas com diferentes métodos HTTP (`GET`, `POST`)
* Utilizar `express.json()` para **receber dados em formato JSON**

---
# Aula 33 - NodeJS

## 🟦 INSTALAÇÃO NO WINDOWS

### ✅ 1. Baixar o Node.js

1. Acesse: [https://nodejs.org](https://nodejs.org)
2. Clique em **LTS (Long Term Support)** → versão recomendada
3. Baixe o **instalador `.msi` para Windows**

---

### ⚙️ 2. Instalar o Node.js

1. Execute o instalador `.msi`
2. Avance com as opções padrão
3. Marque a opção **“Automatically install the necessary tools…”** (opcional)

---

### 🧪 3. Verificar instalação

Abra o **Prompt de Comando (CMD)** ou **PowerShell** e digite:

```bash
node -v
npm -v
```

Você deve ver as versões instaladas.

---

### 📦 4. Criar projeto e instalar Express

```bash
mkdir meu-projeto
cd meu-projeto
npm init -y
npm install express
```

---

### 🧪 5. Criar o servidor

Crie o arquivo `index.js` com o seguinte código:

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor Express no Windows!");
});

app.listen(PORT, () => {
  console.log(`Rodando em http://localhost:${PORT}`);
});
```

Rode com:

```bash
node index.js
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---
# Aula 34 - ExpressJS

## 🍎 INSTALAÇÃO NO MACOS (INTEL OU APPLE SILICON)

### ✅ 1. Instalar o Homebrew (se ainda não tiver)

Abra o **Terminal** e cole:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

---

### 📥 2. Instalar Node.js via Homebrew

```bash
brew install node
```

---

### 🧪 3. Verificar instalação

```bash
node -v
npm -v
```

---

### 📦 4. Criar projeto e instalar Express

```bash
mkdir meu-projeto
cd meu-projeto
npm init -y
npm install express
```

---

### 📂 5. Criar o arquivo `index.js`

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Servidor Express no macOS!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

Execute:

```bash
node index.js
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

### 🔁 Dica: Usar `nodemon` (opcional)

Se quiser atualizar o servidor automaticamente a cada salvamento:

```bash
npm install -g nodemon
nodemon index.js
```

---

## ✅ Conclusão

### 🔧 Você está pronto para:

* Criar APIs RESTful
* Desenvolver backends com rotas HTTP
* Integrar com frontends, bancos de dados e sistemas externos

---
# Aula 35 - API REST

## 📦 OBJETIVO DO PROJETO

Criar uma API REST completa para gerenciar **usuários**, com as seguintes rotas:

| Método | Rota            | Ação               |
| ------ | --------------- | ------------------ |
| GET    | `/usuarios`     | Listar todos       |
| GET    | `/usuarios/:id` | Buscar um usuário  |
| POST   | `/usuarios`     | Criar novo usuário |
| PUT    | `/usuarios/:id` | Atualizar usuário  |
| DELETE | `/usuarios/:id` | Remover usuário    |

---

## ✅ PRÉ-REQUISITOS

* Node.js e npm instalados
* Terminal (Linux/macOS) ou PowerShell/Prompt (Windows)
* Conhecimento básico de JavaScript

---

## 🛠 1. CRIAR O PROJETO

```bash
mkdir api-crud-express
cd api-crud-express
npm init -y
npm install express
```

---

## 🗂 2. ESTRUTURA DO PROJETO

```
api-crud-express/
├── node_modules/
├── package.json
└── index.js
```

---

## ✍️ 3. CÓDIGO DO `index.js`

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// "Banco de dados" em memória
let usuarios = [];
let proximoId = 1;

// ROTA: Listar todos os usuários
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// ROTA: Buscar usuário por ID
app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  res.json(usuario);
});

// ROTA: Criar novo usuário
app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Nome e e-mail são obrigatórios" });
  }

  const novoUsuario = {
    id: proximoId++,
    nome,
    email
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

// ROTA: Atualizar usuário
app.put("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, email } = req.body;
  const usuario = usuarios.find(u => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  if (nome) usuario.nome = nome;
  if (email) usuario.email = email;

  res.json(usuario);
});

// ROTA: Deletar usuário
app.delete("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  usuarios.splice(index, 1);
  res.status(204).send(); // No Content
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

---

## 🧪 4. TESTAR A API

Use ferramentas como:

* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/)
* Ou `curl` no terminal

### 🔹 Exemplo com `curl`:

**Criar:**

```bash
curl -X POST http://localhost:3000/usuarios \
-H "Content-Type: application/json" \
-d '{"nome": "Ana", "email": "ana@email.com"}'
```

**Listar:**

```bash
curl http://localhost:3000/usuarios
```

**Atualizar:**

```bash
curl -X PUT http://localhost:3000/usuarios/1 \
-H "Content-Type: application/json" \
-d '{"nome": "Ana Silva"}'
```

**Deletar:**

```bash
curl -X DELETE http://localhost:3000/usuarios/1
```

---

## 🧠 MELHORIAS FUTURAS

* Persistência em banco de dados (Ex: MongoDB, PostgreSQL)
* Validações com [Joi](https://joi.dev/) ou `express-validator`
* Separação de rotas e controllers
* Documentação com Swagger

---

## 🎯 OBJETIVOS DIDÁTICOS ATINGIDOS

✅ Entender estrutura de uma API REST

✅ Criar rotas com métodos HTTP

✅ Manipular dados em memória

✅ Aplicar Express.js na prática

✅ Validar requisições e tratar erros


---
# Aula 36 - Conexão com banco de dados

### 💾 PARTE 1: Conexão com MySQL

### 🟣 PARTE 2: Conexão com PostgreSQL

Ambas incluem:

* Instalação das bibliotecas necessárias
* Configuração da conexão
* Consulta básica (SELECT e INSERT)
* Boas práticas para organização do código

---

## 💾 PARTE 1: CONECTANDO COM MYSQL

### 📦 1. Instalar MySQL e biblioteca no projeto

No Ubuntu (caso não tenha o MySQL):

```bash
sudo apt update
sudo apt install mysql-server -y
```

No Windows/Mac: [https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)

No projeto Node.js:

```bash
npm install mysql2
```

---

### 🛠 2. Criar banco e tabela (exemplo)

Abra o terminal MySQL:

```bash
mysql -u root -p
```

SQL:

```sql
CREATE DATABASE empresa;
USE empresa;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);
```

---

### 📂 3. Criar conexão com o banco (`db.js`)

```js
const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sua_senha_aqui",
  database: "empresa"
});

conexao.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao MySQL com sucesso!");
});

module.exports = conexao;
```

---

### 📄 4. Usar no `index.js`

```js
const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

// Listar usuários
app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Criar usuário
app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;
  db.query("INSERT INTO usuarios (nome, email) VALUES (?, ?)", [nome, email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, nome, email });
  });
});

app.listen(3000, () => {
  console.log("Servidor Express + MySQL rodando em http://localhost:3000");
});
```

---

## 🟣 PARTE 2: CONECTANDO COM POSTGRESQL

### 📦 1. Instalar PostgreSQL e biblioteca

No Ubuntu:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib -y
```

Crie o banco:

```bash
sudo -u postgres psql
```

```sql
CREATE DATABASE empresa;
\q
```

Instale o driver no Node:

```bash
npm install pg
```

---

### 📂 2. Criar conexão (`db.js`)

```js
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "empresa",
  password: "sua_senha",
  port: 5432
});

module.exports = pool;
```

---

### 🗂 3. Criar tabela no banco

```bash
sudo -u postgres psql empresa
```

```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);
\q
```

---

### 📄 4. Usar no `index.js`

```js
const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

// Listar usuários
app.get("/usuarios", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM usuarios");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Criar usuário
app.post("/usuarios", async (req, res) => {
  const { nome, email } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *",
      [nome, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3000, () => {
  console.log("Servidor Express + PostgreSQL rodando em http://localhost:3000");
});
```

---

## 🔄 COMPARATIVO: MySQL vs PostgreSQL

| Aspecto     | MySQL                      | PostgreSQL                    |
| ----------- | -------------------------- | ----------------------------- |
| Facilidade  | Mais simples de configurar | Mais robusto                  |
| Performance | Muito rápido               | Alta performance + ACID       |
| Recursos    | Menos tipos de dados       | Suporte completo a JSON, etc. |
| Consultas   | Simples                    | Avançadas e mais poderosas    |

---

## 📌 MELHORIAS FUTURAS

* Usar ORM como **Prisma**, **Sequelize** ou **TypeORM**
* Validação de dados com **Zod** ou **Joi**
* Criação de **migrations**
* Variáveis de ambiente com `dotenv`

---
# Aula 37 - ORM

## 🧠 O QUE É ORM?

**ORM (Object-Relational Mapping)** é uma técnica de programação que permite mapear **objetos da programação orientada a objetos (OOP)** para **entidades de um banco de dados relacional**.

### 📌 Tradução prática:

> Em vez de escrever SQL puro para manipular o banco, você interage com **classes e métodos** que o ORM converte em comandos SQL.

---

## 🧱 EXEMPLO SIMPLES

Suponha que você tenha esta tabela no banco de dados:

```sql
CREATE TABLE usuarios (
  id INT PRIMARY KEY,
  nome VARCHAR(100),
  email VARCHAR(100)
);
```

E, em seu código JavaScript com Sequelize, você teria algo assim:

```js
const Usuario = sequelize.define("Usuario", {
  nome: DataTypes.STRING,
  email: DataTypes.STRING
});
```

### 🎯 O ORM vai:

* Criar comandos SQL automaticamente (`INSERT`, `UPDATE`, `DELETE`, `SELECT`)
* Validar os dados
* Criar relações entre tabelas (joins) por meio de **associações entre classes**

---

## 📦 VANTAGENS DO ORM

| Benefício                       | Descrição                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------ |
| 🔧 Abstração do SQL             | Você usa código de alto nível (ex: `usuario.save()`), não comandos SQL diretos |
| 🧹 Organização do código        | Usa o paradigma de **POO** com classes e métodos                               |
| 🔄 Migrações controladas        | Permite versionar alterações do banco de dados (schema versioning)             |
| 🔗 Relacionamentos declarativos | Define relações como `hasOne`, `belongsTo`, `hasMany`, `manyToMany`            |
| 🚀 Agilidade                    | Facilita desenvolvimento ágil e CRUDs rápidos                                  |

---

## 🧬 COMO FUNCIONA A RELAÇÃO ENTRE CLASSES E TABELAS?

### 🟨 1. **Entidade (Tabela)** → Classe (Model)

Cada **tabela** vira uma **classe** que representa essa entidade no código.

### 🟩 2. **Colunas** → Atributos da classe

Cada **coluna** se torna um **atributo da classe**, com tipos de dados equivalentes.

---

## 🔄 RELACIONAMENTOS (ASSOCIAÇÕES)

ORMs modelam os mesmos tipos de relações de um banco relacional. Veja os tipos principais:

---

### 1. 🔗 One-to-One (1:1)

**Exemplo:** Cada `Usuário` tem **um** `Perfil`.

**Banco:**

```sql
Usuarios      | Perfis
id (PK)       | id (PK)
              | usuario_id (FK)
```

**ORM:**

```js
Usuario.hasOne(Perfil);
Perfil.belongsTo(Usuario);
```

---

### 2. 🔗 One-to-Many (1:N)

**Exemplo:** Um `Usuário` pode ter **vários** `Posts`.

**Banco:**

```sql
Usuarios       | Posts
id (PK)        | id (PK)
               | usuario_id (FK)
```

**ORM:**

```js
Usuario.hasMany(Post);
Post.belongsTo(Usuario);
```

---

### 3. 🔗 Many-to-Many (N:N)

**Exemplo:** Um `Aluno` pode estar em várias `Turmas`, e cada `Turma` pode ter vários `Alunos`.

**Banco:**

```sql
Alunos         | Turmas         | Alunos_Turmas
id (PK)        | id (PK)        | aluno_id (FK)
                                | turma_id (FK)
```

**ORM:**

```js
Aluno.belongsToMany(Turma, { through: "Alunos_Turmas" });
Turma.belongsToMany(Aluno, { through: "Alunos_Turmas" });
```

---

## 🛠 COMO UM ORM TRADUZ OPERAÇÕES?

| Operação JavaScript (ORM)         | Tradução SQL gerada automaticamente            |
| --------------------------------- | ---------------------------------------------- |
| `Usuario.findAll()`               | `SELECT * FROM usuarios;`                      |
| `Usuario.create({ nome, email })` | `INSERT INTO usuarios (nome, email) VALUES...` |
| `usuario.update({ nome })`        | `UPDATE usuarios SET nome = ... WHERE id = ?`  |
| `usuario.destroy()`               | `DELETE FROM usuarios WHERE id = ?`            |

---

## 🔄 CICLO DE VIDA

1. Você define **models e associações**
2. O ORM **gera e executa SQL**
3. Você trabalha com **objetos e métodos**
4. Tudo fica tipado, versionado e legível

---

## 💡 NOTA SOBRE TYPING E PERFORMANCE

* ORMs como **Prisma** usam o schema para gerar tipos fortes (TypeScript)
* Bons ORMs têm **query builders otimizados** para não impactar a performance
* Porém, para **queries complexas ou específicas**, pode ser necessário escrever SQL manualmente

---

## ✅ CONCLUSÃO

Utilizar ORM é como ter um **tradutor entre o mundo da programação orientada a objetos e os bancos relacionais**.

É ideal para:

* Projetos com **equipe grande**
* Necessidade de **manutenção e escalabilidade**
* Casos em que a produtividade e legibilidade são importantes

---
# Aula 38 - ORM - Migrations

## 📚 PLANO DA AULA: Migrations com ORM

### PARTE 1️⃣ – Sequelize + Migrations (com MySQL)

### PARTE 2️⃣ – Prisma + Migrations (com PostgreSQL)

Inclui:

* Instalação e setup
* Modelagem e criação de tabelas
* Uso de migrations
* Inserção e leitura de dados
* Estrutura de projeto recomendada

---

## ✅ PARTE 1 – Sequelize com MySQL

---

### 🧱 1. Instalar dependências

```bash
npm install sequelize mysql2
npm install --save-dev sequelize-cli
```

---

### 🗂 2. Estrutura recomendada

```
.
├── models/
├── migrations/
├── config/
│   └── config.json
├── seeders/
└── index.js
```

---

### ⚙️ 3. Inicializar o Sequelize

```bash
npx sequelize-cli init
```

---

### ✏️ 4. Configurar o banco

Edite `config/config.json`:

```json
{
  "development": {
    "username": "root",
    "password": "sua_senha",
    "database": "empresa",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

Crie o banco no MySQL:

```sql
CREATE DATABASE empresa;
```

---

### 🧪 5. Criar model + migration

```bash
npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string
```

Isso cria:

* `/models/usuario.js`
* `/migrations/XXXXXXXXXXXXXX-create-usuario.js`

---

### 🚀 6. Rodar migrations

```bash
npx sequelize-cli db:migrate
```

---

### ✍️ 7. Usar o model no Express

`index.js`:

```javascript
const express = require("express");
const { Usuario } = require("./models");

const app = express();
app.use(express.json());

app.get("/usuarios", async (req, res) => {
  const usuarios = await Usuario.findAll();
  res.json(usuarios);
});

app.post("/usuarios", async (req, res) => {
  const usuario = await Usuario.create(req.body);
  res.status(201).json(usuario);
});

app.listen(3000, () => {
  console.log("Servidor Express + Sequelize rodando");
});
```

---

## 🟣 PARTE 2 – Prisma com PostgreSQL

---

### 🧱 1. Instalar dependências

```bash
npm install prisma --save-dev
npm install @prisma/client
```

---

### 🔧 2. Inicializar Prisma

```bash
npx prisma init
```

Cria:

```
prisma/
  └── schema.prisma
.env
```

---

### ⚙️ 3. Configurar banco no `.env`

```env
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/empresa?schema=public"
```

Crie o banco:

```bash
createdb empresa
```

---

### ✏️ 4. Criar o model no `schema.prisma`

```prisma
model Usuario {
  id    Int     @id @default(autoincrement())
  nome  String
  email String
}
```

---

### 🚀 5. Rodar migration

```bash
npx prisma migrate dev --name init
```

---

### 🔁 6. Gerar client

```bash
npx prisma generate
```

---

### 💻 7. Usar no Express

`index.js`:

```javascript
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/usuarios", async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

app.post("/usuarios", async (req, res) => {
  const usuario = await prisma.usuario.create({
    data: req.body
  });
  res.status(201).json(usuario);
});

app.listen(3000, () => {
  console.log("Servidor Express + Prisma rodando");
});
```

---

## ✅ COMPARATIVO

| Recurso     | Sequelize                        | Prisma                         |
| ----------- | -------------------------------- | ------------------------------ |
| Facilidade  | Mais verboso, estilo tradicional | Mais moderno e intuitivo       |
| Performance | Boa                              | Muito rápida e leve            |
| Tipagem     | Não tipado                       | Fortemente tipado (TypeScript) |
| Integração  | CLI robusta                      | Ferramenta `studio` visual     |

---

## 🧠 Conclusão

Com ambos os ORMs você pode:

* Gerenciar sua estrutura com **migrations**
* Criar, atualizar e deletar **modelos de dados**
* Ter **persistência real** com banco relacional
* Produzir um backend robusto e escalável

---

# Aula 39 - AWS - Conceitos

## 🎓 AULA – EC2 NA AWS: INSTÂNCIAS E CONCEITOS FUNDAMENTAIS

---

### 📌 OBJETIVO DA AULA

* Compreender o que é uma instância EC2
* Entender o conceito de máquina virtual
* Identificar as principais características das instâncias na AWS
* Preparar o aluno para hospedar aplicações na nuvem

---

## 🧠 CONCEITO: O QUE É UMA MÁQUINA VIRTUAL?

### ✅ Definição

Uma **máquina virtual (VM)** é um sistema operacional completo que roda em um ambiente virtualizado, **simulando um computador físico** dentro de outro.

### 🧱 Componentes virtuais:

* CPU virtual (vCPU)
* Memória RAM virtual
* Disco virtual (EBS)
* Rede virtual (VPC)

---

## ☁️ EC2 – ELASTIC COMPUTE CLOUD (AWS)

### ✅ O que é?

O **EC2 (Elastic Compute Cloud)** é o serviço da AWS que permite **criar máquinas virtuais escaláveis sob demanda** para executar qualquer aplicação, site ou serviço.

### 🎯 Usos comuns:

* Hospedagem de sites
* APIs e backends
* Banco de dados
* Ambientes de teste e desenvolvimento
* Infraestrutura de produção com escalabilidade

---

## 🏗 ESTRUTURA DE UMA INSTÂNCIA EC2

### 🔹 1. AMI (Amazon Machine Image)

> A imagem do sistema operacional e software básico (ex: Ubuntu, Amazon Linux, Windows Server)

### 🔹 2. Tipo de instância

> Define o **poder de processamento, memória e rede** (ex: `t2.micro`, `m5.large`)

### 🔹 3. Armazenamento

> Geralmente feito com **EBS (Elastic Block Store)**, que funciona como o “HD” da instância

### 🔹 4. Par de chaves (Key Pair)

> Para acesso seguro via SSH – você baixa um arquivo `.pem` para autenticar

### 🔹 5. Grupo de segurança (Security Group)

> Firewall que controla quais **portas e IPs** têm acesso à instância (ex: liberar porta 22 ou 3000)

### 🔹 6. IP público e Elastic IP (opcional)

> IP usado para acessar sua instância via internet

---

## 📊 TIPOS DE INSTÂNCIAS EC2

| Família     | Indicação                                |
| ----------- | ---------------------------------------- |
| `t` (T2/T3) | Uso geral, barato, ideal para testes/dev |
| `m` (M5/M6) | Balanceado: CPU + RAM                    |
| `c` (C5/C6) | Alta performance de CPU                  |
| `r` (R5/R6) | Otimizada para memória                   |
| `g`, `p`    | GPU e Machine Learning                   |

---

## 🔧 EXEMPLO PRÁTICO: CRIAR UMA INSTÂNCIA EC2

1. Ir até o console EC2
2. Clique em **Launch instance**
3. Selecione:

   * AMI: Ubuntu Server 22.04
   * Tipo: `t2.micro` (Free Tier)
   * Par de chaves: gerar uma ou usar existente
   * Grupo de segurança: libere porta 22 (SSH) + porta da sua aplicação
4. Criar e aguardar iniciar
5. Conectar via:

```bash
ssh -i chave.pem ubuntu@<IP_PUBLICO>
```

---

## 🧩 CARACTERÍSTICAS AVANÇADAS DAS INSTÂNCIAS EC2

| Recurso                     | Descrição                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------- |
| Auto Scaling                | Aumenta/reduz instâncias automaticamente conforme demanda                           |
| Elastic Load Balancer (ELB) | Distribui o tráfego entre múltiplas instâncias                                      |
| Spot Instances              | Instâncias com **desconto de até 90%**, mas podem ser encerradas a qualquer momento |
| Elastic IP                  | IP fixo público para sua instância (não muda ao reiniciar)                          |
| CloudWatch                  | Monitoramento de métricas da instância (CPU, disco, memória etc.)                   |

---

## 💸 CUSTOS DAS INSTÂNCIAS EC2

Você paga por:

* **Tempo de uso** (por segundo ou hora)
* **Tipo de instância** (mais poderosa = mais cara)
* **Tráfego de saída** (entrada é gratuita)
* **Disco EBS** (armazenamento por GB/mês)

> No **Free Tier**, você tem:

* 750 horas por mês de instância `t2.micro` ou `t3.micro`
* 30 GB de armazenamento EBS grátis

---

## 💡 DIFERENÇA ENTRE EC2 E CONTAINER (EXTRA)

| EC2 (VM)                         | Docker / ECS / Fargate (Container)            |
| -------------------------------- | --------------------------------------------- |
| Simula máquina completa          | Simula apenas o app/processo                  |
| Leva mais tempo para iniciar     | Inicia em segundos                            |
| Boa para sistemas mais complexos | Ideal para microserviços e ambientes modernos |

---

## 🎯 CONCLUSÃO

O EC2 é o **fundamento principal da infraestrutura em nuvem** da AWS. Dominar seu funcionamento é essencial para qualquer desenvolvedor backend, DevOps ou arquiteto de soluções.

Ele permite que você:

* Crie servidores na nuvem sob demanda
* Escale sua aplicação com flexibilidade
* Rode APIs, bancos, ambientes de CI/CD, etc.

# Aula 40 - SSH

## 🎓 AULA: ACESSO SSH E O PROTOCOLO DE COMUNICAÇÃO SEGURA

---

### 📌 OBJETIVO DA AULA

Ao final dessa aula, o aluno será capaz de:

* Entender o que é SSH e para que serve
* Compreender como o protocolo SSH funciona
* Realizar conexões remotas seguras via terminal
* Acessar servidores na nuvem (como AWS EC2) com chave privada
* Usar comandos práticos para conexões via SSH

---

## 🔐 O QUE É SSH?

### ✅ Definição:

**SSH (Secure Shell)** é um **protocolo de rede criptografado** que permite acessar e gerenciar servidores de forma segura pela linha de comando.

> 📡 **Significa**: "Secure SHell" = Casca segura
> 🔐 Usa criptografia para proteger a comunicação entre cliente (sua máquina) e servidor (ex: EC2, VPS, etc.)

---

## 🧱 PARA QUE SERVE O SSH?

| Uso comum                   | Exemplo                                               |
| --------------------------- | ----------------------------------------------------- |
| Acessar servidores remotos  | Conectar a uma instância EC2, DigitalOcean, etc.      |
| Administrar sistemas Linux  | Instalar pacotes, reiniciar serviços, editar arquivos |
| Deploy de aplicações        | Subir projeto Node.js, Python, etc.                   |
| Transferir arquivos         | Usar `scp` para enviar/baixar arquivos via terminal   |
| Automatizar scripts remotos | Rodar comandos de forma automatizada                  |

---

## 🧠 COMO FUNCIONA O SSH?

### 1. **Modelo Cliente-Servidor**

* Você (cliente) usa o terminal para se conectar ao servidor
* O servidor precisa ter o **serviço `sshd` (SSH daemon)** ativo

---

### 2. **Autenticação via Chave ou Senha**

* Por **senha** (menos seguro, usado em ambientes locais)
* Por **chave pública/privada** (método recomendado)

#### 🗝️ Par de chaves:

* **Chave pública** vai para o servidor
* **Chave privada** fica com você (arquivo `.pem` ou `.ppk`)

---

### 🔒 COMO A CRIPTOGRAFIA FUNCIONA?

* Usa criptografia **assimétrica (RSA, ED25519)**
* Cria um túnel seguro (como HTTPS)
* Garante:

  * **Autenticidade** (é você mesmo se conectando)
  * **Confidencialidade** (ninguém espia os dados)
  * **Integridade** (nenhuma modificação nos pacotes)

---

## 💻 COMANDO BÁSICO DE CONEXÃO VIA SSH

```bash
ssh -i chave.pem usuario@ip-do-servidor
```

| Parâmetro        | Explicação                     |
| ---------------- | ------------------------------ |
| `-i chave.pem`   | Caminho da chave privada       |
| `usuario`        | Exemplo: `ubuntu`, `ec2-user`  |
| `ip-do-servidor` | IP público da instância remota |

---

### 📁 TRANSFERIR ARQUIVOS COM `scp`

```bash
# Enviar arquivo
scp -i chave.pem meu-arquivo.txt ubuntu@ip:/home/ubuntu/

# Baixar do servidor
scp -i chave.pem ubuntu@ip:/home/ubuntu/arquivo.txt ./
```

---

## 📡 COMO FUNCIONA O FLUXO DO SSH

1. Você abre o terminal e executa o comando `ssh`
2. O servidor responde e pede autenticação
3. O cliente envia a **chave pública** para verificação
4. Se a chave for válida, o túnel seguro é criado
5. Você ganha um **terminal remoto** naquele servidor

---

## 🛡️ BOAS PRÁTICAS COM SSH

* Nunca compartilhe sua **chave privada (`.pem`)**
* Use **permissão 400** na chave:

  ```bash
  chmod 400 chave.pem
  ```
* Desative login por senha (em servidores de produção)
* Use **Firewall** e **Security Groups** (ex: AWS)
* Use **nome de usuário correto**:

  * Ubuntu: `ubuntu`
  * Amazon Linux: `ec2-user`
  * Debian: `admin` ou `debian`

---

## ✅ TESTE PRÁTICO PARA ALUNOS

1. Criar instância EC2 com Ubuntu
2. Baixar chave `.pem`
3. Executar:

```bash
ssh -i chave.pem ubuntu@<IP_DA_INSTANCIA>
```

4. Rodar comandos remotos como:

```bash
uptime
uname -a
ls -la
```

---

## 🧠 RECAPITULANDO

| Conceito      | O que é                                                |
| ------------- | ------------------------------------------------------ |
| SSH           | Protocolo seguro de acesso remoto por linha de comando |
| Cliente       | Sua máquina local (terminal)                           |
| Servidor      | Onde o SSH está ativo (`sshd`)                         |
| Chave pública | Fica no servidor para validar acesso                   |
| Chave privada | Fica com você, usada para autenticar                   |

---

# Aula 41 - AWS - Instância EC2


## 🚀 OBJETIVO FINAL

Subir sua API Node.js na nuvem, acessível via IP público da AWS EC2.

---

## ✅ PRÉ-REQUISITOS

* Conta na AWS (ativa e com permissão de EC2)
* Projeto Node.js já funcionando localmente
* Conhecimento básico de terminal

---

## 🗂 ETAPAS DO TUTORIAL

1. Criar instância EC2 com Ubuntu
2. Acessar via SSH
3. Instalar Node.js, npm e Git
4. Instalar banco de dados (MySQL ou PostgreSQL)
5. Clonar o projeto ou enviar por SCP
6. Instalar dependências e rodar a aplicação
7. Configurar firewall (porta 3000)
8. (Opcional) Usar `pm2` para manter o servidor no ar

---

## 🧱 ETAPA 1 – CRIAR INSTÂNCIA EC2

1. Acesse: [https://console.aws.amazon.com/ec2](https://console.aws.amazon.com/ec2)
2. Clique em **Launch instance**
3. **Nome da instância**: `api-node`
4. **AMI**: Ubuntu Server 22.04 LTS (Free Tier elegível)
5. **Tipo**: `t2.micro` (gratuito)
6. **Par de chaves (SSH)**: Crie uma nova ou use uma existente (ex: `chave-aws.pem`)
7. **Firewall (Security Group)**:

   * Porta **22 (SSH)** – liberada para você
   * Porta **3000 (custom TCP)** – liberada para acesso externo
   * (Opcional) Porta 80 ou 443 se for usar NGINX

> ⚠️ **IMPORTANTE**: mantenha a chave `.pem` salva com permissão 400!

---

## 🔐 ETAPA 2 – ACESSAR VIA SSH

```bash
chmod 400 chave-aws.pem
ssh -i "chave-aws.pem" ubuntu@<IP_DA_INSTANCIA>
```

---

## ⚙️ ETAPA 3 – INSTALAR DEPENDÊNCIAS

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y nodejs npm git
node -v
npm -v
```

(Se quiser versão mais nova: use NodeSource ou NVM)

---

## 🛢️ ETAPA 4 – INSTALAR BANCO DE DADOS (OPCIONAL)

### 🟡 MySQL

```bash
sudo apt install mysql-server -y
sudo mysql_secure_installation
```

### 🟣 PostgreSQL

```bash
sudo apt install postgresql postgresql-contrib -y
sudo -u postgres psql
```

---

## 📂 ETAPA 5 – ENVIAR O PROJETO PARA O SERVIDOR

### Método 1: Clonar repositório

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

### Método 2: Enviar por SCP

No seu computador local:

```bash
scp -i chave-aws.pem -r ./meu-projeto ubuntu@<IP_DA_INSTANCIA>:/home/ubuntu/
```

---

## 📦 ETAPA 6 – INSTALAR DEPENDÊNCIAS E RODAR

```bash
cd meu-projeto
npm install
```

Se estiver usando **ORM com migrations**:

* **Sequelize**

  ```bash
  npx sequelize-cli db:migrate
  ```

* **Prisma**

  ```bash
  npx prisma migrate deploy
  ```

Rodar o servidor:

```bash
node index.js
```

---

## 🔓 ETAPA 7 – LIBERAR PORTA NO FIREWALL

Na criação da instância você já deve ter aberto a porta **3000** no Security Group.

Se quiser verificar:

1. Vá para EC2 → Instâncias → [Sua instância] → Grupo de segurança
2. Edite → Adicionar regra:

   * Tipo: **Custom TCP Rule**
   * Porta: `3000`
   * Origem: `0.0.0.0/0` (público)
   * Salvar

Agora, acesse no navegador:

```
http://<IP_PUBLICO>:3000
```

---

## ♻️ ETAPA 8 – (OPCIONAL) USAR `PM2` PARA PRODUÇÃO

```bash
npm install pm2 -g
pm2 start index.js
pm2 startup
pm2 save
```

Com isso, a aplicação reinicia automaticamente em caso de falha ou reboot.

---

## 🧠 DICA: OCULTAR `.env`

* Nunca envie `.env` no repositório
* Crie o `.env` diretamente no servidor
* Use `dotenv` para carregar as variáveis no `index.js`

---

## 🧪 TESTES FINAIS

```bash
curl http://localhost:3000/usuarios
```

Ou pelo seu navegador:

```
http://<IP_PUBLICO>:3000/usuarios
```

---

## ✅ CONCLUSÃO

Você agora tem:

* ✅ Uma aplicação Node.js rodando na nuvem
* ✅ Conexão com banco de dados real
* ✅ Hospedagem gratuita no Free Tier da AWS
* ✅ Gerenciamento com `pm2` e segurança com SSH

---



## 🎓 AULA: ACESSO SSH E O PROTOCOLO DE COMUNICAÇÃO SEGURA

---

### 📌 OBJETIVO DA AULA

Ao final dessa aula, o aluno será capaz de:

* Entender o que é SSH e para que serve
* Compreender como o protocolo SSH funciona
* Realizar conexões remotas seguras via terminal
* Acessar servidores na nuvem (como AWS EC2) com chave privada
* Usar comandos práticos para conexões via SSH

---

## 🔐 O QUE É SSH?

### ✅ Definição:

**SSH (Secure Shell)** é um **protocolo de rede criptografado** que permite acessar e gerenciar servidores de forma segura pela linha de comando.

> 📡 **Significa**: "Secure SHell" = Casca segura
> 🔐 Usa criptografia para proteger a comunicação entre cliente (sua máquina) e servidor (ex: EC2, VPS, etc.)

---

## 🧱 PARA QUE SERVE O SSH?

| Uso comum                   | Exemplo                                               |
| --------------------------- | ----------------------------------------------------- |
| Acessar servidores remotos  | Conectar a uma instância EC2, DigitalOcean, etc.      |
| Administrar sistemas Linux  | Instalar pacotes, reiniciar serviços, editar arquivos |
| Deploy de aplicações        | Subir projeto Node.js, Python, etc.                   |
| Transferir arquivos         | Usar `scp` para enviar/baixar arquivos via terminal   |
| Automatizar scripts remotos | Rodar comandos de forma automatizada                  |

---

## 🧠 COMO FUNCIONA O SSH?

### 1. **Modelo Cliente-Servidor**

* Você (cliente) usa o terminal para se conectar ao servidor
* O servidor precisa ter o **serviço `sshd` (SSH daemon)** ativo

---

### 2. **Autenticação via Chave ou Senha**

* Por **senha** (menos seguro, usado em ambientes locais)
* Por **chave pública/privada** (método recomendado)

#### 🗝️ Par de chaves:

* **Chave pública** vai para o servidor
* **Chave privada** fica com você (arquivo `.pem` ou `.ppk`)

---

### 🔒 COMO A CRIPTOGRAFIA FUNCIONA?

* Usa criptografia **assimétrica (RSA, ED25519)**
* Cria um túnel seguro (como HTTPS)
* Garante:

  * **Autenticidade** (é você mesmo se conectando)
  * **Confidencialidade** (ninguém espia os dados)
  * **Integridade** (nenhuma modificação nos pacotes)

---

## 💻 COMANDO BÁSICO DE CONEXÃO VIA SSH

```bash
ssh -i chave.pem usuario@ip-do-servidor
```

| Parâmetro        | Explicação                     |
| ---------------- | ------------------------------ |
| `-i chave.pem`   | Caminho da chave privada       |
| `usuario`        | Exemplo: `ubuntu`, `ec2-user`  |
| `ip-do-servidor` | IP público da instância remota |

---

### 📁 TRANSFERIR ARQUIVOS COM `scp`

```bash
# Enviar arquivo
scp -i chave.pem meu-arquivo.txt ubuntu@ip:/home/ubuntu/

# Baixar do servidor
scp -i chave.pem ubuntu@ip:/home/ubuntu/arquivo.txt ./
```

---

## 📡 COMO FUNCIONA O FLUXO DO SSH

1. Você abre o terminal e executa o comando `ssh`
2. O servidor responde e pede autenticação
3. O cliente envia a **chave pública** para verificação
4. Se a chave for válida, o túnel seguro é criado
5. Você ganha um **terminal remoto** naquele servidor

---

## 🛡️ BOAS PRÁTICAS COM SSH

* Nunca compartilhe sua **chave privada (`.pem`)**
* Use **permissão 400** na chave:

  ```bash
  chmod 400 chave.pem
  ```
* Desative login por senha (em servidores de produção)
* Use **Firewall** e **Security Groups** (ex: AWS)
* Use **nome de usuário correto**:

  * Ubuntu: `ubuntu`
  * Amazon Linux: `ec2-user`
  * Debian: `admin` ou `debian`

---

## ✅ TESTE PRÁTICO PARA ALUNOS

1. Criar instância EC2 com Ubuntu
2. Baixar chave `.pem`
3. Executar:

```bash
ssh -i chave.pem ubuntu@<IP_DA_INSTANCIA>
```

4. Rodar comandos remotos como:

```bash
uptime
uname -a
ls -la
```

---

## 🧠 RECAPITULANDO

| Conceito      | O que é                                                |
| ------------- | ------------------------------------------------------ |
| SSH           | Protocolo seguro de acesso remoto por linha de comando |
| Cliente       | Sua máquina local (terminal)                           |
| Servidor      | Onde o SSH está ativo (`sshd`)                         |
| Chave pública | Fica no servidor para validar acesso                   |
| Chave privada | Fica com você, usada para autenticar                   |

---

## 🧠 DICA VISUAL – MAPA MENTAL SSH

Se quiser, posso te enviar um **mapa mental ilustrando:**

* O que é SSH
* Chaves públicas e privadas
* Fluxo de autenticação
* Comandos úteis

---
# Aula 42 - AWS - Security Groups

## 🌐 Tutorial: Liberando uma Porta Web com Security Groups na AWS
## ✅ O que é um Security Group?

> Um **Security Group** na AWS funciona como um **firewall virtual** para sua instância EC2.

Ele controla:

* 📥 Quais conexões **podem entrar** na máquina (*Inbound Rules*)
* 📤 Quais conexões **podem sair** da máquina (*Outbound Rules*)

---

## 🎯 Objetivo

Liberar uma porta web (ex: `3000`, `80` ou `443`) para acessar sua aplicação Node.js pela internet.

---

## 🧭 Passo a Passo

---

## 🔹 Passo 1 – Acesse o painel EC2

1. Entre no console da AWS:

   * [AWS Console EC2](https://console.aws.amazon.com/ec2?utm_source=chatgpt.com)

2. No menu lateral:

   * Clique em **Instances**

---

## 🔹 Passo 2 – Selecione sua instância

1. Clique sobre a instância EC2 desejada
2. Vá até a aba:

   * **Security**

Você verá algo parecido com:

```text
Security Groups:
launch-wizard-1
```

---

## 🔹 Passo 3 – Abrir o Security Group

1. Clique no nome do Security Group
2. Você será levado para a tela de configuração do firewall

---

## 🔹 Passo 4 – Editar regras de entrada (Inbound Rules)

1. Clique em:

```text
Edit inbound rules
```

---

## 🔹 Passo 5 – Adicionar nova regra

Clique em:

```text
Add rule
```

---

## 🔧 Exemplo: Liberando Porta 3000 (Node.js / Express)

Configure assim:

| Campo      | Valor                |
| ---------- | -------------------- |
| Type       | Custom TCP           |
| Port Range | 3000                 |
| Source     | Anywhere (0.0.0.0/0) |

---

## 🔓 Explicação dos campos

### 🔹 Type

Define o tipo de tráfego:

* HTTP → Porta 80
* HTTPS → Porta 443
* SSH → Porta 22
* Custom TCP → Qualquer porta personalizada

---

### 🔹 Port Range

A porta usada pela aplicação.

Exemplos:

| Aplicação        | Porta |
| ---------------- | ----- |
| Express / Node   | 3000  |
| React Dev Server | 5173  |
| HTTP             | 80    |
| HTTPS            | 443   |

---

### 🔹 Source

Quem poderá acessar.

| Valor       | Significado             |
| ----------- | ----------------------- |
| `0.0.0.0/0` | Qualquer IP da internet |
| Meu IP      | Apenas seu computador   |

---

## 🔹 Passo 6 – Salvar regras

Clique em:

```text
Save rules
```

---

## ✅ Testando o acesso

Agora sua aplicação pode ser acessada via navegador:

```text
http://IP_PUBLICO:3000
```

Exemplo:

```text
http://3.92.123.100:3000
```

---

## 🧪 Como verificar se a aplicação está realmente rodando

Na instância EC2:

```bash
node index.js
```

Ou:

```bash
pm2 list
```

---

## ⚠️ Problemas comuns

---

## ❌ Porta liberada mas não acessa

### Verifique:

### 1️⃣ Aplicação está rodando?

```bash
ps aux | grep node
```

---

### 2️⃣ Aplicação está ouvindo em `0.0.0.0`?

No Express:

```js
app.listen(3000, "0.0.0.0");
```

⚠️ Se estiver `localhost` ou `127.0.0.1`, não funcionará externamente.

---

### 3️⃣ Firewall do Ubuntu (UFW)

Verifique:

```bash
sudo ufw status
```

Liberar porta:

```bash
sudo ufw allow 3000
```

---

## 🧠 Exemplo Visual do Fluxo

```text
Internet
   ↓
Security Group AWS
   ↓
Porta 3000 liberada
   ↓
Instância EC2
   ↓
Aplicação Node.js/Express
```

---

## 🔐 Boas práticas

| Boa prática                       | Motivo                         |
| --------------------------------- | ------------------------------ |
| Liberar apenas portas necessárias | Segurança                      |
| Evitar `0.0.0.0/0` em SSH         | Reduz risco de ataques         |
| Usar HTTPS em produção            | Comunicação criptografada      |
| Usar NGINX + Reverse Proxy        | Melhor performance e segurança |

---

## 🚀 Portas mais comuns

| Serviço         | Porta |
| --------------- | ----- |
| SSH             | 22    |
| HTTP            | 80    |
| HTTPS           | 443   |
| Node.js Express | 3000  |
| React/Vite      | 5173  |
| PostgreSQL      | 5432  |
| MySQL           | 3306  |

---

## ✅ Conclusão

Com o Security Group corretamente configurado, sua instância EC2 pode:

* Hospedar APIs
* Servir aplicações web
* Receber tráfego da internet
* Ser acessada remotamente de forma controlada

Esse é um dos conceitos mais importantes de infraestrutura na AWS.
