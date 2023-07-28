import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: '',
    email: '',
    password: '',
  });


  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr/>
      <form>
      <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value= { username }
          onChange={ onInputChange }
      />

      <input
          type="email"
          className="form-control mt-3"
          placeholder="example@example.com"
          name="email"
          value= { email }
          onChange={ onInputChange }
      />

      <input
          type="password"
          className="form-control mt-3"
          placeholder="Contraseña"
          name="password"
          autoComplete="on"
          value= { password }
          onChange={ onInputChange }
      />

      <button onClick={ onResetForm } className="btn btn-primary mt-3">Reset</button>

      </form>
      

    </>
  )
}
