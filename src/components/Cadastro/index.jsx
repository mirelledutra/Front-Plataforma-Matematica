// componente de cadastro de usuário

import styles from "./styles.module.css";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "@/util/fetch";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const router = useRouter();

  const handleCadastro = async (e) => {
    e.preventDefault();

    if (confirmarSenha !== senha) {
      alert("Senha e Confirmar senha devem ser iguais!");
      return;
    }

    try {
      await axiosInstance.post("/usuarios", {
        nome,
        email,
        user: email,
        senha,
        telefone: "...",
      });
      alert("Cadastrado com sucesso!");
      router.push("/Login");
    } catch (error) {
      alert(`Ocorreu um erro inesperado: ${JSON.stringify(error)}`);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.imagemgrande}>
        <img src="imagemcadastro.png" alt="Imagem de cadastro" />
      </div>
      <form className={styles.form} onSubmit={handleCadastro}>
        <div className={styles.imagem}>
          <img src="logo.png" alt="Logo" />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="nome">
            Nome:
          </label>
          <input
            className={styles.input}
            type="text"
            value={nome}
            id="nome"
            required
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            value={email}
            id="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="senha">
            Senha:
          </label>
          <input
            className={styles.input}
            type="password"
            minLength={8}
            value={senha}
            id="senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="confirmarSenha">
            Confirmar Senha:
          </label>
          <input
            className={styles.input}
            type="password"
            value={confirmarSenha}
            id="confirmarSenha"
            minLength={8}
            required
            onChange={(e) => setConfirmarSenha(e.target.value)}
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Criar conta
        </button>

        <Link className={styles.botaoHome} href="/">
          Retornar ao painel
        </Link>
      </form>
    </div>
  );
}
