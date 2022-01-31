import { CREATE } from './action-types'

const initialState = {
  post: {
    userId: null,
    id: null,
    title: null,
    body: null
  },
}

const PostReducer = (
  state = initialState,
  { type, payload }: DispatchProps,
) => {
  switch (type) {
    case CREATE:
      return { ...state, ...{ post: payload } }
    default:
      return state
  }
}

interface DispatchProps {
  type: string
  payload: any
}

export default PostReducer
