import { VariablesModel } from '@/types/TaskModel'

export interface CaseModel {
  id: string
  url: string
  name: string
  businessKey: string
  businessStatus: string
  caseDefinitionId: string
  caseDefinitionUrl: string
  caseDefinitionName: string
  caseDefinitionDescription: string
  startTime: Date
  endTime: Date
  startUserId: string
  superProcessInstanceId: string
  variables: VariablesModel[]
  tenantId: string
  state: string
  callbackId: string
  callbackType: string
  referenceId: string
  referenceType: string
}

export interface CaseModelResponse {
  data: CaseModel[]
  total: number
  start: number
  sort: string
  order: string
  size: number
}
