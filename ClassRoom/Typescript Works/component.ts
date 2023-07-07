import {ReactiveFormModule} from './form'
import {TodoService} from './service'

var frm=new ReactiveFormModule()
frm.setValue()

var serv=new TodoService()
serv.createTodo()