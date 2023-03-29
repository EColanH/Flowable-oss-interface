export interface VariablesModel {
  name: string
  type: string
  value: string
  valueUrl: string
  scope: string
}

export interface TaskModel {
  id: string
  processDefinitionId: string
  processDefinitionUrl: string
  processInstanceId: string
  processInstanceUrl: string
  executionId: string
  name: string
  description: string
  deleteReason: string
  owner: string
  assignee: string
  startTime: Date
  endTime: Date
  durationInMillis: number
  workTimeInMillis: number
  claimTime: Date
  taskDefinitionKey: string
  formKey: string
  priority: number
  dueDate: Date
  parentTaskId: string
  url: string
  variables: VariablesModel[]
  scopeDefinitionId: string
  scopeId: string
  subScopeId: string
  scopeType: string
  propagatedStageInstanceId: string
  tenantId: string
  category: string
}

export interface TaskModelResponse {
  data: TaskModel[]
  total: number
  start: number
  sort: string
  order: string
  size: number
}
