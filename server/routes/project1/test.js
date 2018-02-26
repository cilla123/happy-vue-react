import { readFileSync } from 'fs'
import { get, post, put, controller } from '../../libs/decorator'

@controller('/api/v0')
class TestController {

    @get('/test')
    async getTest(ctx, next) {
        ctx.body = {
            data: {},
            error_code: 200
        }
    }

    @get('/test3')
    async getTest2(ctx, next) {
        ctx.body = {
            data: {
                "key": "value"
            },
            error_code: 200
        }
    }

}

export default TestController