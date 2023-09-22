import {authActions} from '../auth/authActionCreators'
import {EventActionCreators} from '../event/actionCreators'


export const allActions = {
    ...authActions,
    ...EventActionCreators
}