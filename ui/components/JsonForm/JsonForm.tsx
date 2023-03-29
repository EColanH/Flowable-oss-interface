import React from 'react'
import { materialCells, materialRenderers } from '@jsonforms/material-renderers'
import { JsonForms } from '@jsonforms/react'
import { createAjv } from '@jsonforms/core'

export interface JsonFormProps {
  data: any
  setData: any
  formSchema: any
  formUi: any
  readonly: boolean
}

const handleDefaultsAjv = createAjv({ useDefaults: true })
const JsonForm = ({
  data,
  setData,
  formSchema,
  formUi,
  readonly
}: JsonFormProps) => {
  return (
    <>
      <JsonForms
        schema={formSchema}
        uischema={formUi}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setData(data)}
        ajv={handleDefaultsAjv}
        readonly={readonly}
      />
    </>
  )
}

export default JsonForm
