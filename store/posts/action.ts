import { CREATE } from './action-types'

export const create = (payload: any) => actionObject(CREATE, payload)

const actionObject = (type: string, payload: any = null) => {
    return { type, payload }
}