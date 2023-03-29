import React, { FormEvent } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export default function LoginForm({
  onSubmit
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <form
      className="columns is-flex is-flex-direction-column box"
      onSubmit={onSubmit}
    >
      <div className="column">
        <Image
          src={'/logo.png'}
          alt={'Flowable OSS'}
          width={'300'}
          height={'20'}
        />
      </div>
      <div className="column">
        <label htmlFor="" className="label">
          Username
        </label>
        <div className="control has-icons-left">
          <span className="icon is-small">
            <FontAwesomeIcon
              icon={faUser}
              className="fas fa-user"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>
          <input
            name="username"
            type="text"
            placeholder="username"
            className="input"
            required
          />
        </div>
      </div>
      <div className="column">
        <label htmlFor="" className="label">
          Password
        </label>
        <div className="control has-icons-left">
          <span className="icon is-small">
            <FontAwesomeIcon
              icon={faLock}
              className="fas fa-lock"
              aria-hidden={'true'}
            ></FontAwesomeIcon>
          </span>
          <input
            name="password"
            type="password"
            placeholder="*******"
            className="input"
            required
          />
        </div>
      </div>
      <div className="column">
        <button className="button is-success is-fullwidth">Login</button>
      </div>
    </form>
  )
}
