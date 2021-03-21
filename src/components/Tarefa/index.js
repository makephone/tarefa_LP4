import './index.css'

function Tarefa(props) {

    function aoClicar() {
        props.excluir(props.tarefa);
    }

    function aoAlterarStatus() {
        props.alterarStatus(props.tarefa)
    }

    function obterClasseCirculo(tarefa) {
        if (tarefa.completada) {
            return "fa fa-check-circle circulo"
        }
        else {
            return "fa fa-circle circulo"
        }
    }

    function obterClasseTexto(tarefa) {
        if (tarefa.completada) {
            return "texto texto-riscado"
        }
        else {
            return "texto"
        }
    }
if(props.tarefa.autor_id===props.autor.id ){
    return (
        <div className="item">
            <i className={ obterClasseCirculo(props.tarefa) } onClick={aoAlterarStatus} ></i>
            <div className="coluna" >
            <p className={ obterClasseTexto(props.tarefa) }>{props.tarefa.texto}</p>
            <span className="nomeAutor" >{props.autor.nome}</span>
            </div>

            <i className="fa fa-trash lixeira" onClick={aoClicar}></i>
        </div>
    )

}else{
    return false
}
   
}

export default Tarefa