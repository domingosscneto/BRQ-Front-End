let inputNome = document.querySelector(".nome") as HTMLInputElement;
let inputStatus = document.getElementsByName("atividade") as any;
let inputData = document.querySelector(".data") as HTMLInputElement;
let inputTexto = document.querySelector(".areaTexto") as HTMLInputElement;
let btnCadastro = document.querySelector(".cadastrar") as HTMLButtonElement;
let novosCards:Array<Card> = []

class Card{
    private nome:string;
    private descricao:string;
    private data:string;
    private status:boolean;
    private id:string;

    constructor(_nome:string, _descricao:string, _data:string, _status:boolean, _id:string){
        this.nome = _nome;
        this.descricao = _descricao;
        this.data = _data;
        this.status = _status;
        this.id = _id;
    }

    public get Nome():string{
        return this.nome;
    }
    public set Nome(value:string){
        this.nome = value;
    }


    public get Descricao():string{
        return this.descricao;
    }
    public set Descricao(value:string){
        this.descricao = value;
    }


    public get Data():string{
        return this.data;
    }
    public set Data(value:string){
        this.data = value;
    }


    public get Status():boolean{
        return this.status;
    }
    public set Status(value:boolean){
        this.status = value;
    }


    public get Id():string{
        return this.id;
    }
    public set Id(value:string){
        this.id = value;
    }
}

interface interfaceApi{
    nome:string;
    descricao:string;
    data:string;
    status:boolean;
    id:string;
}

//função que pega os dados da API e armazena em um array
function obterCardsApi():void{
    fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes')
    .then(resposta=>resposta.json())
    .then((dados:interfaceApi[])=>{
        return dados.map(dadosCard=>{
            return new Card(
                dadosCard.nome,
                dadosCard.descricao,
                dadosCard.data,
                dadosCard.status,
                dadosCard.id
            )
        })
    })
    .then(dadosNovosCards =>{
        novosCards = dadosNovosCards;
        inserirDados(dadosNovosCards)
        console.log(novosCards);
    })

    validacaoStatus(inputStatus);
    inputData.value;
    inputTexto.value;
}

//função que cria um card novo
function criarCards() {
    inputNome.value;
    validacaoStatus(inputStatus);
    inputData.value;
    inputTexto.value;

    let novoCard = new Card(inputNome.value, inputTexto.value, inputData.value, validacaoStatus(inputStatus), criarId())
    console.log("corrigir idFake");
    novosCards.push(novoCard);
    console.log(novosCards);
    inserirDados(novosCards)
}

function criarId(){
    let maiorId:number = 0
    novosCards.map((dadoId, index)=>{
        if (Number(dadoId.Id) > maiorId) {
            maiorId = Number(dadoId.Id)
        }
    })
    maiorId ++
    return maiorId.toString()
}

//EventListener do botão cadastrar
btnCadastro.addEventListener('click', () => {
    criarCards();
})


function validacaoStatus(status:any){
    status = inputStatus;
    for (let i = 0; i < status.length; i++) {
        if (status[i].checked) {
            if (status[i].value == "ativo") {
                status = true
            }else{
                status = false
            }
        }
    }
    return status
}

//função que transforma a data para a formatação correta
function dataTexto(data:string):string{
    let newDate = new Date(data)
    
    let dataString:string;
    dataString=(newDate.getDate().toString()+"/"
            +(newDate.getMonth()+1).toString()+"/"
            +newDate.getFullYear().toString()
            )
    return dataString
}

//função para inserir os dados no card e atualizar a página HTML
function inserirDados(arrayNovosCards:any){
    let cardNovo = document.querySelector('.secao2') as HTMLElement
    console.log(cardNovo);
    cardNovo.innerHTML = ""
    for (let i = 0; i < arrayNovosCards.length; i++) {
        cardNovo.innerHTML += `<div class="pacotes">
        <h3 class="nomeAPI">${arrayNovosCards[i].nome}</h3>
        <p class="txtAPI">${arrayNovosCards[i].descricao}</p>
        <p class="txtData">${dataTexto (arrayNovosCards[i].data)}</p>
        <button type="submit" class="editar" id="editar${arrayNovosCards[i].id}" value="${arrayNovosCards[i].id}" onClick="editar(${arrayNovosCards[i].id})">Editar</button>
        <button type="submit" class="excluir" id="excluir${arrayNovosCards[i].id}" value="${arrayNovosCards[i].id}" onClick="excluir(${arrayNovosCards[i].id})">Excluir</button>
    </div>`
    }
    console.log(dataTexto(arrayNovosCards[0].data));
}

//função que exclui o card ao clicar no botão Excluir
function editar(id:string) {
    let indice:number
    indice = selecionarCardById(id)
    inputNome.value = novosCards[indice].Nome;
    inputData.value = InversaoData(novosCards[indice].Data);
    inputTexto.value = novosCards[indice].Descricao;
    inputStatus.value = novosCards[indice].Status;
    excluir(id)
    inserirDados(novosCards)
}

//função que inverte a data para a formatação correta e funcionar o botão editar
function InversaoData(data:string):string{
    let newDate = new Date(data)
    let dataString:string;
    dataString=(Number(newDate.getFullYear()).toString()+"-"
            +(newDate.getMonth()+1).toString()+"-"
            +newDate.getDate().toString()
            )
    return dataString
}

//função que exclui o card ao clicar no botão Excluir
function excluir(id:string) {
    let indice:number
    indice = selecionarCardById(id)

    novosCards.splice(indice, 1)
    inserirDados(novosCards)
}

//Seleciona o card pelo seu id
function selecionarCardById(id:string):number{
    let indice:number = 0
    for (let i = 0; i < novosCards.length; i++) {
        if (novosCards[i].Id == id) {
            indice = i
        }
    }
    return indice
}

window.onload = () =>{
    obterCardsApi();
}