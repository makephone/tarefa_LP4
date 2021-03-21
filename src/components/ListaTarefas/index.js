import './index.css'

import Tarefa from '../Tarefa'

function ListaTarefas(props) {
  
    return (
        <div className="conteudo">
            <ul className="lista">
            { props.tarefas.map( tarefa => 


                props.autores.map(autor =>
                    
                    <Tarefa tarefa={tarefa} autor={autor} key={tarefa.id} excluir={props.excluir} alterarStatus={props.alterarStatus} />
                        
                   
                               

                    ))}
            </ul>
        </div>
    )
}

export default ListaTarefas