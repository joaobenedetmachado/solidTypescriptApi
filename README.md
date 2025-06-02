# 🧱 solidTypescriptApi

API de exemplo construída com **TypeScript** aplicando os princípios do **SOLID**, com foco em boas práticas de arquitetura e código limpo.

---

## 🧠 O que é SOLID?

**SOLID** é um acrônimo para cinco princípios de design orientado a objetos, fundamentais para a criação de software de fácil manutenção, escalável e robusto. São eles:

- **S** — *Single Responsibility Principle* (Princípio da Responsabilidade Única)  
  > Uma classe deve ter um único motivo para mudar.

- **O** — *Open/Closed Principle* (Princípio Aberto/Fechado)  
  > Entidades devem estar abertas para extensão, mas fechadas para modificação.

- **L** — *Liskov Substitution Principle* (Princípio da Substituição de Liskov)  
  > Subtipos devem poder ser substituídos por seus tipos base sem quebrar o código.

- **I** — *Interface Segregation Principle* (Princípio da Segregação de Interface)  
  > Uma classe não deve ser forçada a depender de interfaces que ela não utiliza.

- **D** — *Dependency Inversion Principle* (Princípio da Inversão de Dependência)  
  > Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

Este projeto é uma API que aplica esses princípios na prática, com exemplos claros de separação de responsabilidades, inversão de dependências e uso de interfaces.

---

## 🚀 Tecnologias

- TypeScript
- Node.js
- Express
- tsup (build)
- zod (validação)
- uuid (geração de IDs)
- Arquitetura orientada a DDD/SOLID

---

## 📦 Instalação e uso

```bash
# 1. Clone o repositório
git clone https://github.com/joaobenedetmachado/solidTypescriptApi.git

# 2. Entre na pasta do projeto
cd solidTypescriptApi

# 3. Instale as dependências
npm install

# 4. Rode a aplicação em modo dev
npm run dev
