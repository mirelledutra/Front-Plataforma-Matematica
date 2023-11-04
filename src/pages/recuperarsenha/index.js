import React, { useState } from 'react';

import style from '@/pages/recuperarsenha/recuperarsenha.module.css';

import { useRouter } from 'next/router';
import Form from '@/components/ModalRecuperarSenha/Form';
import Input from '@/components/ModalRecuperarSenha/Input';
import Button from '@/components/ModalRecuperarSenha/Button';

export default function Home() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  return (
    <>
      <main className={style.main}>
        <div className={style.container}>
          <Form >
           
            <label className={style.label}>E-mail:</label>
            <Input className={style.input}
              id={email}
              value={email}
              name="email"
              tipo={"email"}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={"usuario@gmail.com"}
            />
         
          
           
            <Button 
              onClick={() => {      
                setEmail('');
                window.alert('E-mail enviado com sucesso!');
              }}
            >
              Enviar E-mail
            </Button>

            <button className={style.button}
            onClick={() => {
              router.push('/Login');
            }}
          >
            Voltar para o Login
          </button>
          </Form>
          
        </div>
      </main>

    </>
  );
}
