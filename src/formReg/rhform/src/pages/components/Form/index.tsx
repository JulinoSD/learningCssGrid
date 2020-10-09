import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { recaptcha } from 'react-google-recaptcha'

//The use of interface is about to define what fields i want on my component
interface formData {
    name: string,
    password: string,
    email: string,
    terms: boolean
}

export const Form = () => {
    const { register, handleSubmit, errors } = useForm<formData>({
        defaultValues: {
            name: 'Julino',
            email: 'ddimojulino@gmail.com',
            password: 'Julin@28',
            terms: true,
        }
    })
    return (
        <div>
            <form onSubmit={handleSubmit((formData) => {
                console.log(formData, 'Form')
            })}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        ref={register({ required: 'required' })}
                    />
                    {/* mostrando mensagem de erro caso campo não esteja preenchido */}
                    {errors.name ? <div>{errors.name.message}</div> : null}
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        ref={register({ required: 'required' })}
                    />
                    {errors.email ? <div>{errors.email.message}</div> : null}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        ref={register({
                            required: 'required',
                            minLength: {
                                value: 8,
                                message: "must be 8 char"
                            },
                            validate: (value) => {
                                return (
                                    [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/]
                                        .every((pattern) => pattern.test(value)
                                    ) || "Must include uppercase, lower, number, special char")
                            }
                        })}
                    />
                    {errors.password ? <div>{errors.password.message}</div> : null}
                </div>
                <div>
                    <label htmlFor="terms">Acept the terms</label>
                    <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        ref={register({ required: 'You must agree the terms' })}
                    />
                    {/* mostrando mensagem de erro */}
                    {errors.terms ? <div>{errors.terms.message}</div> : null}
                </div>
                <div>
                    <button type="submit">Enroll</button>
                </div>
            </form>
        </div>
    )
}