import { readFileSync } from 'fs'
import { get, post, put, controller } from '../../libs/decorator'

@controller('/project1')
class IndexController {

    @get('/')
    async render(ctx, next) {
        ctx.body = await readFileSync(global.config.project1, 'utf8')
    }

}

export default IndexController