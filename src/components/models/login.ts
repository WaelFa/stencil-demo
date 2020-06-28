// import {action, computed, observable} from "mobx";


// export class Admin {

//     [x: string]: any;

//     @observable
//     public admin:String = 'admin';

//     @observable
//     public password: String = 'password';
    
//     constructor() {
//         // this allows multiple independent mobx instances per page
//         // (good for isolated web components)
//         extras.isolateGlobalState();
//     }

//     @computed
//     public get unfinishedTodoCount() {
//         return this.todos
//             .filter((todo: TodoItem) => !todo.finished).length
//     }

//     @action
//     public login(admin: String, password: String) {
//         if ((admin === 'admin') && (password === 'password')){
//             console.log('logged')
//         }
        
//     }

// }