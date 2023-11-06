import axios from "axios";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";
import CardCurso from "../CardCurso";

export default function ListCardCursos() {
    const [curso, setCurso] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/cursos")
            .then(resultado => {
                setCurso(resultado.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Ocorreu um erro ao carregar os cursos.</p>;
    }

    return (
        <div className={styles.listCardCurso}>
            {curso.map(curso => (
            
                <CardCurso 
                
                    key={curso.id}
                    id={curso.id}
                    nivel={curso.nivel}
                    disciplina={curso.disciplina}

                    
                />
                
            ))}
            
        </div>
    );
}
