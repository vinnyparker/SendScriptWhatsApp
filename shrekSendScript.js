async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Uma carrocinha de cachorro-quente
Espia só o vendedor: olha prum lado
Olha pro outro, disfarça, não vem ninguém
Ah lá, ele tá enfiando a mão dentro da calça
Aquela mão que segura o cachorro-quente
Ah lá, ele tá coçando o cu com a mão
Moça, ô, moça (não compra cachorro-quente, não)
Nome: Clarisse
Altura: 1 metro e 80
Esguia, magérrima, olhos de esfinge
Pés pequenininhos
Mas tem uma trolha
O elefante pergunta pra vaquinha
(Tomou no cu?)
A colombina pergunta pro pierrôt
(Tomou no cu?)
A enfermeira pergunta pro defunto
(Tomou no cu?)
E todo mundo começa a perguntar
(Tomou no cu?)
Calma, você deve ter tomado alguma coisa
Relaxa, respira fundo, isso, agora me fala
Qual o seu nome?
(Boceta)
O nome da tua mãe?
(Boceta)
De onde você vem?
(Boceta)
O quê que você quer?
(Boceta)
Desculpa
Esse meu jeito
Meio desesperado
De dizer as coisas
Mas o problema
É que nesse momento
Nesse exato momento
Um marimbondo
Tá dentro da minha calça
E tá picando
A minha bunda
Eu bem que fiz tudo
Pra ser o que mamãe queria
Mas o tempo foi passando
O tempo foi passando
E tudo foi ficando
Meio escalafodético
Ele era tão quietinho
Um idiota comentou
E tudo seria patético
Se não fosse pateta!
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
