import useWeb3forms from "@web3forms/react";
import css from './contact-form.module.css'
import React, { useState } from "react";
import { useForm } from "react-hook-form";


export const ContactForm = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    
    const [message, setMessage] = useState(false);
    
    const apiKey = "86b93aa6-b0e2-4e8f-876a-386faa6f6fa3"
    const { submit: onSubmit } = useWeb3forms({
        access_key: apiKey,
        settings: {
            from_name: "Полюк Людмила сайт",
            subject: "New Contact Message from your Website",
        },
        onSuccess: (msg, data) => {
            console.log('ok')
            setMessage(msg);
            console.log(message)
            reset();
        },
        onError: (msg, data) => {
      
            setMessage(msg);
        },
    })

    
    
    return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
      <label>Name</label>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p className={css.errorsmsg}>{errors.name.message}</p>}

      <label>Email</label>
      <input {...register("email", { required: "Email is required", pattern: /^\S+@\S+$/i })} />
      {errors.email && <p className={css.errorsmsg}>{errors.email.message}</p>}

      <label>Message</label>
            <textarea {...register("message", { required: "Message is required" })} className={css.textarea} />
      {errors.message && <p className={css.errorsmsg}>{errors.message.message}</p>}

      <button type="submit" className={css.submit}>Submit</button>
    </form>
  );


}