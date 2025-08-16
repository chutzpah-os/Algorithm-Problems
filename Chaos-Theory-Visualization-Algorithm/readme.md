# 🌀 Teoria do Caos - Demonstração Interativa (Text in Portuguese)

Uma aplicação web educativa que demonstra os principais conceitos da **Teoria do Caos** através de visualizações matemáticas interativas e explicações teóricas detalhadas.

### Demonstração Visual
<img src="/Chaos-Theory-Visualization-Algorithm/screenshots/2.png" alt="Chaos Theory" width="600"> 


##  Objetivo

Este projeto foi desenvolvido para tornar os conceitos abstratos da teoria do caos acessíveis através de **algoritmos visuais interativos**, permitindo explorar na prática como sistemas determinísticos podem exibir comportamento imprevisível.


##  Demo Online

Abra o arquivo `teoria_do_caos_interativo.html` diretamente no seu navegador para explorar as demonstrações.

## 📊 Funcionalidades

### 1.  Mapa Logístico
- **Visualização em tempo real** da evolução populacional
- **Controles interativos** para parâmetro r e condição inicial x₀
- **Identificação automática** de regimes comportamentais
- **Teoria completa** sobre pontos fixos e estabilidade

### 2.  Atrator de Lorenz  
- **Animação 3D projetada** do famoso "atrator borboleta"
- **Controle dos parâmetros** σ (Prandtl), ρ (Rayleigh), β (geométrico)
- **Visualização com gradientes** coloridos
- **Fundamentos físicos** da convecção térmica

### 3.  Efeito Borboleta
- **Comparação visual** de trajetórias com condições iniciais próximas
- **Análise quantitativa** da divergência exponencial
- **Demonstração prática** da dependência sensível
- **Cálculo do horizonte** de previsibilidade

### 4.  Diagrama de Bifurcação
- **Visualização completa** da rota de Feigenbaum para o caos
- **Identificação de regimes** por cores
- **Marcação de pontos críticos** de bifurcação
- **Estruturas fractais** e janelas periódicas

##  Conteúdo Matemático

### Teoremas Implementados
- **Teorema de Feigenbaum** (constante universal δ ≈ 4.669)
- **Teorema de Lorenz** (1963) sobre atratores estranhos
- **Teorema de Sharkovsky** (ordem universal de períodos)
- **Teorema da Bifurcação Transcrítica**

### Fórmulas Fundamentais
- Mapa logístico: `x_{n+1} = r·x_n·(1-x_n)`
- Sistema de Lorenz: equações diferenciais acopladas
- Expoentes de Lyapunov para quantificar o caos
- Dimensão fractal dos atratores estranhos

### Conceitos Explicados
- **Dependência sensível às condições iniciais**
- **Cascata de bifurcações de duplicação de período**
- **Atratores estranhos e dimensões fractais**
- **Horizonte de previsibilidade em sistemas caóticos**
- **Universalidade de Feigenbaum**

##  Tecnologias Utilizadas

- **HTML5 Canvas** para renderização gráfica de alta performance
- **JavaScript ES6+** para algoritmos matemáticos e animações
- **MathJax** para renderização de fórmulas matemáticas
- **CSS3** com gradientes e animações modernas
- **Design Responsivo** para desktop e dispositivos móveis

##  Estrutura do Projeto

```
teoria-do-caos-interativo/
│
├── teoria_do_caos_interativo.html  # Aplicação principal
├── README.md                       # Este arquivo
└── screenshots/                    # Capturas de tela 
```

##  Como Usar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/teoria-do-caos-interativo.git
   ```

2. **Abra o arquivo HTML:**
   ```bash
   cd teoria-do-caos-interativo
   open teoria_do_caos_interativo.html
   ```
   Ou simplesmente clique duas vezes no arquivo para abrir no navegador.

3. **Explore os diferentes sistemas:**
   - Ajuste os parâmetros usando os controles deslizantes
   - Observe como pequenas mudanças causam grandes diferenças
   - Leia as explicações teóricas detalhadas ao lado

## 🔬 Experimentos Sugeridos

### Mapa Logístico
- Comece com `r = 2.5` e aumente gradualmente até `r = 4`
- Observe a transição: ordem → oscilação → caos
- Teste diferentes condições iniciais no regime caótico

### Atrator de Lorenz
- Use os valores clássicos: σ=10, ρ=28, β=8/3
- Varie ρ para ver a transição para o comportamento caótico
- Observe como o atrator "nasce" quando ρ > 24.74

### Efeito Borboleta
- Comece com diferenças microscópicas (10⁻⁶)
- Observe a amplificação exponencial ao longo do tempo
- Calcule o tempo de previsibilidade prática

### Diagrama de Bifurcação
- Gere com alta resolução para ver detalhes fractais
- Identifique as bifurcações de duplicação de período
- Procure por "janelas periódicas" dentro do regime caótico

##  Base Teórica

### Livros Recomendados
- **"Caos: Criando uma Nova Ciência"** - James Gleick
- **"Nonlinear Dynamics and Chaos"** - Steven Strogatz
- **"Chaos and Fractals"** - Peitgen, Jürgens & Saupe

### Papers Fundamentais
- Lorenz, E. (1963). "Deterministic Nonperiodic Flow"
- Feigenbaum, M. (1978). "Quantitative Universality for a Class of Nonlinear Transformations"
- Li, T. & Yorke, J. (1975). "Period Three Implies Chaos"

## 🎓 Aplicações Educacionais

### Para Professores
- Material visual para aulas de **Sistemas Dinâmicos**
- Demonstrações práticas de **Matemática Aplicada**
- Exemplos concretos para **Física Não-Linear**
- Ferramenta para **Modelagem Matemática**

### Para Estudantes
- Visualização de conceitos matemáticos abstratos
- Experimentação interativa com parâmetros
- Compreensão intuitiva de teoremas complexos
- Ponte entre teoria e aplicação prática

## Compatibilidade

- ✅ **Chrome/Chromium** (recomendado)
- ✅ **Firefox**
- ✅ **Safari**
- ✅ **Edge**
- 📱 **Dispositivos móveis** (design responsivo)

## Contribuições

Contribuições são bem-vindas! Algumas ideias para melhorias:

- [ ] Implementar mais sistemas caóticos (Rössler, Chua, Duffing)
- [ ] Adicionar análise espectral (FFT) dos sinais
- [ ] Incluir cálculo numérico dos expoentes de Lyapunov
- [ ] Implementar zoom interativo no diagrama de bifurcação
- [ ] Adicionar exportação de dados para análise
- [ ] Incluir mais idiomas (inglês, espanhol)

### Como Contribuir
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

##  Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## Reconhecimentos

- **Edward Lorenz** - Descoberta do efeito borboleta
- **Mitchell Feigenbaum** - Constantes universais em bifurcações
- **Robert May** - Popularização do mapa logístico
- **Henri Poincaré** - Fundador da teoria qualitativa de equações diferenciais

## Contato

Se você tem dúvidas, sugestões ou encontrou bugs, abra uma **issue** no GitHub ou entre em contato!

---

### Se este projeto foi útil para você, considere dar uma estrela no GitHub!

**Feito para democratizar o conhecimento matemático**