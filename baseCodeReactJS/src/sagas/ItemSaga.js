import callAPI from '../fetchAPIs/ItemAPI'
import * as types from '../constants'
import * as actions from '../actions/ItemAction'
import {put , takeEvery} from 'redux-saga/effects'

function* Get(action) {
    try {
        const res = yield callAPI('GET' , '')

        yield put(actions.getSuccess({
            listData : res.listData
        }))    
    } catch (error) {
        yield put(actions.getFailure(error))
    }
} 

function* Add(action) {
    try {
        yield callAPI('POST' , `/add` , action.payload)
        yield put(actions.addSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.getFailure(error))
    }
} 

function* Delete(action) {
    try {
        yield callAPI('DELETE' , `/${action.payload.id}` ,'')
        yield put(actions.deleteSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.deleteFailure(error))
    }
} 

function* Update(action) {
    try {
        yield callAPI('PUT' , `/${action.payload.id}` ,action.payload)
        yield put(actions.updateSuccess())
        yield put(actions.getRequest())
    } catch (error) {
        yield put(actions.updateFailure(error))
    }
} 

const ItemSaga = [
    takeEvery(types.GET_ITEMS_REQUEST , Get),
    takeEvery(types.ADD_ITEMS_REQUEST , Add),
    takeEvery(types.DELETE_ITEMS_REQUEST , Delete),
    takeEvery(types.UPDATE_ITEMS_REQUEST , Update),

]

export default ItemSaga