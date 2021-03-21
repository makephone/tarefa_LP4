import './App.css';

import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import Mensagem from './components/Mensagem'
import ListaTarefas from './components/ListaTarefas';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  function Tarefa() {
    axios.get('http://localhost:8888/tarefas/').then(
        resposta => setTarefas(resposta.data)
      )
  }

  function Autor() {
    axios.get('http://localhost:8888/autores').then(
        resposta => setAutores(resposta.data),
        Tarefa()
        
      )
  }

  useEffect(
    () => {
     Autor()
    },
    []
  )


  const [tarefas, setTarefas] = useState([])

  const [autores, setAutores] = useState([])

  function mudarStatus(tarefa) {
    tarefa.completada = !tarefa.completada

    const ts = tarefas.filter(t => t.id !== tarefa.id)

    axios.post('http://localhost:8888/tarefas/', tarefa)

    const novasTarefas = [...ts, tarefa]

    novasTarefas.sort((a, b) => a.texto.localeCompare(b.texto))

    setTarefas(novasTarefas)
  }

  function adicionarTarefa(texto) {
    
    const novaTarefa = {id: tarefas.length + 1, texto: texto, autor_id: 1, completada: false}

    axios.post('http://localhost:8888/tarefas/', novaTarefa).then(function (response) {
      setTarefas([])
      Tarefa()
    })

    
 
        
  }

  function excluirTarefa(tarefa) {
    const novasTarefas = tarefas.filter(t => t.id !== tarefa.id)
    axios.delete('http://localhost:8888/tarefas/' + tarefa.id).then(function (response) {
      setTarefas([])
      Tarefa()
    })
  }

  function obterMensagem() {
    if (tarefas.length === 0) {
      return "Não existem tarefas cadastradas"
    }
    else if (tarefas.length === 1) {
      return "Uma tarefa cadastrada"
    }
    else {
      return tarefas.length + " tarefas cadastradas"
    }
  }



  return (
    <div className="App">
      <Titulo texto="Minha Lista de Tarefas" />
      <Formulario adicionar={adicionarTarefa} />
     
      <ListaTarefas autores={autores} tarefas={ tarefas } 
          excluir={excluirTarefa} 
          alterarStatus={mudarStatus} />
     
      <Mensagem texto={obterMensagem()} />
    </div>
  );
}

export default App;
