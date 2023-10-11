import React from "react"
import Table from "./Tables"

function App () {
    const data = [
        {Nome_Curso: 'Geometria Plana', descricao: 'Aula de transformação', 
        professor: 'Marcos Andrade', data_ini: '02/10/2023', data_fim: '25/10/2023'},
        {Nome_Curso: 'Geometria Plana', descricao: 'Aula de transformação', 
        professor: 'Marcos Andrade', data_ini: '02/10/2023', data_fim: '25/10/2023' },
        {Nome_Curso: 'Geometria Plana', descricao: 'Aula de transformação', 
        professor: 'Marcos Andrade', data_ini: '02/10/2023', data_fim: '25/10/2023' },
    ]
    const head = {
        id: '', 
        Nome_Curso: 'Curso',
        descricao: 'Descrição',
        professor: 'Professor (a)',
        data_ini: 'Data Início',
        data_fim: 'Data Final'
    }
    return (
        <div>
            <Table data={ data } head={head} />
        </div>
    )
}

export default App