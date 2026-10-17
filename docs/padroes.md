Factory Method
Onde: src/pagamentos.ts
Por quê: o sistema aceita diferentes formas de pagamento, e cada subclasse decide qual implementação concreta deverá ser criada.

Abstract Factory
Onde: src/hospedagem.ts
Por quê: o sistema oferece diferentes categorias de hospedagem, e cada fábrica concreta cria os produtos relacionados à categoria escolhida, como quarto e café da manhã.

Prototype
Onde: src/Reservation.ts
Por quê: o sistema permite criar uma nova reserva a partir de uma reserva existente, reutilizando seus dados iniciais e possibilitando alterações nas informações da cópia.

Singleton
Onde: src/Gerente.ts
Por quê: o sistema garante que exista apenas uma instância da classe Gerente durante a execução da aplicação, por meio de um construtor privado e um método de acesso à instância, utilizei um pouco fora do escopo para conseguir usar o padrão, pois não pensei em outro jeito de conseguir usar ele sem ser esse.

Builder
Onde: src/contratos.ts
Por quê: o sistema permite construir um contrato de hospedagem passo a passo, definindo informações como hóspede, período, tipo de quarto e valor antes de criar o objeto final.