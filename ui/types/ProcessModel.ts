import { VariablesModel } from '@/types/TaskModel'

export interface ProcessModel {
  id: string
  url: string
  name: string
  businessKey: string
  businessStatus: string
  processDefinitionId: string
  processDefinitionUrl: string
  processDefinitionName: string
  processDefinitionDescription: string
  startTime: Date
  endTime: Date
  durationInMillis: number
  startUserId: string
  startActivityId: string
  endActivityId: string
  deleteReason: string
  superProcessInstanceId: string
  variables: VariablesModel[]
  callbackId: string
  callbackType: string
  referenceId: string
  referenceType: string
  propagatedStageInstanceId: string
  tenantId: string
}

export interface ProcessModelResponse {
  data: ProcessModel[]
  total: number
  start: number
  sort: string
  order: string
  size: number
}
