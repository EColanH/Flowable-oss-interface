export class CustomError extends Error {
  response: Response
  data: {
    message: string
  }

  constructor({
    message,
    response,
    data
  }: {
    message: string
    response: Response
    data: {
      message: string
    }
  }) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(message)

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }

    this.name = 'CustomError'
    this.response = response
    this.data = data ?? { message }
  }
}
